const path = require('path')
const fs = require('fs')
const { task, series, parallel, watch, src, dest } = require('gulp')
const exec = require('child_process').exec
const { build } = require('vite')
const async = require('async')

const assetsServer = require('browser-sync').create()
const storybookServer = require('browser-sync').create()

/**
 * Paths
 */

const PATHS = (() => {
  const appBasePath = 'src/packages'
  const src = 'src'
  const dest = 'dist'
  return {
    appBasePath,
    src,
    dest,
    packages: {
      assets: {
        path: `${appBasePath}/assets`,
        images: {
          src: `${src}/images/**/*`,
          dest: `${dest}/images`
        }
      },
      components: {
        path: [
          `${appBasePath}/elements`,
          `${appBasePath}/components`,
          `${appBasePath}/modules`
        ]
      }
    },
    storybook: {
      dest: 'storybook-static',
      assets: 'assets'
    }
  }
})()

/**
 * Utils
 */

const getPackages = (dir) => fs
  .readdirSync(dir)
  .filter((file) => fs.statSync(path.join(dir, file)).isDirectory())
  .map((file) => path.join(dir, file))

const getComponents = () => PATHS.packages.components.path.map((path) => [...getPackages(path)]).flat()

const copy = (assetsSrc, assetsDest) => src(assetsSrc).pipe(dest(assetsDest))

const reloadStorybookServer = async () => await storybookServer.reload()

/***
 * Copy
 */

const copyAssets = () => {
  const _src = path.join(PATHS.packages.assets.path, PATHS.packages.assets.images.src)
  const _dest = path.join(PATHS.packages.assets.path, PATHS.packages.assets.images.dest)
  return copy(_src, _dest)
}

const copyAssetsToStoryBook = () => {
  const _src = path.join(PATHS.packages.assets.path, PATHS.dest + '/**/*')
  const _dest = path.join(PATHS.storybook.dest, PATHS.storybook.assets)
  return copy(_src, _dest)
}

/**
 * Build
 */

/* COMMONS */
const buildPackage = (path, cb, mode) => build({ root: path, mode }).then(() => cb())

/* ASSETS */
const buildAssets = async (cb, mode) => {
  await build({ root: PATHS.packages.assets.path, mode })
  cb()
}

/* COMPONENTS */
const buildComponents = (cb, mode) => async.eachSeries(getComponents(), (path, cb) => buildPackage(path, cb, mode), () => cb())

/* STORYBOOK */
const buildStorybook = (cb, mode) =>
  exec(`${mode ? `NODE_ENV=${mode} ` : ''}npm run build:storybook`, (err) => cb(err))

/* CHROMATIC */
const buildAssetsChromatic = (cb) => buildAssets(cb, 'chromatic')
const buildComponentsChromatic = (cb) => buildComponents(cb, 'chromatic')
const buildStorybookChromatic = (cb) => buildStorybook(cb, 'chromatic')
const buildChromatic = series(buildAssetsChromatic, copyAssets, buildComponentsChromatic, buildStorybookChromatic, copyAssetsToStoryBook)

task('build:assets', series(buildAssets, copyAssets))
task('build:components', buildComponents)
task('build:storybook', buildStorybook)
task('build:chromatic', buildChromatic)
task('build:lerna', series(series(buildAssets, copyAssets), buildComponents))

/**
 *  WATCH
 */

/* ASSETS */
const watchAssets = () => watch(
  [path.join(PATHS.packages.assets.path, `${PATHS.src}/**/*`)],
  series(buildAssets, copyAssets, reloadStorybookServer)
)

/* COMPONENTS */
const watchComponents = () => {
  const componentPaths = getComponents().map((componentPath) => path.join(componentPath, `${PATHS.src}/**/*`))
  return watch(componentPaths).on('change', (fileName) => {
    const packagePath = fileName.split('/').slice(0, 4).join('/')
    return build({ root: packagePath }).then(series(buildStorybook, reloadStorybookServer))
  })
}

task('build:assets:watch', watchAssets)
task('build:components:watch', watchComponents)

/**
 * SERVE ASSETS
 */

/* ASSETS */
const runAssetsServer = () => {
  assetsServer.init({
    startPath: process.env.ASSETS_BASE_URL,
    port: 8888,
    open: false,
    ui: {
      port: 3001
    },
    server: {
      directory: true,
      baseDir: path.join(PATHS.packages.assets.path, PATHS.dest),
      routes: {
        [`${process.env.ASSETS_BASE_URL}`]: path.join(PATHS.packages.assets.path, PATHS.dest)
      }
    }
  })
}

/* STORYBOOK */
const runStorybookServer = () => {
  storybookServer.init({
    startPath: process.env.STORYBOOK_BASE_URL,
    port: 8889,
    open: true,
    localOnly: true,
    ui: {
      port: 3002
    },
    socket: {
      clientPath: '/browser-sync-design-system',
      namespace: '/browser-sync-design-system'
    },
    server: {
      baseDir: PATHS.storybook.dest,
      routes: {
        [`${process.env.STORYBOOK_BASE_URL}`]: PATHS.storybook.dest
      }
    },
    middleware: function(req, res, next) {
      if (req.headers.host === 'localhost:8889') {
        res.statusCode = 302
        res.setHeader('Location', `//${process.env.HOST}${req.url}`)
        res.end()
      } else {
        next()
      }
    }
  })
}

task('serve:assets', runAssetsServer)
task('serve:storybook', runStorybookServer)

/**
 * LIVE
 */

task('live', series(
  series(buildAssets, copyAssets),
  buildComponents,
  buildStorybook,
  parallel(watchAssets, watchComponents, runAssetsServer, runStorybookServer)
))