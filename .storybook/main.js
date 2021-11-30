const merge = require('merge');
const { loadConfigFromFile } = require('vite')

module.exports = {
  stories: ["../src/packages/**/*.stories.@(js|jsx|ts|tsx)"],
  core: {
    builder: "storybook-builder-vite"
  },
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  previewHead: (head) => head.replace('{% ASSETS_BASE_URL %}', process.env.ASSETS_BASE_URL),
  async viteFinal(config) {
    const loadParams = {  mode: config.mode, command: 'build' }
    const { config: viteConfig } = await loadConfigFromFile(loadParams) || {}
    config.plugins = [...config.plugins]
    config.base = process.env.STORYBOOK_BASE_URL
    // return the customized config
    return merge.recursive(config, viteConfig)
  }
}
