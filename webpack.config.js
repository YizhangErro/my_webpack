var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  
const ExtractTextPlugin = require("extract-text-webpack-plugin");  //分离文件
const SRC_PATH = "./src/"

module.exports = {
  entry: SRC_PATH+'index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  },
  devServer:{
    contentBase:'./',  // 本地服务器所加载的页面所在的目录
    historyApiFallback:false,//不跳转
    inline:true
  },
  module:{
  	rules:[
  		{
  			test:/\.css$/,
        use:ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{loader:"css-loader",options:{modules:true}}]
        })
  		},
      {
        test:/\.less$/,
        use:[
          {
            loader:'style-loader'
          },
          {
            loader:'css-loader',
            options:{
              modules:true
            }
          },
          {
            loader:'less-loader',
            options:{
              modules:true
            }
          }
        ]
      },
      {
        test:/\.js$/,
        exclude:/(node_modules|bower_components)/,
        use:[
          {
            loader:'babel-loader',
            options:{
              presets:['react','env']     //js文件中就可以直接使用jsx语法了
            }
          }
        ]
      },
  	]
  },
  plugins:[
    new ExtractTextPlugin("css/styles.css"),
    new HtmlWebpackPlugin({
      template:SRC_PATH+'index.html'
    })
  ]
};