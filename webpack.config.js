const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool : 'source-map',
    entry : './src/scripts/app.js',
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename : './dist/scripts/app.js'
    },
    module: {
        loaders : [ 
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test : /.js$/,
                loader : 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                },
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            title: 'Welcome to my page!',
            mainDiv: 'welcome-message',
            template: 'src/index.html'
        }),
        new CopyWebpackPlugin ([
            { 
                from: 'src/data',
                to: 'data/'
            }
        ]) 
    ]
};


