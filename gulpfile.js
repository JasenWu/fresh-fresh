var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');

var path = require('path');
var dest = path.resolve(__dirname, "./build");
var src = path.resolve(__dirname, './src');

// 引入组件
//var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


// 编译Less
gulp.task('less', function() {

    //公共样式文件
    gulp.src('./src/common/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./build/common/less/'));

    //主模块样式
    gulp.src('./src/module/main/index.less')
        .pipe(less())
        .pipe(gulp.dest('./build/module/main/'));



    //监控less变化
    gulp.watch(['./src/common/less/*.less','./src/module/main/index.less'],function () {
        gulp.run('less');
    })

});



// 合并，压缩Js文件
gulp.task('scripts', function() {

    //公共模块JS
    gulp.src(['./src/common/js/jquery.min.js','./src/common/js/doT.min.js', './src/common/js/common.js'])

        .pipe(concat('common.js'))
        .pipe(gulp.dest('./build/common/js/'))
        .pipe(rename('common.min.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./build/common/js/'));

    //主模块JS
    gulp.src('./src/module/main/*.js')

        .pipe(gulp.dest('./build/module/main/'))

        .pipe(uglify())
        .pipe(gulp.dest('./build/module/main/'));


    //监控JS变化
    gulp.watch(['./src/module/main/*.js','./src/common/js/*.js'],function () {
        gulp.run('scripts');
    })
});

//html
gulp.task('html', function() {

    //公共模块
    gulp.src('./src/common/html/*.html')

        .pipe(gulp.dest('./build/common/html/'));


 //主模块html
    gulp.src('./src/module/main/*.html')

        .pipe(gulp.dest('./build/module/main/'));


    //监控html变化
    gulp.watch(['./src/module/main/*.html','./src/common/html/*.html'],function () {
        gulp.run('html');
    })
});




//build
gulp.task('build', function() {

    //公共模块JS
    gulp.src(['./src/common/js/jquery.min.js','./src/common/js/doT.min.js','./src/common/js/hammer.min.js', './src/common/js/common.js'])

        .pipe(concat('common.js'))
        .pipe(gulp.dest('./build/common/js/'))
        .pipe(rename('common.min.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./build/common/js/'));

    //各模块JS
    gulp.src(['./src/module/main/index.js','./src/module/about/index.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./build/common/js/'))
        .pipe(rename('app.min.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./build/common/js/'));

    //各模块Less
    gulp.src(['./src/module/main/index.less','./src/module/about/index.less'])

        .pipe(less())
        .pipe(concat('app.less'))

        .pipe(gulp.dest('./build/common/css/'))
        .pipe(rename('app.min.less'))
        //.pipe(uglify())
        .pipe(gulp.dest('./build/common/less/'));



});




// 默认任务
gulp.task('default', function(){
    gulp.run('less','scripts','html');

});


// 默认任务
gulp.task('Watch', function(){
    //监控js变化
    gulp.watch(['./src/module/main/index.js','./src/module/about/index.js'],function () {
        gulp.run('build');
    })

    //监控less变化
    gulp.watch(['./src/module/main/index.less','./src/module/about/index.less'],function () {
        gulp.run('build');
    })

});

// 默认任务
gulp.task('buildAndWatch', function(){
    gulp.run('Watch','build');

});











