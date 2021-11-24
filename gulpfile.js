const gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
// const browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('sass/style.scss') //タスクで処理するソースの指定
    .pipe(sassGlob()) // Sassの@importにおけるglobを有効にする
    .pipe(sass().on('error', sass.logError)) //処理させるモジュールを指定
    .pipe(gulp.dest('./public/css/')); //保存先を指定
});

gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', gulp.task('sass'));
  //watch task
  console.log('watch startしました！');
});

// gulp.task('browserSync', function() {
//   browserSync.init({
//     proxy: "http://localhost/",
//     port: 3000,
//   });
// });

//defaultタスクは、タスク名を指定しなかったとき（gulpと打った時）に実行されるタスクです
gulp.task('default', gulp.series( gulp.parallel('sass', /*'browserSync',*/ 'watch')));