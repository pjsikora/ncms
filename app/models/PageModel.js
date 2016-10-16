var mongoose = require('mongoose');


var PageModel = {
    id: Number,

    parent_id: {
        type: String,
        required: true
    },

    order: {
        type: Number,
        required: true
    },
    slug: {
        type:  String
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
    },



    // SEO
    page_author: {
        type: String
    },
    page_description: {
        type: String
    },
    page_keywords: {
        type: String
    },
    page_title: {
        type: String
    }

};


module.exports = mongoose.model('PageModel', PageModel);