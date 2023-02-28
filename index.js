// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/:date", function (req, res) {
  console.log( `${new Date(parseInt(req.params.date))} ${ new Date(parseInt(req.params.date))!= "Invalid Date"}`);
   if(new Date(parseInt(req.params.date))!= "Invalid Date"){
 
  res.json({ unix: new Date(parseInt(req.params.date)).getTime(), utc: new Date(parseInt(req.params.date)).toUTCString() });
}else {
  console.log("hellos");
  res.json({error:"Invalid Date"});}
  
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
