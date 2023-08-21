const path = require("path")
const webpack = require('webpack')
const childProcess = require("child_process")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            :'style-loader',
          'css-loader',
        ]
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/i,
      //   loader: 'file-loader',
      //   options: {
      //     publicPath: './dist/',
      //     name: "[name].[ext]?[hash]",
      //   },
      // },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: {
          loader: 'url-loader', // url 로더를 설정한다
          options: {
            // publicPath: './dist/', // file-loader와 동일
            name: '[name].[ext]?[hash]', // file-loader와 동일
            limit: 25000 // 5kb 미만 파일만 data url로 처리
          }
        }
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: () => `
        빌드날짜: ${new Date().toLocaleString()}
        Commit Version: ${childProcess.execSync('git rev-parse --short HEAD')}
        Author: ${childProcess.execSync('git config user.name')}
      `
    }),
    new webpack.DefinePlugin({
      TWO: "1+1",
      VERSION: JSON.stringify("v.1.2.3"),
      PRODUCTION: JSON.stringify(false),
      MAX_COUNT: JSON.stringify(999),
      "api.domain": JSON.stringify("http://dev.api.domain.com"),
    }),
    new HtmlWebpackPlugin({
      template: './index.html', // 템플릿 경로를 지정
      templateParameters: {
        env: process.env.NODE_ENV === 'development' ? '(dev)' : '',
      },
      minify: process.env.NODE_ENV === 'production' 
      ? {
        collapseWhitespace: true,
        removeComments: true
      } 
      : false,
    }),
    new CleanWebpackPlugin(),
    ...(process.env.NODE_ENV === 'production'
      ? [new MiniCssExtractPlugin({ filename: `[name].css` })]
      : [])
  ],
  
}