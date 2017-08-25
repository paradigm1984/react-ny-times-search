const axios = require("axios");


const helpers = {
	// this is kind of like the controllers file in the burger homework. 
	// the server.js file is where you actually will do the scraping and this 
	// will be able to push it to the front end using axios

	// es6 fat arrow function syntax
	test: ()=>{
		console.log("hello from test!!!");
		// will return the route for the scrape
		return axios.get("http://localhost:4000/test/route.", {
		}).then(res=>{
			return res;
		}).catch(err => {
            return err;
        });
	},

	getArticles: (result)=>{
		 
		/* UPDATE: 8.24.17 11:14pm
		the request to ny times should not go in the server.js
		file. after talking with keith he explained how you should
		grab the request data from ny times and render it on the dom
		only when the user saves it should it go and get saved to the
		database, so it should only get sent to the backend for that then.
		when its sent on the front end they should be in the state, and 
		the state should be an array of all of them. maybe the fact that
		theyre all bundled in an object could come in handy. 
		*/

		

		console.log(result);
		console.log("NY times API call");
		return axios.get("http://localhost:4000/nyTimes/", {
			// should be the results of the scrape that happened
			// in server.js 8.24.17 2:31pm
			/*
			image: result.image,
			threadID: result.threadID,
			link: result.link,
			time: result.time,
			summary: result.summary,
			comments: result.comments
			*/
		})
		.then(res=>{
			return res;
        }).catch(err => {
            return err;
        });
			// look at how pete has his email website working with the helpers.js folder
	}
}

module.exports = helpers;


