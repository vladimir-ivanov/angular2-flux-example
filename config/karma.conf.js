var testWebpackConfig = require('./webpack.test.js')({env: 'test'});

module.exports = function(config) {
    var configuration = {
        basePath: '',

        frameworks: ['jasmine'],

        files: [ { pattern: './config/spec-bundle.js', watched: false } ],
        preprocessors: { './config/spec-bundle.js': ['coverage', 'webpack', 'sourcemap'] },

        webpack: testWebpackConfig,

        coverageReporter: {
            dir : 'coverage/',
            reporters: [
                { type: 'text-summary' },
                { type: 'json' },
                { type: 'html' }
            ]
        },
        webpackServer: { noInfo: true },
        reporters: [ 'mocha', 'coverage' ],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: [
            'Chrome'
        ],
        singleRun: true
    };

    config.set(configuration);
};