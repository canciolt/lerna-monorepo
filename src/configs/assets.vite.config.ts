import { defineConfig } from 'vite'
import scss from 'rollup-plugin-scss'
import copy from 'rollup-plugin-copy'
import Utils from "../utils";

const CONFIG = (() => {
  const outDir = 'dist'
  const target = 'src'

  return {
    outDir,
    target,
    plugins: {
      scss: {
        output: `${outDir}/global.css`,
        sourceMap: true,
        failOnError: true,
        outputStyle: 'compressed',
        sass: require('sass')
      },
      copy: {
        hook: 'writeBundle',
        targets: [{ src: [`${target}/images/*`], dest: `${outDir}/images` }]
      }
    }
  }
})()

export default defineConfig({
  css: {
    postcss: {
      map: true,
      plugins: [require('autoprefixer')]
    },
  },
  build: {
    sourcemap: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        scripts: 'main.ts'
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
  plugins: [
    scss(CONFIG.plugins.scss),
    copy(CONFIG.plugins.copy)
  ]
})
