// vue.config.js
let path = require('path');
// 自定义项目配置
module.exports = {
  publicPath: "./",
  outputDir: 'dist',
  assetsDir: '',
  indexPath: 'index.html',
  filenameHashing: true,
  lintOnSave: true,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8081
    // 项目代理
    // proxy: {
    //   '/api': {
    //     target: '<url>',
    //     ws: true,
    //     changeOrigin: true
    //   }
    // }
  }
}