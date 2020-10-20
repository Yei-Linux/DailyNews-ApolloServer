const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    motherLastName: {
        type: String,
        required : true
    },
    phone: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: false,
        default: Date.now()
    },
    deletedAt: {
        type: Date,
        required: false,
        default: null
    }
});

module.exports = mongoose.model('Person',personSchema);