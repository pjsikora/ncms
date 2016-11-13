var mongoose = require('mongoose'),
    ND_Content__model = require('./ContentModel');

module.exports = mongoose.model('Content', ND_Content__model);