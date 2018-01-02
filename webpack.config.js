const path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        host: "localhost",
        port: 8080
    }
};