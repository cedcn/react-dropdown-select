const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, "src/index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    library: 'react-dropdown-select',
    libraryTarget: 'umd',
    publicPath: path.resolve(__dirname, 'dist'),
    umdNamedDefine: true,
    filename: "react-dropdown-select.js"
  },
  bail: true,
  mode: 'production',
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      DEBUG: false
    })
  ]
};