var webpack = require('webpack');
var path = require('path');

var webpackConfig = {
    resolve: {
        extensions: ['', '.js']
    },
    entry: [
        './client.js'
    ],
    output: {
        path: 'public/',
        filename: 'app.js'
    }
};

module.exports = webpackConfig;
