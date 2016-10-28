var gulp = require('gulp');

var gulpsync = require('gulp-sync')(gulp);


gulp.task('default', ['less','watch']);


gulp.task('watchCss', gulpsync.sync(['less-dev', 'rev-collector']));

