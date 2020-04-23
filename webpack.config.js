var webpack = require("webpack");
var path = require('path');
var version = require('./package.json').version

const initProdConfig = {
    name: 'myCustomEventTracker',
    entry: './src/index.js',
    output: {
        filename: `myCustomEventTracker-${version}-[contenthash].min.js`,
        path: path.join(__dirname + '/build'),
    },
    resolve: {
        extensions: ['.js'],
        plugins: [],
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    mode: 'production',
    devtool: 'source-map'
}

module.exports = [
    initProdConfig
];