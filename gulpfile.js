var elixir = require('laravel-elixir');
var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('inject', function () {
    var target = gulp.src('./resources/assets/html/app.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./public/build/js/*.js', './public/build/css/*.css'], {read: false});

    return target
    .pipe(inject(sources))
    .pipe(gulp.dest('./public'));
});

elixir(function (mix) {
    mix.scripts('app.js');
    mix.sass('app.scss');

    mix.version(['css/app.css', 'js/app.js']);
});

