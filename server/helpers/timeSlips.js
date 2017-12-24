var db = require('../models');

exports.getTimeSlips = function(req, res){
    db.TimeSlip.find()
    .then(function(timeSlips){
        res.json(timeSlips);
    })
    .catch(function(err){
        res.send(err);
    })
}

module.exports = exports;
