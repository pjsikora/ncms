var mongoose = require('mongoose');


var ConfigModel = {
    key: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
};


module.exports = mongoose.model('Config', ConfigModel);