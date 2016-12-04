var ConfigModel = require('../models/Config');

var ConfigController = {
    list: function (req, res) {
        var key = req.query.key,
            searchCriteria = key ? {key: key} : {};

        ConfigModel.find(searchCriteria, function (err, config) {
            if (err) {
                console.log(err);
            } else {
                console.log(config);

                res.json(config);
            }
        });
    },

    create: function (req, res) {
        var key = req.query.key,
            value = req.query.value,
            type = req.query.type,
            // created = new Date(),

            response = {};

        ConfigModel.find({key: key}, function(err, config) {
            if (err) {
                console.log(err);
            } else {
                console.log(config);

            }
        })

        var newContent = new ConfigModel({
            key: key,
            value: value

            // is_deleted: is_deleted,
            // is_visible: is_visible,
            // order: order,
            //
            // name: name
        });

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
        // var page_id = req.query.page_id,
        //     response = {};
        //
        // ContentModel.find({ page_id: page_id}, function(err, contents) {
        //     if (err) {
        //         response['status'] = "error";
        //         response['content'] = err;
        //
        //         res.json(response);
        //     } else {
        //         response['status'] = "ok";
        //         response['content'] = contents;
        //
        //         res.json(response);
        //     }
        // });
    },

    update: function (req, res) {
        var response = {};
        res.json(response);
    },

    remove: function (req, res) {
        var response = {};
        res.json(response);
    }
}

module.exports = ConfigController;