const path = require('path');
const webpack = require('webpack');
 
module.exports = {
  entry: path.resolve(__dirname, './src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader'],
      },
    ],
  },
};