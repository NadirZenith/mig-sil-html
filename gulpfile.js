var gulp = require('gulp');
/*var browserify = require('gulp-browserify');*/
var concat = require('gulp-concat');
var less = require('gulp-less');
/*var refresh = require('gulp-livereload');*/
/*var lr = require('tiny-lr');*/
/*var server = lr();*/
var minifyCSS = require('gulp-minify-css');
/*var embedlr = require('gulp-embedlr');*/

gulp.task('scripts', function () {
    gulp.src([
        'app/js/jquery.easing.min.js',
        'app/js/scrolling-nav.js',
        'app/js/jqBootstrapValidation.js',
        'app/js/contact_me.js',
        'app/js/jquery.waypoints.min.js',
        'app/js/app.js'
    ])
            /*.pipe(browserify())*/
            .pipe(concat('app.js'))
            .pipe(gulp.dest('dist/build'))
    /*.pipe(refresh(server))*/
})

gulp.task('styles', function () {
    gulp.src(['app/less/style.less'])
            .pipe(less())
            .pipe(minifyCSS())
            .pipe(gulp.dest('dist/build'))
    /*.pipe(refresh(server))*/
})
/*
 * 
 gulp.task('lr-server', function () {
 server.listen(35729, function (err) {
 if (err)
 return console.log(err);
 });
 })
 */

/*
 gulp.task('html', function () {
 gulp.src("app/*.html")
 .pipe(embedlr())
 .pipe(gulp.dest('dist/'))
 .pipe(refresh(server));
 })
 * 
 */
gulp.task('default', function () {
    gulp.run('scripts', 'styles');
    /*gulp.run('lr-server', 'scripts', 'styles', 'html');*/
    gulp.watch('app/js/**', function (event) {
        gulp.run('scripts');
    })

    gulp.watch('app/less/**', function (event) {
        gulp.run('styles');
    })
    /*
     gulp.watch('app/** /*.html', function (event) {
     gulp.run('html');
     })
     */
})