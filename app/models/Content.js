var mongoose = require('mongoose'),
    ND_Content__model = require('./strict/ContentModel');

console.log(ND_Content__model.parent_id.required);
console.log(ND_Content__model.parent_id.type.name);
console.log(ND_Content__model.is_deleted.type.name);

module.exports = mongoose.model('Content', ND_Content__model);