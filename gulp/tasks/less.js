var gulp = require('gulp');
var less = require('gulp-less');
var config = require('../config').less;





gulp.task('commonLess', function(){
	return gulp.src(config.commonSrc)         //less源文件
		.pipe(less())    //执行编译
		.pipe(gulp.dest(config.commonDest))   //输出目录
});





