/**
  Boilerplate gulpfile.js
  Updated 2018-02-14
**/

const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const pump = require('pump');
const nodemon = require('nodemon');
const log = require('fancy-log');

gulp.task("sass", function(cb) {
  return gulp.src('assets/sass/app.scss')
  .pipe(sass().on('error', function(err) {
    log(err);
  }))
  .pipe(gulp.dest('public/css'));
});

gulp.task("js", function(cb) {
  pump([
    gulp.src("assets/js/*.js"),
    uglify(),
    gulp.dest("public/js")
  ], cb);
});

gulp.task("watch", function() {
  gulp.watch('assets/sass/*.scss', gulp.parallel("sass"));
  gulp.watch('assets/js/*.js', gulp.parallel("js"));
  nodemon({
    script: 'index.js',
    ext: '',
    ignore: ['public/*']
  });
});

gulp.task("default", gulp.parallel("sass", "js", "watch"));

gulp.task("deploy", gulp.parallel("sass", "js"));
