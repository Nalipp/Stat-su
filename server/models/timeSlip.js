var mongoose = require('mongoose');

var timeSlipSchema = new mongoose.Schema({
  language: {
    type: String,
  },
  description: {
    type: String,
    required: 'Description cannot be blank'
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

var TimeSlip = mongoose.model('TimeSlip', todoSchema);

module.exports = TimeSlip;
