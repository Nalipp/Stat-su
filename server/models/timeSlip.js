const mongoose = require('mongoose');

const timeSlipSchema = new mongoose.Schema({
    language: {
        type: String
    },
    description: {
        type: String,
        required: 'Description can not be blank'
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
