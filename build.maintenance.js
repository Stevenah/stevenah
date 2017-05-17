var webpack = require('webpack');
var path = require('path');

var ENVIRONMENT = {
    'process.env.NODE_ENV': JSON.stringify('MAINTENANCE'),
}

var BUILD_PATH = path.resolve(__dirname, 'build/');
var APP_PATH = path.resolve(__dirname, 'maintenance/src/');

var PORT = 8080;

var config = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        'whatwg-fetch',
        path.resolve(APP_PATH, 'index.js')
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
    devServer: {
        contentBase: __dirname,
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
