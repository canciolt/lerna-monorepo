import merge from 'merge'
import { existsSync } from 'fs'
import { config } from 'dotenv'
import ComponentsConfig from './components.vite.config'
import AssetsConfig from './assets.vite.config'

const ROOT_PATH = `${__dirname }/../../`

/**
 * Returns Vite build configuration for component packages,
 * optionally amended with the specified options
 * @param pkg package.json data
 * @param options Custom build options
 * @returns Vite build configuration
 */
export function getComponentConfig (pkg: Record<any, any>, options: Record<string, any> = {}, mode: string) {
  console.log(`Building component package ${pkg.name} v.${pkg.version} ...`)
  const _customConfig = merge.recursive(options, {
    mode: mode ? mode : 'development',
    build: { minify: mode === 'production' }
  })
  return getConfig(ComponentsConfig, _customConfig, pkg?.name)
}

/**
 * Returns Vite build configuration for component packages,
 * optionally amended with the specified options
 * @param pkg package.json data
 * @param options Custom build options
 * @returns Vite build configuration
 */
export function getAssetsConfig (pkg: Record<any, any>, options: Record<string, any> = {}, mode: string) {
  console.log(`Building assets package ${pkg.name} v.${pkg.version} ...`)
  const { ASSETS } = loadEnv('development')
  const _customConfig = merge.recursive(options, {
    mode,
    base: ASSETS ? ASSETS : '',
    build: { minify: mode === 'production' }
  })
  return getConfig(AssetsConfig, _customConfig)
}

/**
 * Returns Vite build configuration amended with the specified options
 * @param config Default build options
 * @param options Custom build options
 * @param name Optional name of a library, used when building a library instead of browser-executable package
 * @returns Vite build configuration
 */
function getConfig (config: Record<string, any> = {}, options: Record<string, any> = {}, name = '') {
  const _getPackageName = (() => name.split('/').pop())()
  return  merge.recursive(config, name ? { build: { lib: { name: _getPackageName } } } : {}, options)
}

/**
 * Return environment variables from a .env
 * @param mode this value can overridden via the command line --mode option.
 */

function loadEnv (mode: string) {
  const envFile = '.env'
  const modeEnvFile = `${envFile}.${mode}`

  if (existsSync(`${ROOT_PATH}/${modeEnvFile}`)) {
    const { parsed } = config({ path: `${ROOT_PATH}/${modeEnvFile}` })
    return { ...parsed }
  } else if (existsSync(`${ROOT_PATH}/${envFile}`)) {
    const { parsed } = config({ path: `${ROOT_PATH}/${envFile}` })
    return { ...parsed }
  }
  return {}
}

