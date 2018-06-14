const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const { paths, devPort, devProxys, vendors } = require("./configs");
const common = require("./webpack.common.js");
const regex = new RegExp(`${paths.components}`);

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  entry: {
    vendor: vendors
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        include: paths.source,
        exclude: paths.nodeModules,
        use: [
          "style-loader", // Plugin for development, injects css tag to html
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  devServer: {
    contentBase: paths.base, // Assets will be served
    open: true, // Open browser to localhost:port
    // inline: false,
    historyApiFallback: true, // Falls back to index.html; we won't have to set an entry point and add an additional html loader
    port: devPort,
    proxy: {
      target: devProxys,
      changeOrigin: true
    }
  },
  watchOptions: {
    ignored: paths.nodeModules
  },
  optimization: {
    minimize: false,
    runtimeChunk: {
      name: "vendor"
    },
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          minSize: 1
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HardSourceWebpackPlugin(),
    new webpack.NamedChunksPlugin(chunk => {
      if (chunk.name) {
        return chunk.name;
      }
      for (const m of chunk._modules) {
        if (regex.test(m.context)) {
          return path.basename(m.rawRequest);
        }
      }
      return null;
    }),
    // new BundleAnalyzerPlugin() // Uncomment to analyze Bundle size
  ]
});
