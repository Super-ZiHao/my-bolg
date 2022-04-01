const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  //跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'https://lianghj.top:8888/api/private/v1/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}
