/**
 * Vite config for Assets package.
 */
import { defineConfig } from 'vite'
import Utils from '../utils'

export default defineConfig({
  build: {
    sourcemap: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        scripts: '/main.ts'
      },
      output: {
        format: 'es',
        sourcemap: true,
        generatedCode: 'es2015',
        entryFileNames: '[name].js',
        assetFileNames: Utils.assetsHandler
      }
    }
  },
  css: {
    postcss: {
      map: true,
      plugins: [require('autoprefixer')]
    }
  },
  logLevel: 'error'
})
