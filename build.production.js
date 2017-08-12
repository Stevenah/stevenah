var webpack = require('webpack');
var path = require('path');

var ENVIRONMENT = {
    'process.env.NODE_ENV': JSON.stringify('PRODCUTION'),
}

var BUILD_PATH = path.resolve(__dirname, 'build/');
var APP_PATH = path.resolve(__dirname, 'src/');

var PORT = 8080;

var config = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        'whatwg-fetch',
        path.resolve(APP_PATH, 'js/index.js')
    ],
    output: {
        path: BUILD_PATH,
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)$/, loaders: ['babel-loader'], exclude: /node_modules/ },
            { test: /\.(scss|css)$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(eot|woff2|woff|ttf|svg)$/, loaders: ['url-loader'] },
            { test: /\.json$/, loader: 'json-loader' },
        ],
    },
    resolve: {
        alias: {
            app: path.resolve(__dirname, 'src/js/components/app'),
            ui: path.resolve(__dirname, 'src/js/components/ui'),
            pages: path.resolve(__dirname, 'src/js/components/pages'),
            styles: path.resolve(__dirname, 'src/scss'),
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin(ENVIRONMENT),
    ],
};

module.exports = config;
