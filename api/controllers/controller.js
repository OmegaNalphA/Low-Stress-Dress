'use strict';
var mongoose = require('mongoose'),
  Temp = mongoose.model('Temp');

var dir = 'C:/data/CS_Projects/LSD'

exports.main = function(req, res) {
	res.sendFile('/index.html' , { root : dir});
}
exports.test = function(req, res) {
	console.log("HEllo")
	res.send("Hello")
}
exports.send_temp = function(req, res) {
  Temp.find().sort({date:1}).limit(1);
  res.json(Temp);
  //push to arduino
};
