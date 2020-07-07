const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Analyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const DashboardPlugin = require("webpack-dashboard/plugin");
const webpack = require("webpack");

module.exports = {
  context: path.join(__dirname, "./src"),
  entry: {
    app: "./index.js"
    // vendor: ["lodash"]
  },
  output: {
    filename: "[name]@[hash].js",
    // filename: "bundle.js",
    path: path.join(__dirname, "./dist")
  },
  mode: "development",
  devServer: {
    publicPath: "/dist/",
    hot: true
  },
  plugins: [
    new DashboardPlugin(),
    new HtmlWebpackPlugin(),
    new Analyzer({ analyzerPort: 8887 }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
