const mongoose = require('mongoose');

const danceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const Dance = mongoose.model('Dance', danceSchema);
module.exports = Dance;