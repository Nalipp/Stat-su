var mongoose = require('mongoose');
mongoose.set('debug', true);
// mongoose.connect('mongodb://localhost/tStudy-api');
mongoose.connect('mongodb://heroku_bjjvh2h6:jo0oosp6t55c8ju7ljepf5jgl2@ds135747.mlab.com:35747/heroku_bjjvh2h6');


mongoose.Promise = Promise;

module.exports.TimeSlip = require("./timeSlip");
