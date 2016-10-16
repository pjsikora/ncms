var PageModel = require('../models/PageModel');


var PageController = {
    list: function (req, res) {
        var parent_id = req.query.parent_id,
            searchCriteria = parent_id ? {parent_id: parent_id} : {},
            response = {};

        PageModel.find(searchCriteria, function (err, nd_pages) {
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


    // http://localhost:8888/api/pages/create?order=0&name=Third%20level&parent_id=57fba6ef97b6895d80b58bbf
    create: function (req, res) {
        var _gp = req.query, // Get params
            parent_id = _gp.parent_id || 0,
            is_deleted = _gp.is_deleted || 1,
            is_visible = _gp.is_visible || 1,
            page_description = _gp.page_description || '',
            page_keywords = _gp.page_keywords || '',
            is_visible = _gp.is_visible || 1,
            name = _gp.name,
            created = new Date(),
            order = _gp.order,
            slug = _gp.slug,
            response = {};


        var newPage = new PageModel({
            parent_id: parent_id,
            is_deleted: is_deleted,
            is_visible: is_visible,
            name: name,
            created: created,
            order: order,
            page_keywords: page_keywords,
            page_description: page_description,
            slug: slug
        });

        newPage.save(function (err) {
            if (err) {
                response['status'] = "error";
                response['content'] = err;

                res.json(response);
            } else {
                response['status'] = "ok";

                res.json(response);
            }
        });
    },


    read: function (req, res) {
        var _id = req.query._id,
            searchCriteria = _id ? {_id: _id} : {},
            response = {};

        PageModel.find(searchCriteria, function (err, nd_pages) {
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


    update: function (req, res) {

    },


    remove: function (req, res) {
        var response = {};

        PageModel.remove({_id: req.query._id}, function (err) {
            if (err) {
                response['status'] = "error";
                response['content'] = err;

                res.json(response);
            } else {
                response['status'] = "ok";

                res.json(response);
            }
        });
    }
}

module.exports = PageController;