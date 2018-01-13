'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TempSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  location: {
    type: String,
    required: 'Enter Location'
  },
  temp: {
    type: Number,
    default: 50
  },
  rain: {
    type: Boolean, 
    default: false
  }
});

module.exports = mongoose.model('Temp', TempSchema);