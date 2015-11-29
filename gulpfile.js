var gulp = require('gulp');
var imageop = require('gulp-image-optimization');
var minify = require('gulp-minify');
var htmlmin = require('gulp-html-minifier');
var minifyCss = require('gulp-minify-css');
var minifyInline = require('gulp-minify-inline');
var removeHtmlComments = require('gulp-remove-html-comments');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('copy', function() {
  return gulp.src('development/**')
    .pipe(gulp.dest('production'));
});

gulp.task('images', function(cb) {
    gulp.src(['production/images/**/*.png','production/images/**/*.jpg','production/images/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('production/image')).on('end', cb).on('error', cb);
});

gulp.task('minify', function() {
  gulp.src('production/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('production/html'))
});

gulp.task('minify-css', function() {
  return gulp.src('production/css/**/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('production/css'));
});

gulp.task('minify-inline', function() {
  gulp.src('production/*.html')
    .pipe(minifyInline())
    .pipe(gulp.dest('production/inline'))
});

gulp.task('htmlcomments', function () {
  return gulp.src('production/*.html')
    .pipe(removeHtmlComments())
    .pipe(gulp.dest('production/comment'));
});

