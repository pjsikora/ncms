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

module.exports = User;