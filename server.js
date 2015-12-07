// console.log("Working to understand my MEAN stack");
//Require the hhtp and filesysytem modules
var http = require('http');
var fs = require('fs');

//Create our server using the http modules
http.createServer(function(request, response) {
  //Write to our serve. Set configuration for the response
  response.writeHead(200, {
    'Content-type': 'text/html',
    'Access-Control-Allow-Origin' : '*'
  });

  //grab the index.html file using fs
  var readStream = fs.createReadStream(__dirname + '/index.html');

  //send the index.html file to our user
  readStream.pipe(response);

}).listen(8888);

//Write to the console what's happening
console.log('Server running on port http://127.0.0.1:8888');
