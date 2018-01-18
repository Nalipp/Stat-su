const mongoose = require('mongoose');

const timeSlipSchema = new mongoose.Schema({
    language: {
        type: String,
        validate: {
          validator: (language) => 
          language.length < 31,
          message: 'Language must be valid length'
        }
    },
    url: {
      type: String,
      validate: {
        validator: (url) =>
        url.length < 10000,
        message: 'Url must be valid length'
      }
    },
    description: {
        type: String,
        validate: {
          validator: (description) => 
          description.length < 201,
          message: 'Description must be valid length'
        }
    },
    total_time: {
      type: Number,
      default: 0
    },
    completed: {
      type: Boolean,
      default: false
    },
    created_date: {
      type: Date,
      default: Date.now
    },
    last_update: {
      type: Date,
      default: Date.now
    }
});

const TimeSlip = mongoose.model('TimeSlip', timeSlipSchema);

module.exports = TimeSlip;
