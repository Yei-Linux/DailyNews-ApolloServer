const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const newSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    urlImage: {
        type: String,
        required: true 
    },
    url: {
        type: String,
        trim: true,
        required: true
    },
    postDate: {
        type: Date,
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

newSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('New',newSchema);