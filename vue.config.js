module.exports = {
  outputDir: './docs',
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md?$/)
      .use('raw-loader')
        .loader('raw-loader')
        .end()
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/style/global.scss";`
      }
    }
  },
}
