const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const purgecss = require('gulp-purgecss');

const path ={
    scss: './src/assets/sass/**/*.scss',
    js: './src/assets/js/**/*.js',
    html: './src/**/*.html',
    dist: 'dist',
    distCss: 'dist/assets/css',
    distJs: 'dist/assets/js',
    distHtml: 'dist',
    distImg: 'dist/assets/img',
    distFont: 'dist/assets/fonts'
}

gulp.task('sass', () => {
    return gulp.src(path.scss)
        .pipe(sass())
        .pipe(gulp.dest(path.distCss))
        .pipe(purgecss({content: [path.html]}))
        .pipe(gulp.dest(path.distCss))
});

gulp.task('purgecss', () => {
  return gulp
    .src(`${path.dist}/css/**/*.css`)
    .pipe(
      purgecss({
        content: [paths.html, paths.js],
      })
    )
    .pipe(gulp.dest(`${paths.dist}/css`));
});