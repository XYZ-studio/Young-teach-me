const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;

const paths = [
    {
        path: '/',
        lastmod: '2021-08-24',
        priority: 0.9,
        changefreq: 'monthly'
    }
];

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/Young-teach-me/'
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
        new SitemapPlugin({ base: 'https://young.xn--wnux6e.xyz/', paths }),
    ],
    devServer: {
        // contentBase: './dist',
        port: 8080,
        hot: true
    },
};