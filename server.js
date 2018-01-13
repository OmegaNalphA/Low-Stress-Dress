var express = require('express'),
app = express(),

port = process.env.PORT || 8080,
mongoose = require('mongoose'),
Temp = require('./api/models/TempSchema'),
bodyParser = require('body-parser');

// app.get('/', function (req, res) {
//    res.send('Hello World');
// })

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route

app.listen(port);

console.log("Example app listening at http://:%s", port)
