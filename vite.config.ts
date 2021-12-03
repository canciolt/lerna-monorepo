/**
 * Vite config for Storybook.
 */
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'storybook-static',
    chunkSizeWarningLimit: 1500,
  }
})
