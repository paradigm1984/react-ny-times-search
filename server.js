const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 4000;
const cheerio = require('cheerio');
const request = require("request");
const mongoose = require("mongoose");

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
const Posts = require("./models/posts.js");
const Comments = require("./models/comments.js");

// ========================== Routes ========================== //

app.get("http://localhost:3000/test/route", function(req, res) {
	res.send("test");
	console.log("test");
});

// getPosts function in helpers.js. on same server as react which is why you need localhost:3000
app.get("http://localhost:3000/scrape/", function(req, res) {

	request("http://boards.4chan.org/pol/", function(error, response, html) {

		console.log("attempting to scrape");
		if(!error && res.statusCode === 200) {
			var $ = cheerio.load(html);
		} else {
			console.log("there was an error in the initial request");
		}

		console.log("scraped succesfully");

		var results = [];

		// in here you will find the target classes to scrape
		// inside of the div with the id thread, for each:
		$("div.thread").each(function(i, element) {
		
			console.log('//\n// BEGIN POST ' + i + '\n//');
			var result = {};
			var now = new Date();

			// the image is inside the child of the div class postContainer, inside the div with the class post and op, inside
			// the div with the class .file, inside the a tag.
			result.image = $(this).children(".postContainer").children(".post.op").children(".file").children(a).attr("href");

			// title is inside the child of the div class postContainer, inside the div with the class post and op, inside
			// the div with the class postInfo and desktop, inside the span class
			result.threadID = $(this).children(".postContainer").children(".post.op").children("postInfo.destop").children(".postNum.desktop").text().trim();

			// same path as the thread id because the link to the thread is embedded in the id no.
			result.link =  $(this).children(".postContainer").children(".post.op").children("postInfo.destop").children(".postNum.desktop").attr("href");

			// same path as the thread id because the link to the thread except instead of going into the postNum div, im targering the datsTime div text
			result.time = $(this).children(".postContainer").children(".post.op").children("postInfo.destop").children(".dateTime").text().trim();

			// summary is inside the div class postContainer, inside the div class post and op
			// inside the div of postmessage
			result.summary = $(this).children(".postContainer").children(".post.op").children(".postmessage").text().trim();

			result.comments = [];
			
			console.log('//\n// END POST ' + i + '\n//');

			// based on mongoose documentation, the second argument passed in
			// to the function is the name of the post schema
			Post.findOne({ "title": result.title }, function(error, Post) {
				if(error) {
					console.log(error);
				} else {
					if(Post == null) {

						var post = new Post(result);
						post.save(function(error, record) {
							if(error) {
								throw error;
							}
							console.log("record added to the database!!");
						});
					} else {
						console.log("no record was added because it already exists.");
					}
				}
			});
		});	


	})	
	// the jsavascript for the scrape happens here. you then res.send that to the helpers file
	// and from that it goes to thee react components. ?????
	console.log(result);
	res.send(result);
});



// Listen on port
app.listen(port, function(){
  console.log('Running on port: ' + port);
});


/*
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


