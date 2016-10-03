var gulp = require('gulp');
var webpack = require("webpack-stream");
var browserSync = require('browser-sync').create();


//webpackでのビルド
gulp.task('js', function(){
  return gulp.src('./app.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js',
      },
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
          },
          {
            test: /\.vue$/,
            loader: 'vue'
          }
        ]
      }
    }))
    .pipe(gulp.dest('./'));
});

//brwoser-syncの起動とファイルの監視
gulp.task('dev', ["js"], function(){
  browserSync.init({
    server: {
      baseDir: '.'
    },
    files: [
      { match: ['bundle.js', '*.html'] }
    ],
    open: true
  });
  gulp.watch(['*.js', '!bundle.js', '*.html', '*.vue'], ['js']);
});

gulp.task('build', ['js']);
