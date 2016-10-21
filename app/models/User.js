var mongoose = require('mongoose');

var User = {
    name: {
        type: String,
        required: true
    },
    created: {
        type: Date,
    },
    password: {
        type: String,
        required: true
    },
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


    local: {
        email: String,
        password: String
    },
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    twitter: {
        id: String,
        token: String,
        displayName: String,
        username: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    }
}

//
// // generating a hash
// User.methods.generateHash = function (password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// }
//
// // checking if password is valid
// User.methods.validPassword = function (password) {
//     return bcrypt.compareSync(password, this.local.password);
// }


module.exports = mongoose.model('User', User);