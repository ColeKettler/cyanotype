'use strict';

var cp = require('child_process');
var path = require('path');

var del = require('del');
var gulp = require('gulp');
var cache = require('gulp-cached');
var jshint = require('gulp-jshint');

// FILES
var componentFiles = ['assets/components/**/*'];
var cssFiles = ['assets/css/**/*.css'];
var fontFiles = ['assets/fonts/**/*.{eot,svg,ttf,woff,woff2}'];
var hbsFiles = ['*.hbs', 'partials/*.hbs'];
var imageFiles = ['assets/images/**/*.{gif,jpg,jpeg,png}'];
var jsFiles = ['gulpfile.js', 'assets/js/**/*.js'];
var jsonFiles = ['*.json'];

var allFiles = Array.prototype.concat.apply([], [
  componentFiles,
  cssFiles,
  fontFiles,
  hbsFiles,
  imageFiles,
  jsFiles,
  jsonFiles,
]);

// GHOST
var ghostDir = process.env.GHOST_DIR || path.resolve('../ghost');
var themeDir = path.join(ghostDir, 'content', 'themes', 'cyanotype');

// TASKS
gulp.task('default', ['build', 'ghost', 'lint', 'watch']);

gulp.task('build', ['clean', 'copy']);

gulp.task('clean', function () {
  return del(themeDir, { force: true });
});

gulp.task('copy', ['clean'], function () {
  return gulp.src(allFiles, { base: '.' })
    .pipe(gulp.dest(themeDir));
});

// Run Ghost in development mode.
gulp.task('ghost', ['build'], function () {
  cp.spawn('npm', ['start'], { cwd: ghostDir, stdio: 'inherit' });
});

gulp.task('lint', function () {
  return gulp.src(jsFiles)
    .pipe(cache('linting'))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function () {
  gulp.watch(allFiles, ['copy']);
  gulp.watch(jsFiles, ['lint']);
});
