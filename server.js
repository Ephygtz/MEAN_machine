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

//create routes for the admin section

//get an instance of the router
var adminRouter = express.Router();

//Route Middleware(router.use())
//route Middleware that will happen on every request
adminRouter.use(function(request, response, next) {

    //log each request to the console
    console.log(request.method, request.url);

    //continue doing what we were doing and go to the route
    next();
});

//admin main page. The dashboard(http://localhost:8989/admin)
adminRouter.get('/', function(request, response) {
    response.send('I am the dashboard!');
});

//users page (http://localhost:8989/admin/users)
adminRouter.get('/users', function(request, response) {
  response.send('I show all the users!');
});

//Posts page (http://localhost:8989/admin/posts)
adminRouter.get('/posts', function(request, response) {
  response.send('I show all the posts');
});

//route with parameters(http://localhost:8989/admin/users/:name)
adminRouter.get('/users/:name', function(request, response) {
    response.send('Hello ' + request.params.name + '!');
});


//Apply the routes to our application
app.use('/admin', adminRouter);

//start the server
app.listen(8989);
console.log('127.0.0.1:8989 is the magic port');
