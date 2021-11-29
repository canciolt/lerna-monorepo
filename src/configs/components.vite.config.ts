/**
 * Vite config for Vue component packages.
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const ROOT_PATH = `${__dirname }/..`

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@src': ROOT_PATH,
      '@elements': `${ROOT_PATH}/packages/elements`,
      '@components': `${ROOT_PATH}/packages/components`,
      '@modules': `${ROOT_PATH}/packages/modules`
    }
  },
  build: {
    sourcemap: true,
    lib: {
      entry: 'main.ts',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  css: {
    postcss: {
      map: true,
      plugins: [require('autoprefixer')]
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${ROOT_PATH}/packages/assets/src/styles/commons.scss";`
      },
    }
  },
  logLevel: 'error',
})
