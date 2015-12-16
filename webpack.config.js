var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/app.ts',
        vendors: './src/vendors.ts'
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
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};