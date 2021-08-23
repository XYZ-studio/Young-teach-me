const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/Young-teach-me/'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            }
        ],
    },
    plugins: [ // 設定自動插入 main.js
        new HtmlWebpackPlugin({
            inject: true,
            template: `./src/index.html`,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        // contentBase: './dist',
        port: 8080,
        hot: true
    },
};