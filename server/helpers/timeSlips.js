var db = require('../models');

exports.getTimeSlips = function(req, res){
    db.TimeSlip.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
}

module.exports = exports;
