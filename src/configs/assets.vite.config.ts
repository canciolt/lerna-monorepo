import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    postcss: {
      map: true
    }
  },
  build: {
    assetsDir: '.',
    rollupOptions: {
      input: 'global.html',
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
})
