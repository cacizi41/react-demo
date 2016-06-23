const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('static:dev', () => {
  return gulp.src(['app/**/*.html', 'app/css/**.*css'])
  .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('webpack:dev', () => {
  return gulp.src('app/js/entry.js')
  .pipe(webpack({
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    },
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('default', ['static:dev', 'webpack:dev']);
