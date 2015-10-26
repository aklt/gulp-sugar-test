// Example gulpfile using gulp-sugar
var gulp = require('gulp');

require('gulp-sugar')(gulp, {
  buildDir: {
    task: 'shell',
    args: 'mkdir -p build'
  },
  buildMarkdown: {
    task: 'preprocess',
    src:  'README.md',
    dest: 'build/index.html',
    deps: 'buildDir'
  },
  copy: {
    src: 'README.md',
    dest: 'build'
  },
  serve: {
    open: false,
    watch: ['build/*'],
    server: {
      baseDir: 'build'
    }
  },
  watch: {
      actions: [
          [['README.md'], ['buildMarkdown', 'copy']]
    ]
  },
  reload: {
    src: 'gulpfile.js'
  },
  clean: {
    rm: './build'
  }
});

gulp.task('build', ['buildMarkdown', 'copy']);
gulp.task('default', ['build', 'serve', 'watch']);
