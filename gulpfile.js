'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var gls = require('gulp-live-server');

gulp.task('dev-server', function() {
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
  gulp.watch(['css/*.css', 'site/**/*.*'], function (file) {
    server.notify.apply(server, [file]);
  });
});

gulp.task('sass', function () {
  gulp.src('./site/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./site/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./site/sass/**/*.scss', ['sass']);
});

gulp.task(
  'dev',
  ['sass:watch',
   'dev-server'],
  function () {

});
