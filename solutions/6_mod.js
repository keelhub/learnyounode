var fs = require('fs');
var path = require('path');

module.exports = function(dir, filter, fn) {
    fs.readdir(dir, function callback (err, list) {
        if (err)
            return fn(err)

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filter
        })

        fn(null, list);
    });
}
