const path = require('path')
const fs = require('fs')
const { task, series, parallel, watch, src, dest } = require('gulp')
const exec = require('child_process').exec
const { build } = require('vite')
const async = require('async')

const assetsServer = require('browser-sync').create()
const storybookServer = require('browser-sync').create()

/**
 * Configs
 */

const CONFIGS = {
  storybook: {
    options: {
      continueOnError: false,
      pipeStdout: false,
    },
    reportOptions: {
      err: true,
      stderr: false,
      stdout: false
    }
  }
}

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
      dest: 'storybook-static'
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

const buildPackage = (path, cb) => build({ root: path }).then(() => cb())

const getComponents = () => PATHS.packages.components.path.map((path) => [...getPackages(path)]).flat()

const copy = (assetsSrc, assetsDest) => src(assetsSrc).pipe(dest(assetsDest))

const reloadStorybookServer = async () => await storybookServer.reload()

/**
 * Build
 */

const copyAssets = () => {
  const _src = path.join(PATHS.packages.assets.path, PATHS.packages.assets.images.src)
  const _dest = path.join(PATHS.packages.assets.path, PATHS.packages.assets.images.dest)
  return copy(_src, _dest)
}

const buildAssets = async (cb) => {
  await build({ root: PATHS.packages.assets.path })
  cb()
}

const buildComponents = (cb) => async.eachSeries(getComponents(), buildPackage, () => cb())

const buildStorybook = (cb) => exec('npm run build:storybook', (err, stdout, stderr) => cb(err))

task('build:assets', series(buildAssets, copyAssets))
task('build:components', buildComponents)
task('build:storybook', buildStorybook)

/**
 *  WATCH
 */

const watchAssets = () => watch(
  [path.join(PATHS.packages.assets.path, `${PATHS.src}/**/*`)],
  series(buildAssets, copyAssets, reloadStorybookServer)
)

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
      clientPath: '/browser-sync-v2',
      namespace: '/browser-sync-v2'
    },
    server: {
      baseDir: PATHS.storybook.dest,
      routes: {
        [`${process.env.STORYBOOK_BASE_URL}`]: PATHS.storybook.dest
      }
    },
    middleware: function(req, res, next) {
      if (req.headers.host === 'localhost:8889') {
        res.statusCode = 302;
        res.setHeader('Location', `//${process.env.HOST}${req.url}`);
        res.end();
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