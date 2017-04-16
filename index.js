'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var path = require('path');

module.exports = function (opts) {
  opts = opts || {};

  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-gapps-rename', 'Streaming not supported'));
      return;
    }

    try {
      var basename = path.basename(file.path);
      var extname = path.extname(file.path);
      if (basename.match(/\.gs\.js$/)) {
        file.path = path.dirname(file.path) + '/' + path.basename(basename, extname);
      } else if (extname === '.js') {
        file.path = path.dirname(file.path) + '/' + path.basename(basename, extname) + '.js.html';
        file.contents = new Buffer('<script>\n' + file.contents.toString() + '\n</script>', opts);
      } else if (extname === '.css') {
        file.path = path.dirname(file.path) + '/' + path.basename(basename, extname) + '.css.html';
        file.contents = new Buffer('<style>\n' + file.contents.toString() + '\n</style>', opts);
      }

      cb(null, file);
    } catch (err) {
      this.emit('error', new gutil.PluginError('gulp-gapps-rename', err));
    }
  });
};
