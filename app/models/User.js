var mongoose = require('mongoose');

var User = {
    name: {
        type: String,
        required: true
    },
    created: {
        type: Date,
    },
    password: {
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

module.exports = mongoose.model('User', User);