/**
 * Plugins
 * -------
 */

var gulp = require('gulp'); // Gulp is always required
var scss = require('gulp-sass'); // Gulp libsass implementation


/**
 * Tasks
 * -----
 */

/**
 * Compiles SCSS files into CSS
 *
 * @src .scss files that do not start with _
 * @dest .css files
 */
gulp.task('scss', function() {
    return gulp.src(['scss/**/*.scss', '!scss/**/_*'])
        .pipe(scss())
        .pipe(gulp.dest('css'));
});

/**
 * The default task that is run with the
 * gulp command when not task is specified.
 * The scss task is required to run before
 * this one.
 */
gulp.task('default', ['scss'], function() {
    gulp.watch('scss/**/*.scss', ['scss']);
});