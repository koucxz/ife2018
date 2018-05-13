const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = function(env)  {
  return {
    mode: env.production ? 'production' : 'development',
    entry: ['webpack-hot-middleware/client?reload=true', './src/index.js'],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    devtool: env.production ? '' : 'inline-source-map',
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets/'),
        '@comp': path.resolve(__dirname, 'src/components/'),
        '@pages': path.resolve(__dirname, 'src/pages/')
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, "src"),
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        }, 
        {
          test: /\.san$/,
          use: [
            'san-loader'
          ]
        }
      ]
    }
  }
}