let path = require('path');
let nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const moduleObj = require('./module')

const client = {
    mode: 'development',
    entry: {
        'client': './src/client/index.js',
    },
    target: 'web',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/public')
    },
    module: moduleObj,
    plugins: [new HtmlWebPackPlugin({
        template: 'src/client/index.html'
    })],
    devServer: {
        contentBase: path.join(__dirname, 'src/client'),
        hot: true,
        port: 9000
    }
};

module.exports = client