var fs = require('fs');

fs.readFile(process.argv[2], function callback (err, data) {
 var str = data.toString();
 console.log(str.split('\n').length-1);
});



