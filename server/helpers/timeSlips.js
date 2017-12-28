var db = require('../models');

exports.getTimeSlips = function(req, res){
  db.TimeSlip.find()
  .then(function(timeSlips){
      console.log('hi', timeSlips); 
      res.json(timeSlips);
  })
  .catch(function(err){
      res.send(err);
  })
}

exports.createTimeSlip = function(req, res){
  db.TimeSlip.create(req.body)
  .then(function(newTimeSlip) {
    res.status(201).json(newTimeSlip);
  })
  .catch(function(err){
    res.send(err);
  })
}

module.exports = exports;
