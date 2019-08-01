'use strict';

const path = require('path');
const = require('mini-css-extract-plugin');

module.exports = {
    entry:{
        index:'./src/index.js',
        search: './src/search.js',
    },
    output:{
        path: path.join(__dirname,"dist"),
        filename: '[name].js'
    },
    mode: 'devlopment',
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader'
            },
            {
                test:/.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/.less/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/.(png|jpg|gif|jpeg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limits: 10240
                        }
                    }
                ]
            },
            {
                test:/.(woff|woff2|eot|ttf)/,
                use:'file-loader'
            }
        ]
    }
}