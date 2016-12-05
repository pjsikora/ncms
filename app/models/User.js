var User = require('./strict/UserModel'),
    mongoose = require('mongoose');

module.exports = mongoose.model('User', User);