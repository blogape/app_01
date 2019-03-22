module.exports = {
    // 基本路径
    baseUrl: './',
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // 服务器端口号
    devServer: {
        port: 8080,
    },
    css: {
    //     loaderOptions: {
    //         css: {},
    //         postcss: {
    //             plugins: [
    //                 require('postcss-pxtorem')({
    //                     'rootValue': 75,
    //                     'propList': ['*', '!border*'],
    //                     'selectorBlackList': ['vux-', 'vjs-', 'video-', 'noToRem'],
    //                     'replace': true,
    //                     'mediaQuery': false,
    //                     'minPixelValue': 0
    //                 })
    //             ]
    //         }
    //     }
    },
    css: {
        loaderOptions: {
          less: {
            modifyVars: {
              red: '#03a9f4',
              blue: '#3eaf7c',
              orange: '#f08d49',
              'text-color': '#111'
            }
          }
        }
      }
         
}
