const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 4000;

const request = require("request");
const mongoose = require("mongoose");

const path = require("path");
const fs = require("fs");

// NY Times API key
const apiKey = "393209746f6348e4a147d90f49088806";

// fixes any CORS issues 
app.all("*",function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, content-type, Authorization");
  next();
});

// Express only serves static assets in production
app.use(express.static("client/public"));

// DB connection
require("./config/db-connection");

// Models for DB
const Article = require("./models/articles.js");
const Comment = require("./models/comments.js");

// ========================== Routes ========================== //

app.get("/test/route/", function(req, res) {
	res.send("test");
	console.log("test");
});

// getPosts function in helpers.js. on same server as react which is why you need localhost:3000
// FOR CLASS: got the route to work, errors on the request. 


// UPDATE 8.24.17 2:06pm its no longer getting an error code, but results is underfined
app.get("/nyTimes/", function(req, res) {
// dont need to get a response back here, because were not saving
// anything to the db until 
console.log(req);
}); // END get /nyTimes/



// Listen on port
app.listen(port, function(){
  console.log('Running on port: ' + port);
});


/* 8.24.17
the server.js port has to be different than the react js app because you used create-react-app. 
it runs the webpack-dev-server on a seperate port becasue its bundled together and configured without
a server.js file so you cant run everything on the same port directly. in the development stage,
when you start the app you have to nodemon server.js outside of the client file, then cd into the
client file and run the create-react-app script with yarn start. also keep in mind get and post. get
has the ability to get and recieve information but only read it. post can do the same thing but read
and edit. when you make a get call from the front it has to correlate with a get on the back and same
goes for post. its not get to post like you thought. you should also always do a callback function with 
req and res and then put any neccesary code inside that function.
*/


