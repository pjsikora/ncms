var PageModel = require('../models/Page'),
    fs = require('fs'),
    path = require('path'),
    templatesFolder = __dirname+'/../views/templates',
    filesInDir = require('../common/list-files-in-dir'),
    readLine = require('../common/read-line');


var PageController = {
    list: function (req, res) {
        if (req.method === "GET") {
            var parent_id = req.query.parent_id;
        } else {
            console.log("POST");
            var parent_id = req.body.prarent_id;

        }

        var searchCriteria = parent_id ? {parent_id: parent_id} : {},
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

    listTemplates: function (req, res) {
        var files = filesInDir(templatesFolder, '.pug'),
            finalObj = [];


        files.forEach(function(el) {
            var templateObj = {};

            templateObj['path'] = el;


            readLine(el, 1, function(err, data) {
                templateObj['firstLine'] = data;
            });

            finalObj.push(templateObj);
        });


        res.json(finalObj);
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

    // http://localhost:8888/api/pages/update?_id=58036f648ffa843c22140173&name=NOOOOOOOOWA
    // http://localhost:8888/api/pages/update?_id=5809e3c4fc6e698979a11b23&parent_id=5809b45863afbb80a6509377&is_deleted=1&is_visible=1&name=NOOOOOOOOWA&created=2016-10-21T09%3A45%3A40.032Z
    update: function (req, res) {
        var _gp = req.query, // GET params

            _id = _gp._id,
            parent_id = _gp.parent_id,
            is_deleted = _gp.is_deleted,
            is_visible = _gp.is_visible,
            page_description = _gp.page_description,
            page_keywords = _gp.page_keywords,
            name = _gp.name,
            created = _gp.created,
            order = _gp.order,
            slug = _gp.slug,
            response = {},

            pageModel = {};

        if (typeof parent_id != 'undefined') pageModel['parent_id'] = parent_id;
        if (typeof is_deleted != 'undefined') pageModel['is_deleted'] = is_deleted;
        if (typeof is_visible != 'undefined') pageModel['is_visible'] = is_visible;
        if (typeof page_description != 'undefined') pageModel['page_description'] = page_description;
        if (typeof page_keywords != 'undefined') pageModel['page_keywords'] = page_keywords;
        if (typeof name != 'undefined') pageModel['name'] = name;
        if (typeof created != 'undefined') pageModel['created'] = created;
        if (typeof order != 'undefined') pageModel['order'] = order;
        if (typeof slug != 'undefined') pageModel['slug'] = slug;


        var newPage = new PageModel(pageModel),
            query = {_id: _id};

        PageModel.update(query, {$set: pageModel}, function (err) {
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
    },


    hasChild: function (id) {
        var response = false;

        PageModel.find({parent_id: id}, function (err) {
            if (err) {
                response['status'] = "error";
                response['content'] = err;

                res.json(response);
            } else {
                // response['content'] = nd_pages;
                if (nd_pages.length == 0) {
                    return response;
                }
            }
        });
    }
}

module.exports = PageController;