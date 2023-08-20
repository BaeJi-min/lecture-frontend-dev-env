const path = require("path")
const webpack = require('webpack')

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
          'style-loader',
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
            publicPath: './dist/', // file-loader와 동일
            name: '[name].[ext]?[hash]', // file-loader와 동일
            limit: 25000 // 5kb 미만 파일만 data url로 처리
          }
        }
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: () => `빌드날짜: ${new Date().toLocaleString()}`
    })
  ]
}