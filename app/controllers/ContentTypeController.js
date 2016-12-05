var ContentModel = require('../models/strict/ContentModel'),
    PageModel = require('../models/strict/PageModel'),

    fs = require('fs'),
    path = require('path'),
    templatesFolder = __dirname + '/../views/templates',
    filesInDir = require('../common/list-files-in-dir'),
    readLine = require('../common/read-line'),

    typesArray = [ContentModel, PageModel];


var ContentTypeController = {
    list: function (req, res) {
        var finalObject = {};

        for (var index in ContentModel) {
            var attr = ContentModel[index],
                attributes = {}

            for (var idx in attr) {
                var att = attr[idx];

                if (typeof att == "function") att = att.name;

                attributes[idx] = att;
            }

            finalObject[index] = attributes;
        }

        res.json(finalObject);
    },

    read: function(req, res) {
    }


}

module.exports = ContentTypeController;