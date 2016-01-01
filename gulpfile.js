'use strict';

var cp = require('child_process');
var path = require('path');

var gulp = require('gulp');
var cache = require('gulp-cached');
var jshint = require('gulp-jshint');

// FILES
var jsFiles = ['gulpfile.js', 'assets/js/**/*.js'];

// TASKS
gulp.task('default', ['ghost', 'lint', 'watch']);

gulp.task('lint', function () {
  return gulp.src(jsFiles)
    .pipe(cache('linting'))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// Run Ghost in development mode.
gulp.task('ghost', function () {
  var ghostDir = process.env.GHOST_DIR || path.resolve('../ghost');
  cp.spawn('npm', ['start'], { cwd: ghostDir, stdio: 'inherit' });
});

gulp.task('watch', function () {
  gulp.watch(jsFiles, ['lint']);
});
