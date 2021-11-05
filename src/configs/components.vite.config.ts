import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  mode: 'development',
  build: {
    sourcemap: 'inline',
    lib: {
      entry: 'index.ts',
      name: 'logo',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
