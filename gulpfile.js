var elixir = require('laravel-elixir');
var gulp = require('gulp');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;

elixir.extend('inject', function (watch) {
    new elixir.Task('inject', function () {
        var target = gulp.src('../resources/assets/html/app.html', { cwd: './public' });
        var sources = gulp.src(
            ['./build/js/*.js', './build/css/*.css'],
            {read: false, cwd: './public'}
        );
        return target
        .pipe(inject(sources))
        .pipe(wiredep({
            ignorePath: '../../../public',
            directory: './public/bower_components/',
            bowerJson: require('./bower.json')
        }))
        .pipe(gulp.dest('./public'));
    })
    .watch(watch);
});

elixir(function (mix) {
    mix.scripts('app.js');
    mix.sass('app.scss');
    //mix.copy('./resources/assets/html/app.html', './public/app.html');
    mix.inject(['./public/build/rev-manifest.php', './bower.json', './resources/assets/html/app.html']);

    mix.version(['css/app.css', 'js/app.js']);
});

