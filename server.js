const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 4000;

// fixes any CORS issues 
app.all("*",function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, content-type, Authorization");
  next();
});


app.get("http://localhost:3001/scrape/", function(req, res) {
	res.send("Hello World!");
})

// Express only serves static assets in production

app.use(express.static("client/public"));



// Listen on port
app.listen(port, function(){
  console.log('Running on port: ' + port);
});





