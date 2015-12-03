const webpack = require('webpack');

module.exports = {
    entry: {
        app: './app.ts',
        angular2: [
            'zone.js',
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
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {test: /\.ts?$/, loader: 'ts-loader', exclude: /node_modules/}
          //  {test: /\.js?$/, loader: 'babel'}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('angular2', 'angular2.js')
    ]
};