var webpack = require('webpack');

var webpackConfig = {
    entry: [
        './client.js'
    ],
    output: {
        path: 'public/js/',
        filename: 'app.js'
    }
};

module.exports = webpackConfig;
