var mongoose = require('mongoose');


var ND_Page__model = {
    id: Number,

    parent_id: {
        type: String,
        required: true
    },

    order: {
        type: Number,
        required: true
    },
    created: Date,

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


module.exports = mongoose.model('ND_Page', ND_Page__model);