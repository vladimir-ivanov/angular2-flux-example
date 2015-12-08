var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/app.ts',
        angular2: [
            'es6-shim',
            'zone.js',
            'flux',
            'immutable',
            'reflect-metadata',
            'angular2/angular2',
            'angular2/router',
            'angular2/http'
        ]
    },
    devtool: 'source-map',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            {test: /\.ts?$/, loader: 'ts-loader', exclude: /node_modules/}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('angular2', 'angular2.js')
    ]
};