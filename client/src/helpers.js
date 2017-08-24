import axios from "axios";


const helpers = {
	getMessage:()=>{
		return axios.get("http://localhost:4000/test/route").then(res=>{
			return res;
		});
	}
}