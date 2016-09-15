module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/vendors.ts',
            'node_modules/zone.js/dist/long-stack-trace-zone.js',
            'node_modules/zone.js/dist/proxy.js', // since zone.js 0.6.15
            'node_modules/zone.js/dist/sync-test.js',
            'node_modules/zone.js/dist/jasmine-patch.js', // put here since zone.js 0.6.14
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',
            {pattern: 'src/**/*.spec.ts', watched: false}
        ],
        preprocessors: {
            'src/vendors.ts': ['webpack', 'sourcemap'],
            'src/**/*.spec.ts': ['coverage', 'webpack', 'sourcemap']
        },
        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                {type: 'text-summary'},
                {type: 'json'},
                {type: 'html'}
            ]
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
        reporters: ['progress', 'coverage'],
        port: 9876,
        colors: true,

        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};