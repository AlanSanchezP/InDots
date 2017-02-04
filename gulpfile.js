var gulp = require('gulp'),
  config = require('./gulpconfig'),
  requireDir = require('require-dir');

requireDir('./gulptasks');

gulp.task('build', [
  'build:bower',
  'build:styles',
  'build:scripts',
  'copy:fonts',
  'copy:images',
  'build:html'
]);

gulp.task('watch', function () {
  gulp.watch(config.paths.bower(''), ['build:bower']);
  gulp.watch([config.paths.src.styles_all, config.paths.src.svg_files], ['build:styles']);
  gulp.watch(config.paths.src.scripts_all, ['build:scripts']);
  gulp.watch(config.paths.src.fonts, ['copy:fonts']);
  gulp.watch(config.paths.src.img, ['copy:images']);
  gulp.watch(config.paths.src.templates_all, ['build:html']);
});

gulp.task('serve', ['server:run', 'server:reload']);

gulp.task('default', ['build', 'serve', 'watch']);