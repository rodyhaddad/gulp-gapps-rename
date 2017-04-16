# gulp-gapps-rename [![Build Status](https://travis-ci.org/rodyhaddad/gulp-gapps-rename.svg?branch=master)](https://travis-ci.org/rodyhaddad/gulp-gapps-rename)


## Install

```
$ npm install --save-dev gulp-gapps-rename
```


## Usage

```js
const gulp = require('gulp');
const gappsRename = require('gulp-gapps-rename');

gulp.task('default', () => {
	gulp.src('src/file.ext')
		.pipe(gappsRename())
		.pipe(gulp.dest('dist'))
);
```


## API

### gappsRename()

This is the main method of the gulp plugin that you should pass to `.pipe`.  
The plugin currently does not have any options.

## License

MIT © [rodyhaddad](http://rodyhaddad.com)
