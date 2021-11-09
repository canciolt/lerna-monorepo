import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'

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
