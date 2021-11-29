const path = require('path')
const fs = require('fs')
const { task, series, parallel, watch, src, dest } = require('gulp')
const exec = require('gulp-exec')
const { build } = require('vite')
const async = require('async')

const assetsServer = require('browser-sync').create()
const storybookServer = require('browser-sync').create()
const reloadStorybookServer = storybookServer.reload

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
  const basePath = 'src/packages'
  const src = 'src'
  const dest = 'dist'
  return {
    basePath,
    src,
    dest,
    packages: {
      assets: {
        path: `${basePath}/assets`,
        images: {
          src: `${src}/images/**/*`,
          dest: `${dest}/images`
        }
      },
      components: {
        path: [
          `${basePath}/elements`,
          `${basePath}/components`,
          `${basePath}/modules`
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

const buildStorybook = () => src('.')
  .pipe(exec(() => 'npm run build:storybook', CONFIGS.storybook.options))
  .pipe(exec.reporter(CONFIGS.storybook.reportOptions))

task('build:assets', series(buildAssets, copyAssets))
task('build:components', buildComponents)
task('build:storybook', buildStorybook)

/**
 *  WATCH
 */

const watchAssets = () => watch(
  [path.join(PATHS.packages.assets.path, `${PATHS.src}/**/*`)],
  series(buildAssets, copyAssets)
)

const watchComponents = () => {
  const componentPaths = getComponents().map((componentPath) => path.join(componentPath, `${PATHS.src}/**/*`))
  return watch(componentPaths).on('change', (fileName) => {
    const packagePath = fileName.split('/').slice(0, 4).join('/')
    return build({ root: packagePath }).then(() => reloadStorybookServer())
  })
}

task('build:assets:watch', watchAssets)
task('build:components:watch', watchComponents)

/**
 * SERVE ASSETS
 */

const runAssetsServer = () => {
  assetsServer.init({
    startPath: process.env.BASE_URL,
    port: 8888,
    open: false,
    logLevel: 'silent',
    ui: {
      port: 3001
    },
    server: {
      directory: true,
      baseDir: path.join(PATHS.packages.assets.path, PATHS.dest),
      routes: {
        [`${process.env.BASE_URL}`]: path.join(PATHS.packages.assets.path, PATHS.dest)
      }
    }
  })
}

const runStorybookServer = () => {
  storybookServer.init({
    startPath: process.env.STORYBOOK_BASE_URL,
    port: 8889,
    open: false,
    localOnly: true,
    ui: {
      port: 3002
    },
    server: {
      baseDir: PATHS.storybook.dest,
      routes: {
        [`${process.env.STORYBOOK_BASE_URL}`]: PATHS.storybook.dest
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