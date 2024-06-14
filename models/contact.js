const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
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
    info: {
        type: String,
        required: true,
    },
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
