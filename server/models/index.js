const mongoose = require('mongoose');
let url;

mongoose.set('debug', false);
mongoose.Promise = global.Promise;

if (process.env.NODE_ENV === 'dev') url = 'mongodb://localhost/tStudy-api';
else if (process.env.NODE_ENV === 'test' ) url = 'mongodb://localhost/tStudy-api-test';
else url = 'mongodb://heroku_bjjvh2h6:jo0oosp6t55c8ju7ljepf5jgl2@ds135747.mlab.com:35747/heroku_bjjvh2h6';

/* eslint-disable no-console */

mongoose.connect(url, err => {
  if (err) console.log("# Failed to connect to MongoDB ");
  else console.log('# Connected to MongoDB', url);
})

module.exports.TimeSlip = require("./timeSlip");
