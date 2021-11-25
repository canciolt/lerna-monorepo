/**
 * Vite config for Storybook
 */
import { defineConfig } from 'vite'

const commonStylesPath = '/src/packages/assets/src/styles/commons.scss'

export default defineConfig({
  base: '/ds-storybook/',
  build: {
    outDir: 'storybook-static',
    chunkSizeWarningLimit: 1500,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${__dirname }${commonStylesPath}";`
      }
    }
  }
})
