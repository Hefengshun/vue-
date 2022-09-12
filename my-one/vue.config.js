module.exports = {
  publicPath: './',
  lintOnSave: false, // 关闭语法检查
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8002', // 本地后端地址
        changeOrigin: true, //允许跨域
        ws: false,
        pathRewrite: {
          '^/api': ''
        }
      },
    }

  },

}
