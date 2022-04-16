module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  assetsDir: 'static',
  parallel: false,
  baseUrl: './',

  productionSourceMap: false,//不生成map文件
}

