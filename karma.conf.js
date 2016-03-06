// Karma configuration
// Generated on Sat Aug 15 2015 00:52:23 GMT+0100 (GMT Daylight Time)

module.exports = function(config) {
   config.set({

      plugins: [
         'karma-jasmine',
         'karma-coverage',
         'karma-phantomjs-launcher',
         'karma-chrome-launcher',//,
         'karma-systemjs'
      ],

      // base path that will be used to resolve all patterns (eg. files, exclude)
      basePath: '',


      // frameworks to use
      // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      frameworks: ['systemjs',
      'jasmine'],

      systemjs: {
        	// Path to your SystemJS configuration file
        	//configFile: 'app/system.conf.js',

        	// Patterns for files that you want Karma to make available, but not loaded until a module requests them. eg. Third-party libraries.
        	serveFiles: [
        		'node_modules/**/*.js',
            'src/**/*.js'
        	],

        	// SystemJS configuration specifically for tests, added after your config file.
        	// Good for adding test libraries and mock modules
        	config: {
            baseUrl: '/base',
            "defaultJSExtensions": true,
            transpiler: 'typescsript',
            map: {
            // Added a path for ng2 because internal they require modules as 'angular2/src/...'
            angular2: 'node_modules/angular2',
            rxjs: 'node_modules/rxjs'
          }/*,

          paths: {
            'es6-promise': 'node_modules/es6-promise/dist/es6-promise.js'
          },
          meta: {
            'angular2/angular2':{
                format: 'register'
            },
            'angular2/core':{
                format: 'register'
            },

              'angular2/router':{
                  format: 'register'
              },

                'angular2/common':{
                    format: 'register'
                }
          }*/
          /*
        		paths: {
        			'systemjs': 'node_modules/systemjs/dist/system.js',
              'polyfils': 'node_modules/angular2/bundles/angular2-polyfills.js',
              'es6-shim': 'node_modules/es6-shim/es6-shim.js'

        		}*/
        	}
        },


      // list of files / patterns to load in the browser
      files: [
        'node_modules/angular2/bundles/angular2-polyfills.js',
         'node_modules/es6-shim/es6-shim.js',
      'node_modules/systemjs/dist/system.js',
      //  'node_modules/es6-module-loader/dist/es6-module-loader.js',
      //  'node_modules/es6-promise/dist/es6-promise.js',
      //  'node_modules/rxjs/bundles/Rx.umd.js',
      //  'node_modules/angular2/bundles/angular2-all.umd.dev.js',
      //  'src/**/*.js',
         'test/menu-panel.spec.js'
      //   'test/menu-panel.spec.js.map',
      //  'test/menu-panel.spec.ts'
      ],

      // list of files to exclude
      exclude: [
      ],


      // preprocess matching files before serving them to the browser
      // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: {
        'src/**/*.js': 'coverage'
      },


      // test results reporter to use
      // possible values: 'dots', 'progress'
      // available reporters: https://npmjs.org/browse/keyword/karma-reporter
      reporters: ['progress', 'coverage'],

      coverageReporter: {
         reporters: [{

           type : 'text',//'html',
           dir : 'test/coverage/'
         }]
     },

      // web server port
      port: 9876,


      // enable / disable colors in the output (reporters and logs)
      colors: true,


      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,


      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: true,


      // start these browsers
      // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
      browsers: ['Chrome'/*'PhantomJS'/*, 'Chrome'/*, 'IE'*/],


      // Continuous Integration mode
      // if true, Karma captures browsers, runs the tests and exits
      singleRun: false
   })
}
