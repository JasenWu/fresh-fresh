/**
 * Created by apple on 16/10/28.
 */

var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config');


gulp.task('watchModuleMainSrc', function(){
    return gulp.src(config.less.moduleMainSrc)         //less源文件
        .pipe(less())    //执行编译
        .pipe(gulp.dest(config.less.moduleMainDest))   //输出目录
});


gulp.task('watch', function(){
    // watch(config.less.all, function(){  //监听所有less
    //     gulp.start('watchCss'); 			//出现修改、立马执行less任务
    // });

    watch(config.less.moduleMainSrc, function(){  //监听所有less
        gulp.start('watchModuleMainSrc');             //出现修改、立马执行less任务
    })
    // watch(config.images.src, function(){  //监听所有image
    //     gulp.start('images');
    // });
    // watch(config.html.src, function(){  //监听所有html
    //     gulp.start('html');
    // });
    // watch(config.browserify.watch, function(){  //监听所有image
    //     gulp.start('watchJs');
    // });
})