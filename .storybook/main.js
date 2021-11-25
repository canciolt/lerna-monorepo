const merge = require('merge');
const { loadConfigFromFile } = require('vite')

module.exports = {
  stories: ["../src/packages/**/*.stories.@(js|jsx|ts|tsx)"],
  core: {
    builder: "storybook-builder-vite"
  },
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  async viteFinal(config, { configType }) {
    console.log(config)
    const loadParams = {   mode: config.mode, command: 'build' }
    const { config: viteConfig } = await loadConfigFromFile(loadParams) || {}
    config.plugins = [...config.plugins]
    // return the customized config
    return merge.recursive(config, viteConfig)
  }
}
