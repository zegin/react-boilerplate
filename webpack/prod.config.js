let path = require('path');
let nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const moduleObj = require('./module')

const client = {
    mode: 'production',
    entry: {
        'client': './src/client/index.js',
    },
    target: 'web',
    output: {
        filename: '[name].js',
        path: path.resolve(path.dirname(__dirname), 'dist/public')
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

const server = {
    mode: 'production',
    entry: {
        'server': './src/server/index.js'
    },
    target: 'node',
    output: {
        filename: '[name].js',
        path: path.resolve(path.dirname(__dirname), 'dist')
    },
    module: moduleObj,
    externals: [nodeExternals()]
}

module.exports = [client, server];