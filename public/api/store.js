var express = require('express');
var app = express();
var cors=require('cors');
var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser
//var event = require('./models/event');
//app.options('*', cors());
app.use(cors());
app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log(req.body);
  // event.save(value, (error, eventObj) => {
  //   if (error) {
  //     console.log(error);
  //     return res.status(500).send(error);
  //   }
  //
  //   res.json(console.log("succesfully updated"));
  // });
});

app.listen(8081);
