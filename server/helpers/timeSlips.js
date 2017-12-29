const db = require('../models');

exports.getTimeSlips = function(req, res){
  db.TimeSlip.find()
  .then(function(timeSlips){
    res.json(timeSlips);
  })
  .catch(function(err){
    res.send(err);
  })
}

exports.createTimeSlip = function(req, res){
  db.TimeSlip.create(req.body)
  .then(function(newTimeSlip){
    res.status(201).json(newTimeSlip);
  })
  .catch(function(err){
    res.send(err);
  })
}

exports.getTimeSlip = function(req, res){
  db.TimeSlip.findById(req.params.timeSlipId)
  .then(function(timeSlip){
    res.json(timeSlip);
  })
  .catch(function(err){
    res.send(err);
  })
}

exports.deleteTimeSlip = function(req, res){
   db.TimeSlip.remove({_id: req.params.timeSlipId}) 
   .then(function(){
     res.json({message: 'Time slip has been deleted'});
   })
   .catch(function(err){
     res.send(err);
   })  
}

module.exports = exports;
