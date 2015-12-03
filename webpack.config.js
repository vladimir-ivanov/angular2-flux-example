const webpack = require('webpack');

module.exports = {
    entry: {
        app: './app.ts',
        angular2: [
            // Angular 2 Deps
            //   '@reactivex/rxjs',
            'zone.js',
            'reflect-metadata',
            // to ensure these modules are grouped together in one file
            'angular2/angular2',
            'angular2/core',
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
            {test: /\.ts?$/, loader: 'ts-loader'}
          //  {test: /\.js?$/, loader: 'babel'}
        ]
    },
    plugins: [
        //todo - add // Webpack Plugins
//var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;//var DefinePlugin   = webpack.DefinePlugin;
//var BannerPlugin   = webpack.BannerPlugin;
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin('angular2', 'angular2.js')
    ]
};