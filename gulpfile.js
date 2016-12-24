/**
 * Created by Administrator on 2016/12/8.
 */
//引入gulp模块
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
//编写一个编译stylus任务
gulp.task('stylus',function () {
    //stylus文件及其所有子目录的文件
    return gulp.src('./stylus/**/*.styl')
    //编译stylus文件
        .pipe(stylus())
        //输出stylus编译后的文件
        .pipe(gulp.dest('./public/css/'))
});
gulp.task('minifycss',['stylus'],function () {
    return gulp.src('./public/css/**/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./public/mincss/'))
});
gulp.task('uglify',function () {
    return gulp.src('./public/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/minjs/'))
});
/*不用每次都启动app.js，只需要启动watcher任务即可*/
gulp.task('nodemon',function (nm) {
    var flag = false;
    return nodemon({
        script:'./server.js'
    }).on('start',function () {
        if(!flag){
            nm();
            flag = true;
        }
    })
});
gulp.task('browserSync',['nodemon'],function () {
    browserSync.init({
        proxy:{
            target:'http://127.0.0.1:16909'
        },
        files:['*'],
        port:9888,
        open:false
    })
});
//动态监听
gulp.task('watcher',['browserSync','stylus'],function () {
    gulp.watch('./stylus/**/*.styl',['stylus']);
    gulp.watch('./public/css/**/*.css').on('change',function () {
        reload();
    })
});
//创建一个default任务
gulp.task('default',function () {
    console.log('this is default')
});
