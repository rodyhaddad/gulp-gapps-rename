# gulp-gapps-rename [![Build Status](https://travis-ci.org/rodyhaddad/gulp-gapps-rename.svg?branch=master)](https://travis-ci.org/rodyhaddad/gulp-gapps-rename)

If you're developing for Google App Script, you'll soon realize that the platform only supports `.gs` and `.html` files.  
You probably don't want to limit yourself to these 2 file extensions, and that's why this plugin exists.  

This gulp plugin helps you with local development of Google App Script projects by renaming your local files to what GApps expects before uploading.  
Checkout the [Usage](#usage) section to see how this is done in detail.

## Install

```
$ npm install --save-dev gulp-gapps-rename
```


## Usage

```js
const gulp = require('gulp');
const gappsRename = require('gulp-gapps-rename');

gulp.task('default', () => {
	gulp.src('src/*')
		.pipe(gappsRename())
		.pipe(gulp.dest('dist'))
);
```

The plugin's job is to take in a stream of files and prepare them to be uploaded to a Google App Script project.  
It does so by applying the two following type of operations:

* [Rename Operations](#rename-operations)
* [Wrapping Operations](#wrapping-operations)


### Rename Operations Rules

This gulp plugin will rename file extensions based on the following rules:

* `.gs.js` files will be renamed to `.gs`
* `.js` files will be renamed to `.js.html`
* `.css` files will be renamed to `.css.html`


### Wrapping Operations Rules

This gulp plugin will wrap the content of certain files based on the following rules:

* The content of `.js` files will be wrapped with a `<script>` tag
* The content of `.css` files will be wrapped with a `<style>` tag


## Example


Imagine you have the following list of files:
```
backend.gs.js
scripts.js
styles.css
template.html
```

After applying the `gulp-gapps-rename` plugin, the files will become:
```
backend.gs # the .js is dropped
scripts.html # The content will be wrapped by a <script> tag 
styles.css # The content will be wrapped by a <style> tag
template.html # untouched
```


## API

### gappsRename()

This is the main method of the gulp plugin that you should pass to `.pipe()`.  
The plugin currently does not have any options.


## Contributing


Contributions are welcome!  
If you want to contribute, don't hesitate to open a new issue or send a pull request to this repo.  


## Tests

You can run the test by running:
```
$ npm test
```


## License

MIT © [rodyhaddad](http://rodyhaddad.com)
