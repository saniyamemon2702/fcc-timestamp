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

app.get("/api/:date?", function (req, res) {
  // checkpiint
 
  // console.log( `${Date(req.params.date)}`);

  // empty params
  if(req.params.date == undefined){
    res.json({ unix: new Date().getTime(), utc: new Date().toUTCString() });
  } 
  // valid date
  if(new Date(req.params.date).toUTCString()!=='Invalid Date' || new Date(parseInt(req.params.date)).toUTCString()!=='Invalid Date'){
    // dd-mm-yyyy format
    if(new Date(req.params.date).toUTCString()!=='Invalid Date'){
      res.json({ unix:Date.parse(req.params.date)  , utc: new Date(req.params.date).toUTCString() });
    }else{
      // unix format
      res.json({ unix:  parseInt(req.params.date), utc: new Date(parseInt(req.params.date)).toUTCString() });
    }
  }
  // invalid date
else {
  res.json({error:"Invalid Date"});
}  
})
;



// listen for requests :)
var listener = app.listen(3000);
