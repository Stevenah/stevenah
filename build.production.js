var webpack = require('webpack');
var path = require('path');

var ENVIRONMENT = {
    'process.env.NODE_ENV': JSON.stringify('DEVELOPMENT'),
}

var BUILD_PATH = path.resolve(__dirname, 'build/');
var APP_PATH = path.resolve(__dirname, 'src/');

var PORT = 8080;

var config = {
    entry: {
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        'whatwg-fetch',
        path.resolve(APP_PATH, 'app.js')
    },
    output: {
        path: BUILD_PATH,
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)$/, loaders: ['babel'], exclude: /node_modules/ },
            { test: /\.(scss|css)$/, loaders: ['style', 'css', 'sass'] },
            { test: /\.(eot|woff2|woff|ttf|svg)$/, loaders: ['url'] },
            { test: /\.json$/, loader: 'json' },
        ],
    },
    resolve: {
        root: [
            path.resolve('./webapp/js'),
        ],
    },
    devserver: {
        contentBase: APP_PATH,
        port: PORT,
        inline: true,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin(ENVIRONMENT),
    ],
};

module.exports = config;
