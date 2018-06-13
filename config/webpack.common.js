const { paths } = require('./configs');
const path = require('path');

module.exports = {
  entry: {
    index: paths.entry
  },
  output: {
    path: paths.output
  },
  resolve: {
    alias: {
      'src': paths.source,
      'assets': paths.assets,
      'components': paths.components,
      'shared': paths.shared,
      'routes': paths.routes,
      'networking': paths.networking,
      'HOCs': paths.HOCs,
      'styled': paths.styled,
      'utils': paths.utils,
      moment: path.resolve(__dirname, '..', 'node_modules', 'moment')
    },
    extensions: ['.tsx', '.ts', '.js', '.json', '.scss'], // Eliminates need to include extensions when importing
    modules: [paths.source, paths.nodeModules], // src folder will take precedences when searching for file 
    symlinks: false
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: paths.source,
        exclude: paths.nodeModules,
        loader: [
          'babel-loader',
          'awesome-typescript-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(jpg|jpeg|gif|png|eot|woff|ttf)$/,
        use: {
          loader: 'file-loader',
          options: { 
            name (file) {
              return process.env.NODE_ENV === 'production' 
                ? 'hundredx-[name]-[hash:5].[ext]'
                : '[name].[ext]';
            }
          }
        }
      }
    ]
  }
};