var mongoose = require('mongoose');


var ND_Page__model = {
        id: Number,
        parent_id: String,

        created: Date,

        is_deleted: Boolean,
        is_visible: Boolean,

        name: String
};


module.exports = mongoose.model('ND_Page', ND_Page__model);