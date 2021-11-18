const merge = require('merge');

const ROOT_PATH = `${__dirname }/..`

module.exports = {
  "stories": [
    "../src/packages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  core: {
    builder: "storybook-builder-vite"
  },
  viteFinal(config, { configType }) {
    config.plugins = [...config.plugins]
    // return the customized config
    return merge.recursive(config, {
      mode: 'development',
      resolve: {
        alias: {
          '@elements': '../src/packages/elements',
          '@components': '../src/packages/components',
          '@modules': '.../src/packages/modules'
        }
      },
      build: {
        chunkSizeWarningLimit: 1500
      },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "${ROOT_PATH}/src/packages/assets/styles/commons.scss";`
          },
        }
      }
    });
  },
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-storysource",
    "storybook-addon-outline"
  ]
}
