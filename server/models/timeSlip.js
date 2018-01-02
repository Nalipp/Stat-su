const mongoose = require('mongoose');

const timeSlipSchema = new mongoose.Schema({
    language: {
        type: String,
        validate: {
          validator: (language) => 
          language.length < 1000,
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
        required: 'Description is required',
        validate: {
          validator: (description) => 
          description.length > 2 && description.length < 30000,
          message: 'Description must be valid length'
        }
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

const TimeSlip = mongoose.model('TimeSlip', timeSlipSchema);

module.exports = TimeSlip;
