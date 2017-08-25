var mongoose = require("mongoose");

// Local Database Configuration with Mongoose

mongoose.connect("mongodb://localhost/nyTimesArticles", function(error) {
	if(error) {
		throw error;
		console.log("there was an error connecting with the DB");
	} 
	console.log("Database connected");
}); 


