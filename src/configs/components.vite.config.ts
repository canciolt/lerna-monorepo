import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { rollup as lernaAliases } from 'lerna-alias'
import autoprefixer from 'autoprefixer'

const ROOT_PATH = `${__dirname }/..`

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@src': ROOT_PATH,
            ...lernaAliases({ mainFields:['./'] })
        }
    },
    build: {
        sourcemap: true,
        lib: {
            entry: 'index.ts',
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
            plugins: [autoprefixer]
        },
        preprocessorOptions: {
            scss: {
                additionalData: `@import "${ROOT_PATH}/packages/style/scss/commons.scss";`
            },
        }
    }
})
