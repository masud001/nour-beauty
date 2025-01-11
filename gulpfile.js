const  {src, dest, watch, series }= require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');


function copySwiperJs(){
  return src([
    './node_modules/swiper/swiper-bundle.min.{js,css}',
  ]).pipe(dest("src/assets/swiper"));
}

function compyBootstrapJs(){
  return src([
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
  ]).pipe(dest("src/assets/js"));
}

function compileSass(){
  return src('src/sass/style.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(purgecss({
    content: ['src/**/*.html', 'src/**/*.js'],
    extractors:[{
      extractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      extensions: ['html', 'js']
    }],
     satisfies:{
      standard: [
          /^offcanvas/,  // Safelisting all offcanvas-related classes
          'show',        // For showing the offcanvas
          'fade',        // Fade transition for modals
          'offcanvas-backdrop',  // Safelists the offcanvas backdrop
          'modal-backdrop',  // For any modals you might use
    ]}
  }))
  .pipe(dest('./src/assets/css'))
}

function watchTask() {
    watch(['src/scss/**/*.scss', 'src/*.html'], compileSass);
}

exports.default = series(copySwiperJs, compyBootstrapJs, compileSass, watchTask);