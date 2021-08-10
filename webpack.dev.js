const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {

    contentBase: path.resolve(__dirname, 'dist'),

    /* [
      path.resolve(__dirname, 'dist'),
      path.join(__dirname, 'src/api'),
      path.join(__dirname, 'src/public')
    ],
    contentBasePublicPath: '/api', */
  },
});
