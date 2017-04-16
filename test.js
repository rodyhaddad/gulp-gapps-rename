import path from 'path';
import test from 'ava';
import gulpUtil from 'gulp-util';
import fn from './';

test.cb('keep .html as is', t => {
  const stream = fn();

  stream.once('data', file => {
    t.is(file.contents.toString(), 'unicorns');
    t.is(file.path, path.join(__dirname, 'file.html'));

    t.end();
  });

  stream.write(new gulpUtil.File({
    base: __dirname,
    path: path.join(__dirname, 'file.html'),
    contents: new Buffer('unicorns')
  }));

  stream.end();
});

test.cb('keep .gs as is', t => {
  const stream = fn();

  stream.once('data', file => {
    t.is(file.contents.toString(), 'unicorns');
    t.is(file.path, path.join(__dirname, 'file.gs'));

    t.end();
  });

  stream.write(new gulpUtil.File({
    base: __dirname,
    path: path.join(__dirname, 'file.gs'),
    contents: new Buffer('unicorns')
  }));

  stream.end();
});

test.cb('change .gs.js to .gs', t => {
  const stream = fn();

  stream.once('data', file => {
    t.is(file.contents.toString(), 'unicorns');
    t.is(file.path, path.join(__dirname, 'file.gs'));

    t.end();
  });

  stream.write(new gulpUtil.File({
    base: __dirname,
    path: path.join(__dirname, 'file.gs.js'),
    contents: new Buffer('unicorns')
  }));

  stream.end();
});

test.cb('change .js to .html', t => {
  const stream = fn();

  stream.once('data', file => {
    t.is(file.contents.toString(), '<script>\nunicorns\n</script>');
    t.is(file.path, path.join(__dirname, 'file.js.html'));

    t.end();
  });

  stream.write(new gulpUtil.File({
    base: __dirname,
    path: path.join(__dirname, 'file.js'),
    contents: new Buffer('unicorns')
  }));

  stream.end();
});

test.cb('change .css to .html', t => {
  const stream = fn();

  stream.once('data', file => {
    t.is(file.contents.toString(), '<style>\nunicorns\n</style>');
    t.is(file.path, path.join(__dirname, 'file.css.html'));

    t.end();
  });

  stream.write(new gulpUtil.File({
    base: __dirname,
    path: path.join(__dirname, 'file.css'),
    contents: new Buffer('unicorns')
  }));

  stream.end();
});
