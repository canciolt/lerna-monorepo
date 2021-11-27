const path = require('path');
const fs = require('fs');
const { task, series, src, dest } = require('gulp');
const { build } = require('vite');
const async = require('async');

/**
 * Configs
 */

const PATHS = (() => {
  const basePath = 'src/packages'
  return {
    basePath,
    packages: {
      assets: {
        path: `${basePath}/assets`,
        images: {
          src: 'src/images/**/*',
          dest: 'dist/images'
        }
      },
      components: {
        path: [
          `${basePath}/elements`,
          `${basePath}/components`,
          `${basePath}/modules`
        ]
      }
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

/**
 * COMMON
 */

const copy = (assetsSrc, assetsDest) => src(assetsSrc).pipe(dest(assetsDest));

/**
 * Build assets
 */
const buildAssets = async (cb) => {
  await build({ root: PATHS.packages.assets.path });
  cb();
}

const copyAssets = () => {
  const _src = path.join(PATHS.packages.assets.path, PATHS.packages.assets.images.src)
  const _dest = path.join(PATHS.packages.assets.path, PATHS.packages.assets.images.dest)
  return copy(_src, _dest)
}

task('build:assets', series(buildAssets, copyAssets));

/**
 * Build components
 */

const buildComponents = (cb) => {
  const components = PATHS.packages.components.path.map((path) => [...getPackages(path)]).flat()
  async.eachSeries(components, buildPackage, () => cb());
}

task('build:components', buildComponents);