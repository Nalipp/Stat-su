const db = require('../models');

exports.getTimeSlips = (req, res) => {
  db.TimeSlip.find()
  .sort({created_date: -1})
  .then(timeSlips => {
    res.json(timeSlips);
  })
  .catch(err => {
    res.send(err);
  })
}

exports.createTimeSlip = (req, res) => {
  db.TimeSlip.create(req.body)
  .then(newTimeSlip => {
    res.status(201).json(newTimeSlip);
  })
  .catch(err => {
    res.send(err);
  })
}

exports.getTimeSlip = (req, res) => {
  db.TimeSlip.findById(req.params.timeSlipId)
  .then(timeSlip => {
    res.json(timeSlip);
  })
  .catch(err => {
    res.send(err);
  })
}

exports.deleteTimeSlip = (req, res) => {
   db.TimeSlip.remove({_id: req.params.timeSlipId}) 
   .then(() => {
     res.json({message: 'Time slip has been deleted'});
   })
   .catch(err => {
     res.send(err);
   })  
}

exports.updateTimeSlip = function(req, res){
   db.TimeSlip.findOneAndUpdate({_id: req.params.timeSlipId}, req.body, {new: true})
   .then(function(timeSlip){
       res.json(timeSlip);
   })
   .catch(function(err){
       res.send(err);
   })
}

module.exports = exports;
