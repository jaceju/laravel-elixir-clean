var gulp = require('gulp');
var Elixir = require('laravel-elixir');
var clean = require('gulp-clean');

var Task = Elixir.Task;

Elixir.extend('clean', function(src, options) {

    new Task('clean', function() {
        options = options || {
            read: false
        };

        return gulp.src(src, options).pipe(clean());
    });

});
