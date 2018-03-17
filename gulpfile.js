
    var gulp = require('gulp');
    var uglify = require('gulp-uglify');
    gulp.task('minifyJs',function(){
        //执行的操作
        gulp.src('js/slide.js')  //要压缩的目录
        .pipe(uglify())   //执行压缩
        .pipe(gulp.dest('dist/js'));   //输出的目录	
        
    })