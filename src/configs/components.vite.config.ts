import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'

const autoprefixer = require('autoprefixer');

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../../src')
    }
  },
  build: {
    sourcemap: true,
    lib: {
      entry: 'index.ts',
      formats: ['es']
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
      plugins: [autoprefixer]
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "../../styles/index.scss";`
      },
    }
  }
})
