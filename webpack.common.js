const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
     resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['stage-2', 'react']
              }
            }
          },
          {
              test: /\.css$/,
              exclude: /node_modules\/(?!(typeface-roboto|ANOTHER-ONE)\/).*/,
            //   exclude: [/node_modules/],
              loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
          },
          {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            loader: 'file-loader'
          },
          {
            test: /\.(png|jpeg|ttf)$/,
            use: [
             { loader: 'url-loader', options: { limit: 8192 } } 
            ]
          }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Shopster",
            favicon: "./favicon.png"
        })
    ]
}