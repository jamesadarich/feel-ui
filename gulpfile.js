"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var gls = require('gulp-live-server');
var ts = require('gulp-typescript');

gulp.task('dev-site', function() {
   //1. serve with default settings
   //var server = gls.static(); //equals to gls.static('public', 3000);
   //server.start();

   //2. serve at custom port
   var server = gls.static('site', 3000);
   server.start();

   //3. serve multi folders
   //var server = gls.static(['dist', '.tmp']);
   //server.start();

   //use gulp.watch to trigger server actions(notify, start or stop)
   gulp.watch(['./site/**/*.*'], function (file) {
      server.notify.apply(server, [file]);
   });

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

gulp.task(
   'dev',
   ['sass:watch',
   'dev-site'],
   function () {

   });

   gulp.task('build', function (done) {

      // var tsResult = gulp.src('./src/**/*.ts')
      //      .pipe(ts({
      //       noImplicitAny: true,
      //       module: 'amd',
      //       outFile: 'nine-tails.js'
      //     }));
      //return tsResult.js.pipe(gulp.dest('./js'));
      //return tsResult.js.pipe(gulp.dest('./js/nine-tails.js'));
   });
