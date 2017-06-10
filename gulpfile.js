let gulp = require('gulp');
let sass = require('gulp-sass');
let cssnano = require('gulp-cssnano');
let autoprefixer = require('gulp-autoprefixer');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');

gulp.task('css', function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(gulp.dest('./public/css'))
});

gulp.task('js', function() {
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/tether/dist/js/tether.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './node_modules/slick-carousel/slick/slick.js',
        './node_modules/wowjs/dist/wow.min.js',
        './src/js/index.js',
    ])
        .pipe(concat('bundle.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('./public/js/'));

});

gulp.task('watch', function() {
    gulp.watch('./src/scss/**/*.scss', ['css']);
    gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('default', ['css', 'js']);