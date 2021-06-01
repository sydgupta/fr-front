const path = require('path');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    target: 'node',
    entry: path.resolve(__dirname, 'src/index.js'),
    // this will tell webpack where to put the output (bundle) file.
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    }
}

module.exports = merge(baseConfig, config);