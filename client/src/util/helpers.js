const axios = require("axios");


const helpers = {
	// this is kind of like the controllers file in the burger homework. 
	// the server.js file is where you actually will do the scraping and this 
	// will be able to push it to the front end using axios

	// es6 fat arrow function syntax
	test: ()=>{
		console.log("hello from test!!!");
		// will return the route for the scrape
		return axios.get("http://localhost:3000/test/route", {
		}).then(res=>{
			return res;
		}).catch(err => {
            return err;
        });
	},

	scrapePosts: ()=>{

		// the actual javascript will happen in the helpers.js file
		// youll get the res of that and send it wherever.
		// you will use req.body with body parser here

		console.log("scrape posts");
		// will return the route for the scrape
		return axios.get("http://localhost:3000/scrape/", {

		}).then(res=>{
			return res;
        }).catch(err => {
            return err;
        });
			// look at how pete has his email website working with the helpers.js folder
	}
}

module.exports = helpers;