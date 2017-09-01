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
	getArticles: ()=> {
		 
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
		console.log("Attempting to make the request...");
		axios({
		  url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
		  method: 'GET',
		  params: {
		  	'api-key': "393209746f6348e4a147d90f49088806",
		  	'sort': "newest"
		  }
		}).then(function(result) {
		  //console.log(result);
		  console.log("api request success!!!");
		  // console.log("result.data.response.docs", result.data.response.docs);

		  // shortening the result parsing for easier reading
		  const resultArray = result.data.response.docs;

		  return resultArray;
		  console.log(resultArray);

		  
		  // for (var i = 0; i < resultArray.length; i++) {
		  // 	console.log('//\n// BEGIN ARTICLE ' + i + '\n//');
		  // 	const title = resultArray[i].headline.main;
		  // 	console.log(title);
		  // 	const link = resultArray[i].web_url;
		  // 	console.log(link);
		  //   const summary = resultArray[i].snippet;
		  //   console.log(summary);
		  //   const pubDate = resultArray[i].pub_date;
		  //   console.log(pubDate);
		  //   console.log('//\n// END ARTICLE ' + i + '\n//');
		  // }
		}).catch(function(err) {
		  throw err;
		});	
	// look at how pete has his email website working with the helpers.js folder
	}

}	

module.exports = helpers;


