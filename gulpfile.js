var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');

gulp.task('browserify', function() {
  browserify('./app.js', { debug: false })
    .transform("babelify", {presets: ["es2015"]})
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('js-watch', ['browserify'], browserSync.reload);

gulp.task('watch', function() {
  gulp.watch("./*.js", ['js-watch']);
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['browserify', 'watch', 'browser-sync']);
