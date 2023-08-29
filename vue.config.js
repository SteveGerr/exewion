const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({

  configureWebpack: {
    resolve: {

      alias: {
        process: 'process/browser',
        stream: 'stream-browserify',
        zlib: 'browserify-zlib',
        util: 'util'
      }
    }
  },
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/exewion/'
    : '/',

  css: {
    loaderOptions: {
      scss: {
        // eslint-disable-next-line quotes
        additionalData: `@import '@/assets/styles/index.scss';`
      }
    }
  }
})
