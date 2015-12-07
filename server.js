// // Method1 Serving files with pure node, using HTTP and FS modules without Express
// //Require the hhtp and filesysytem modules
// var http = require('http');
// var fs = require('fs');
//
// //Create our server using the http modules
// http.createServer(function(request, response) {
//   //Write to our serve. Set configuration for the response
//   response.writeHead(200, {
//     'Content-type': 'text/html',
//     'Access-Control-Allow-Origin' : '*'
//   });
//
//   //grab the index.html file using fs
//   var readStream = fs.createReadStream(__dirname + '/index.html');
//
//   //send the index.html file to our user
//   readStream.pipe(response);
//
// }).listen(8888);
//
// //Write to the console what's happening
// console.log('Server running on port http://127.0.0.1:8888');

// Method2 Using Express
//load Express package and create our app
var express = require('express');
var app = express();
var path = require ('path');

//send our index.html file to the user for the home package
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/index.html'));
});

//start the server
app.listen(8989);
console.log('127.0.0.1:8989 is the magic port');
