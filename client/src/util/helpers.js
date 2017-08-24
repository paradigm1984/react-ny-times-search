import axios from "axios";

export const helpers = {
	// this is kind of like the controllers file in the burger homework. 
	// the server.js file is where you actually will do the scraping and this 
	// will be able to push it to the front end using axios
	getPosts:()=>{
		// 
		return axios.get("http://localhost:4000/test/route").then(res=>{
			return res;
		});
	}
}