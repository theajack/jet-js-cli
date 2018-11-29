
const through = require('through2');
const PluginError = require('plugin-error');

module.exports = (options) => {
  return through.obj(function(file, enc, next) {
    if (file.isNull()) {
      next(null, file);
      return;
    }

    const add = (buf, _, cb) => {
      try {
        let str='Jet.config.env="pro";'
        if(options.buildJsWithBabel){
            str+="Jet.config.babel=false;"
        }
        if(options.buildCssWithLess){
            str+="Jet.config.less=false;"
        }
        str+=buf.toString();
        let contents = Buffer.from(str);
        if (next === cb) {
          file.contents = contents;
          cb(null, file);
          return;
        }
        cb(null, contents);
        next(null, file);
      } catch (err) {
        let opts = Object.assign({}, options, { fileName: file.path });
        let error = new PluginError('add-env', err, opts);
        if (next !== cb) {
          next(error);
          return;
        }
        cb(error);
      }
    };

    if (file.isStream()) {
      file.contents = file.contents.pipe(through(add));
    } else {
        add(file.contents, null, next);
    }
  });
};