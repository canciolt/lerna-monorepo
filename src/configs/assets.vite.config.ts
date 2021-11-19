import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    postcss: {
      map: true
    }
  },
  build: {
    rollupOptions: {
      input: 'global.html',
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
