'use strict';

var gulp = require('gulp');
var elixir = require('laravel-elixir');
var _ = require('underscore');
var del = require('del');

elixir.extend('clean', function (dirs) {

    // dirs = _.union(['public/build'], dirs);
    dirs = dirs || [
        'public/css',
        'public/js',
        'public/build'
    ];

    gulp.task('clean', function (cb) {
        del(dirs, cb);
    });

    return this.queueTask('clean');
});
