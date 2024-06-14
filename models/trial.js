const mongoose = require('mongoose');

const trialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String, 
    },
    dance: {
        type: String,
        required: true,
    },
});

const Trial = mongoose.model('Trial', trialSchema);
module.exports = Trial;
