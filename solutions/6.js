var mymod = require('./6_mod');

mymod(process.argv[2], process.argv[3], function(err, files) {
    files.forEach(function (file) {
        console.log(file);
    });
});

