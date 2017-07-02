var http = require('http');

http.get(process.argv[2], function(response){
    response.setEncoding('utf8');
    var results = [];
    response.on('data', function(data){
        results.push(data);
    });
    response.on('end', function() {
        console.log(results.join("").length);
        console.log(results.join(""));
    });
});
