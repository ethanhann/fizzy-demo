var elixir = require('laravel-elixir');
var gulp = require('gulp');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;

gulp.task('inject', function () {
    var target = gulp.src('./resources/assets/html/app.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./public/build/js/*.js', './public/build/css/*.css'], {read: false});

    return target
    .pipe(inject(sources))
    .pipe(gulp.dest('./public'));
});

gulp.task('bower', ['inject'], function () {
    return gulp.src('./public/app.html')
    .pipe(wiredep({
        directory: './bower_components/',
        bowerJson: require('./bower.json')
    }))
    .pipe(gulp.dest('./public/'));
});

elixir(function (mix) {
    mix.scripts('app.js');
    mix.sass('app.scss');
    mix.task('inject', 'public/build/rev-manifest.php');
    mix.task('bower', 'bower.json');

    mix.version(['css/app.css', 'js/app.js']);
});

