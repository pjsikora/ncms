var ND_Page = require('../models/ND_Page');


var pages = {
    list: function (req, res) {
        var parent_id = req.query.parent_id,
            searchCriteria = parent_id ? {parent_id: parent_id} : {};

        ND_Page.find(searchCriteria, function (err, nd_pages) {
            if (err) {
                console.log(err);
            } else {
                res.json(nd_pages);
            }
        });
    },

    create: function (req, res) {
        var parent_id = req.query.parent_id || 0,
            is_deleted = req.query.is_deleted || 1,
            is_visible = req.query.is_visible || 1,
            name = req.query.name,
            created = new Date();


        var nd_page = new ND_Page({
            parent_id: parent_id,
            is_deleted: is_deleted,
            is_visible: is_visible,
            name: name,
            created: created
        });

        nd_page.save(function (err) {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                res.json('ok');
            }
        });
    },


    read: function (req, res) {
        var parent_id = req.query.parent_id,
            searchCriteria = parent_id ? {parent_id: parent_id} : {};

        ND_Page.find(searchCriteria, function (err, nd_pages) {
            if (err) {
                console.log(err);
            } else {
                res.json(nd_pages);
            }
        });
    },


    update: function (req, res) {

    },


    remove: function (req, res) {
        ND_Page.remove({_id: req.query._id}, function (err) {
            if (err) {
                res.json(err);
            }
            else {
                res.json("OK");
            }
        });
    }
}

module.exports = pages;