var express = require('express'),
    router = express.Router(),
    UserModel = require('../models/strict/UserModel'),
    User = require('../models/User');


var UserController = {
    create: function(req, res) {
        res.json();
    },

    read: function(req, res) {
        if (req.method === "GET") {
            var parent_id = req.query.parent_id;
        } else {
            var parent_id = req.body.prarent_id;
        }

        var searchCriteria = parent_id ? {parent_id: parent_id} : {},
            response = {};

        User.find(searchCriteria, function (err, nd_pages) {
            if (err) {
                response['status'] = "error";
                response['content'] = err;

                res.json(response);
            } else {
                response['status'] = "ok";
                response['content'] = nd_pages;

                res.json(response);
            }
        });
    },

    update: function(req, res) {

    },

    remove: function(req, res) {

    }
}

module.exports = UserController;