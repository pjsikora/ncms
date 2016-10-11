var ND_Content = require('../models/ND_Content');

var contents = {
    list: function (req, res) {
        var page_id = req.query.page_id,
            searchCriteria = page_id ? {page_id: page_id} : {};

        ND_Content.find(searchCriteria, function (err, nd_pages) {
            if (err) {
                console.log(err);
            } else {
                res.json(nd_pages);
            }
        });
    },

    create: function (req, res) {
        var parent_id = req.query.parent_id || 0,
            content = req.query.content || '',
            page_id = req.query.page_id || '',
            is_deleted = req.query.is_deleted || 1,
            is_visible = req.query.is_visible || 1,

            name = req.query.name,
            created = new Date();


        var nd_content = new ND_Content({
            parent_id: parent_id,
            content: content,
            page_id: page_id,

            is_deleted: is_deleted,
            is_visible: is_visible,

            name: name
        });

        nd_content.save(function (err) {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                res.json('ok');
            }
        });
    },

    read: function (req, res) {
        var page_id = req.query.page_id;

        ND_Content.find({ page_id: page_id}, function(err, contents) {
            if (err) {
                res.json(err);
            } else {
                res.json(contents);
            }
        });

        // res.json( page_id );
    },

    update: function (req, res) {
    },

    remove: function (req, res) {
    }
}

module.exports = contents;