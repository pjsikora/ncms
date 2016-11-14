var model = {
    // id: Number,

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

    created: {
        type: Date
    },

    is_deleted: {
        type: Number,
        default: false
    },

    is_visible: {
        type: Number,
        default: true
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

module.exports = model;