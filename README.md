# gulp-gapps-rename [![Build Status](https://travis-ci.org/rodyhaddad/gulp-gapps-rename.svg?branch=master)](https://travis-ci.org/rodyhaddad/gulp-gapps-rename)

> My sublime gulp plugin


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

### gappsRename([options])

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## License

MIT © [rodyhaddad](http://rodyhaddad.com)
