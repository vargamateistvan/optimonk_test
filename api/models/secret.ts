const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Secret = new Schema({
    hash: {
        type: String,
        required: true,
    },
    secretText: {
        type: String,
        required: true
    },
    createdAt: {
        type: Number,
        required: true
    },
    expiresAt: { 
        type: Number, 
        required: true
    },
    remainingViews: { 
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Secret', Secret)