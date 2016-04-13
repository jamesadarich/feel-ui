"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var liveServer = require("live-server");
var karma = require('karma');
var browserify = require('browserify');
var source      = require("vinyl-source-stream");
var express = require('express');
var serveStatic = require('serve-static');
var tsify = require("tsify");
var fs = require("fs");

gulp.task('dev-site', function() {

   //serve with live changes
   var params = {
    port: 3000, // Set the server port. Defaults to 8080.
    host: "localhost", // Set the address to bind to. Defaults to 0.0.0.0.
    root: "site", // Set root directory that's being server. Defaults to cwd.
    open: true, // When false, it won't load your browser by default.
    //ignore: 'scss,my/templates', // comma-separated string for paths to ignore
    file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
    wait: 1000 // Waits for all changes, before reloading. Defaults to 0 sec.
    //mount: [['/components', './node_modules']] // Mount a directory to a route.
};
liveServer.start(params);

   gulp.watch(['./css/**/*.*'], function (file) {
      gulp.src(['./css/**/*.*']).pipe(gulp.dest('./site/css'));
   });

   gulp.watch(['./src/**/*.*'], function (file) {
      gulp.src(['./src/**/*.*']).pipe(gulp.dest('./site/src'));
   });
});

gulp.task('sass', function () {
   gulp.src('./sass/**/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
   gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('dist-typescript', function () {
  var tsResult = gulp.src('./src/**/*.ts')
       .pipe(ts({
         target: 'es5',
        noImplicitAny: true,
        module: 'system',
        experimentalDecorators: true,
        "declaration": true,
        "sourceMap": true,
        "preserveConstEnums": true
      }));
 return tsResult.js.pipe(gulp.dest('./dist'));
});

gulp.task(
   'dev',
   ['sass:watch',
   'dev-site'],
   function () {

   });

gulp.task("integration-test", function () {

});

gulp.task("start-end-to-end-server", /*["bundle"],*/ function () {
  var app = express();
  app.use(serveStatic(__dirname + "/test/end-to-end-tests/harness", {'index': ['index.html']}));
  /*
  app.use(serveStatic(__dirname + "/dist"));
  app.use(serveStatic(__dirname + "/node_modules"));
  */
  app.use(serveStatic(__dirname));

  app.use(function(req, res) {
    res.sendFile(__dirname + "/test/end-to-end-tests/harness/index.html");
  });
  app.listen(4000);
});

gulp.task("bundle", ["bundle-sass", "bundle-typescript"], function () {});

gulp.task('bundle-sass', function () {
   gulp.src('./sass/feel-ui.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./dist'));
});

gulp.task("bundle-typescript", ["build"], function () {
  var b = browserify({
    standalone : 'FeelUi',
    entries: "./feel-ui.ts",
    debug: true
  });
  b.plugin(tsify, {

        "target": "es5",
        "module": "umd",
        "declaration": true,
        "noImplicitAny": true,
        "sourceMap": true,
        "preserveConstEnums": true,
        "moduleResolution": "node",
        experimentalDecorators: true
  });

  b.ignore("angular2/core");
  b.ignore("angular2/common");
  b.ignore("angular2/router");

  return b.bundle()
    .pipe(source("feel-ui.js"))
    //.pipe(buffer())
    .pipe(gulp.dest("./dist/"));
});


gulp.task('build', function (done) {

    var tsResult = gulp.src([ "./feel-ui.ts" ])
      .pipe(ts({
          target: "es5",
          noImplicitAny: true,
          module: 'umd',
          sourceMap: true,
          experimentalDecorators: true,
          "moduleResolution" : "node"
        }));
    tsResult.js.pipe(gulp.dest('./'));

    tsResult = gulp.src([ './src/**/*.ts'])
      .pipe(ts({
          target: "es5",
          noImplicitAny: true,
          module: 'umd',
          sourceMap: true,
          experimentalDecorators: true,
          "moduleResolution" : "node"
        }));
    return tsResult.js.pipe(gulp.dest('./src'));
    //return tsResult.js.pipe(gulp.dest('./js/nine-tails.js'));
});



   gulp.task('build-test', function (done) {
     var tsResult = gulp.src('./test/**/*.ts')
       .pipe(ts({
           target: "es5",
           noImplicitAny: true,
           sourceMap: true,
           module: 'umd',
           experimentalDecorators: true,
           "moduleResolution" : "node"
         }));
       return tsResult.js.pipe(gulp.dest('./test'));
   });

   gulp.task('test', ['build', 'build-test'], function (done) {
       new karma.Server({
         configFile: __dirname + '/karma.conf.js',
         //singleRun: false,
         //browsers: [ "Chrome" ]
       }, done).start();
   });
