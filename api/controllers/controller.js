'use strict';
var mongoose = require('mongoose'),
  Temp = mongoose.model('Temp');


exports.main = function(req, res) {
	res.send("Hello World!");
}
exports.test = function(req, res) {
	console.log("HEllo")
}
exports.send_temp = function(req, res) {
  Temp.find().sort({date:1}).limit(1);
  res.json(Temp);
  //push to arduino
};
