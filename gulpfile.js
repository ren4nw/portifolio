const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
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

gulp.task('js', async () => {
    gulp.src('./src/assets/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('./build/js'))
})

gulp.task('imgs', async () => {
    gulp.src('./src/assets/imgs/**/*.jpg')
        .pipe(gulp.dest('./build/imgs'));
});

gulp.task('watch', async () => {
    watch('./src/assets/sass/**/*.scss', series('sass'));
    watch('./src/assets/js/**/*.js', series('js'));
    watch('./src/**/*.html', series('html'));
    watch('./src/assets/imgs/**/*.jpg', series('imgs'));
});

const tasks = [
    parallel('html', 'sass', 'js', 'imgs')
];

if (process.env.ENV === 'development') {
    tasks.push('watch');
}

module.exports.default = series(tasks);