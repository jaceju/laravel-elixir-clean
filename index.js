var gulp = require('gulp');
var Elixir = require('laravel-elixir');
var del = require('del');
var vinylPaths = require('vinyl-paths');

var Task = Elixir.Task;

Elixir.extend('clean', function(src) {

    new Task('clean', function() {
        return gulp.src(src).pipe(vinylPaths(del));
    });

});
