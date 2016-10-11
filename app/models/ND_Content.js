var mongoose = require('mongoose');

var ND_Content__model = {
        id: String,
        parent_id: Number,
        created: Date,
        content: String,
        page_id: String,

        is_deleted: Boolean,
        is_visible: Boolean,

        name: String
};


// module.exports = {
//         model: ND_Content__model
// }
exports.ND_Content__model = ND_Content__model;
exports.qrwa = "qrwa";

module.exports = mongoose.model('ND_Content', ND_Content__model);