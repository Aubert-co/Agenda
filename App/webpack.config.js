const path = require('path')
const HTMLWEBPACK = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    //soucemap mapeamento de todos os arquivos
    devtool:'source-map',
   // mode:'production',
    entry :{
        index:'/View/src/index.js',
        //another:'/view/src/login.js'
    },
    output:{
        path:path.resolve('./View/dist'),
        filename:'[name].bundle.js',
    },
      devServer: {
    contentBase: path.join('./View/dist'),
    compress: true,
    port: 7000,
    useLocalIp: true,
    host:'192.168.100.54'
  },
module:{
    rules:[
        {
            test:/\.(js|jsx)$/,
            exclude:/node_modules/,
            use:{
                loader:"babel-loader"
            }
        }
    ]
},
plugins:[
    new HTMLWEBPACK({
        template:path.resolve("./view/public/index.html"),
        filename:"./index.html"
    }),
    /*new HTMLWEBPACK({
        template:path.resolve("./view/public/login.html"),
        filename:"login.html"
    }),*/
    new webpack.ProvidePlugin({
        "React": "react",
     }),
]
}
/**
 * principais conceitos webpack
 * Entry,output,loaders,pluginse mode
 */