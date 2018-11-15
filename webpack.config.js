const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const webpack = require("webpack")

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Webpack Manual Template",
      hash: true,
      filename: "index.html",
      template: path.join(__dirname, "src/index.html")
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename:   "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      { test: /\.css%/,
        use: ["style-loader", "css-loader"] },
      { test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env"]}
          }
        ]
      }
    ]
  },
  performance: {
    hints: false
  },
  mode: "development"
}
