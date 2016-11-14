var model = {
    // id: String,

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
    content: {
        type: String
    },
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
        default: true
    },
    name: {
        type: String,
        required: true
    }
};

module.exports = model;