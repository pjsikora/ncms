var mongoose = require('mongoose');

var ND_Content__model = {
    id: String,
    parent_id: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        // required: true
    },
    order: {
        type: Number,
        required: true
    },
    content: String,
    page_id: {
        type: String,
        required: true
    },
    is_deleted: {
        type: Number,
        derault: false
    },
    is_visible: {
        type: Number,
        derault: true
    },
    name: {
        type: String,
        required: true
    }
};

exports.ND_Content__model = ND_Content__model;

module.exports = mongoose.model('Content', ND_Content__model);