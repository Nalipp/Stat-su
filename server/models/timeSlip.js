var mongoose = require('mongoose');

var timeSlipSchema = new mongoose.Schema({
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

var TimeSlip = mongoose.model('TimeSlip', timeSlipSchema);

module.exports = TimeSlip;
