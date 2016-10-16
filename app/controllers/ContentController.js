var ContentModel = require('../models/ContentModel');

var ContentController = {
    list: function (req, res) {
        var page_id = req.query.page_id,
            searchCriteria = page_id ? {page_id: page_id} : {};

        ContentModel.find(searchCriteria, function (err, nd_pages) {
            if (err) {
                console.log(err);
            } else {
                console.log(nd_pages);

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
            order = req.query.order || 0,

            name = req.query.name,
            created = new Date(),
            response = {};

        console.log('KUUUURWAAA');
        var newContent = new ContentModel({
            parent_id: parent_id,
            content: content,
            page_id: page_id,

            is_deleted: is_deleted,
            is_visible: is_visible,
            order: order,

            name: name
        });
        console.log(JSON.stringify(newContent));

        newContent.save(function (err) {
            if (err) {
                response['status'] = "error";
                response['content'] = err;

                res.json(err);
            } else {
                response['status'] = "ok";

                res.json(response);
            }
        });
    },

    read: function (req, res) {
        var page_id = req.query.page_id,
            response = {};

        ContentModel.find({ page_id: page_id}, function(err, contents) {
            if (err) {
                response['status'] = "error";
                response['content'] = err;

                res.json(response);
            } else {
                response['status'] = "ok";
                response['content'] = contents;

                res.json(response);
            }
        });
    },

    update: function (req, res) {
    },

    remove: function (req, res) {
    }
}

module.exports = ContentController;