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
 * @param mode
 * @returns Vite build configuration
 */
export function getComponentConfig (pkg: Record<any, any>, options: Record<string, any> = {}, mode: string) {
  console.log(`Building component package ${pkg.name} v.${pkg.version} ...`)
  const _getPackageName = (() => pkg?.name.split('/').pop())()
  const _customConfig = merge.recursive(options, { build: { lib: { name: _getPackageName } } })
  return getConfig(ComponentsConfig, _customConfig, mode)
}

/**
 * Returns Vite build configuration for component packages,
 * optionally amended with the specified options
 * @param pkg package.json data
 * @param options Custom build options
 * @param mode
 * @returns Vite build configuration
 */
export function getAssetsConfig (pkg: Record<any, any>, options: Record<string, any> = {}, mode: string) {
  console.log(`Building assets package v.${pkg.version} ...`)
  return getConfig(AssetsConfig, options, mode)
}

/**
 * Returns Vite build configuration amended with the specified options
 * @param config Default build options
 * @param options Custom build options
 * @param mode
 * @returns Vite build configuration
 */
function getConfig (config: Record<string, any> = {}, options: Record<string, any> = {}, mode: string) {
  const env = loadEnv(mode)
  const _customConfig = merge.recursive(options, {
    mode,
    base: env?.ASSETS_BASE_URL ? env.ASSETS_BASE_URL : '',
    build: {
      minify: mode !== 'development'
    }
  })
  return  merge.recursive(config, _customConfig)
}

/**
 * Return environment variables from a .env
 * @param mode this value can overridden via the command line --mode option.
 */

export function loadEnv (mode: string) {
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

