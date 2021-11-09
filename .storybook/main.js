const path = require('path');
const merge = require('merge');
const vue = require("@vitejs/plugin-vue");

const resolve = (item) => path.join(__dirname, '../', item);

module.exports = {
  "stories": [
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  core: {
    builder: "storybook-builder-vite"
  },
  viteFinal(config, { configType }) {
    config.plugins = [...config.plugins, vue()]
    // return the customized config
    return merge.recursive(config, {
      resolve: {
        alias: {
          '@sb': resolve('.storybook'),
          '@components': resolve('src/components'),
        }
      }
    });
  },
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}
