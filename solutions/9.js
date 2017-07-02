var http = require('http');

var res1 = [];
var res2 = [];
var res3 = [];

var get_response = function(response, res) {
    response.setEncoding('utf8');
    response.on('data', function(data){
        res.push(data);
    });
}

http.get(process.argv[2], function(response) {get_response(response, res1)});
http.get(process.argv[3], function(response) {get_response(response, res2)});
http.get(process.argv[4], function(response) {get_response(response, res3)});

var timer = setTimeout(function() {
    console.log(res1.join(""));
    console.log(res2.join(""))
    console.log(res3.join(""));
    clearTimeout(timer);
}, 1000);


    // var http = require('http')
    // var bl = require('bl')
    // var results = []
    // var count = 0

    // function printResults () {
    //   for (var i = 0; i < 3; i++)
    //     console.log(results[i])
    // }

    // function httpGet (index) {
    //   http.get(process.argv[2 + index], function (response) {
    //     response.pipe(bl(function (err, data) {
    //       if (err)
    //         return console.error(err)

    //       results[index] = data.toString()
    //       count++

    //       if (count == 3)
    //         printResults()
    //     }))
    //   })
    // }

    // for (var i = 0; i < 3; i++)
    //   httpGet(i)
