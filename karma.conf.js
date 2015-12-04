module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'es6-shim'],
        files: [
            'node_modules/zone.js/dist/zone-microtask.js',
            'node_modules/zone.js/dist/long-stack-trace-zone.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/es6-shim/es6-shim.js',
            {pattern: 'test/**/*-spec.ts', watched: false}
        ],
        exclude: [],
        preprocessors: {
            'test/**/*-spec.ts': ['webpack', 'sourcemap']
        },
        webpack: {
            resolve: {
                root: __dirname,
                extensions: ['', '.ts', '.js', '.json']
            },
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {
                        test: /\.tsx?$/, loader: 'ts-loader', exclude: [
                        /node_modules/
                    ]
                    },
                    {test: /\.json$/, loader: 'json'},
                    {test: /\.html$/, loader: 'raw'}
                ]
            },
            stats: {colors: true, reasons: true},
            debug: false
        },
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        },
        // possible values: 'dots', 'progress'
        reporters: ['progress'],
        port: 9876,
        colors: true,

        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS2'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};