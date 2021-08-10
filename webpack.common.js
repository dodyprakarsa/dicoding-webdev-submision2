const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const { InjectManifest } = require('workbox-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            /* options: {
              name: '[name].[ext]',
              outputPath: 'dist/public',
              publicPath: '/dist/public'
            } */
          },
        ],
      },
    ],
  },

  plugins: [

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),

    // new FaviconsWebpackPlugin({
    //   logo: path.resolve(__dirname, 'src/public/images/heros/dicoding.jpeg'),
    // }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public'),
          to: path.resolve(__dirname, 'dist/public'),
        },

        /* {
          from: path.resolve(__dirname, 'src/api'),
          to: path.resolve(__dirname, 'dist/api'),
        }, */

      ],
    }),

    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),

    /*  new InjectManifest({
      swSrc: path.resolve(__dirname, 'src/scripts/sw.js')
    }), */
    new CleanWebpackPlugin(),
  ],
};
