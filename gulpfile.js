var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    prefix = require('gulp-autoprefixer');

//Styles Task
gulp.task('styles', function() {
    sass('frontend/styles/application.scss')
        .pipe(prefix('last 2 versions'))
        .pipe(gulp.dest('static'));
});

//Watch Task
gulp.task('watch',function () {
    gulp.watch('frontend/styles/**/*.scss',['styles']);
});

gulp.task('default',['styles','watch']);