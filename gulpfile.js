const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const { watch, parallel } = require('gulp');
const { series } = gulp;

gulp.task('html', async () => {
    gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./build/'));
});

gulp.task('sass', async () => {
    gulp.src('./src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('imgs', async () => {
    gulp.src('./src/assets/imgs/**/*.jpg')
        .pipe(gulp.dest('./build/imgs'));
});

gulp.task('watch', async () => {
    watch('./src/assets/sass/**/*.scss', series('sass'));
    watch('./src/**/*.html', series('html'));
    watch('./src/assets/imgs/**/*.jpg', series('imgs'));
});

module.exports.default = series(
    parallel('html', 'sass', 'imgs'),
    'watch'
);