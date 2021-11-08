import merge from 'merge'
import ComponentsConfig from './components.vite.config'

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
    });
    return getConfig(ComponentsConfig, _customConfig, pkg?.name)
}

/**
 * Returns Vite build configuration amended with the specified options
 * @param config Default build options
 * @param options Custom build options
 * @param name Optional name of a library, used when building a library instead of browser-executable package
 * @returns Vite build configuration
 */
function getConfig (config: Record<string, any> = {}, options: Record<string, any> = {}, name: string = '') {
    const _getPackageName = (() => name.split('/').pop())()
    return  merge.recursive(config, name ? { build: { lib: { name: _getPackageName } } } : {}, options);
}
