const { normalize } = require('path')
console.log(normalize('/foo/bar//baz/asdf/quux/..'))
// 返回: '/foo/bar/baz/asdf'

const { join } = require('path')
console.log(join('/foo', 'bar', 'baz/asdf', 'quux', '..'))
// 返回: '/foo/bar/baz/asdf'

let path = require('path')

path.resolve('/foo/bar', './baz')
// 返回: '/foo/bar/baz'
path.resolve('/foo/bar', '/tmp/file/')
// 返回: '/tmp/file'
path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
// 如果当前工作目录为 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'

// path.basename(path[, ext])
path.basename('/foo/bar/baz/asdf/quux.html');
// 返回: 'quux.html'
path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// 返回: 'quux'

// path.extname(path)
path.extname('index.html');
// 返回: '.html'
path.extname('index.coffee.md');
// 返回: '.md'
path.extname('index.');
// 返回: '.'
path.extname('index');
// 返回: ''
path.extname('.index');
// 返回: ''

// path.dirname(path)
path.dirname('/foo/bar/baz/asdf/quux');
// 返回: '/foo/bar/baz/asdf'

// path.parse(path)
path.parse('/home/user/dir/file.txt');
// 返回:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
/*
┌─────────────────────┬────────────┐
│          dir        │    base    │
├──────┬              ├──────┬─────┤
│ root │              │ name │ ext │
"  /    home/user/dir / file  .txt "
└──────┴──────────────┴──────┴─────┘
(请无视以上字符串中的空格，它们只是为了布局)
*/

// path.format(pathObject)  path.format() 方法会从一个对象返回一个路径字符串。 与 path.parse() 相反
// 如果提供了 `dir`、`root` 和 `base`，则返回 `${dir}${path.sep}${base}`。
// `root` 会被忽略。
path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
  });
  // 返回: '/home/user/dir/file.txt'
  
  // 如果没有指定 `dir`，则 `root` 会被使用。
  // 如果只提供了 `root` 或 `dir` 等于 `root`，则平台的分隔符不会被包含。
  // `ext` 会被忽略。
  path.format({
    root: '/',
    base: 'file.txt',
    ext: 'ignored'
  });
  // 返回: '/file.txt'
  
  // 如果没有指定 `base`，则 `name` + `ext` 会被使用。
  path.format({
    root: '/',
    name: 'file',
    ext: '.txt'
  });
  // 返回: '/file.txt'

/*
    __dirname __filename  总是返回文件的绝对路径
    // process.cwd() 返回的是node命令所在的文件夹路径
*/
    console.log(process.cwd())
    
/**
 *      ./
 *      ./ 在require方法中总是相对于自身文件的
 *      在其他地方和precess.cwd()一样，表示相对于node命令所在的文件路径
 */
