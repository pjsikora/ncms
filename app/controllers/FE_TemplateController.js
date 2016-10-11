var express = require('express'),
    router = express.Router(),
    pug = require('pug');

var ND_Content = require('../models/ND_Content');

var FE_TemplateController = {
    renderHomepage: function (req, res) {
        ND_Content.find({page_id: '57faa4d8b8b62ce780978cbc'}, function (err, content) {
            if (err) {
                res.render('homepage', {title: 'error', message: 'no content'})
            } else {

                // var output ='';
                // content.forEach(function(el) {
                //     output += '<div>'+el.content+'</div>';
                // });

                res.render('homepage', {title: 'Hey', message: content});
            }
        });


    }
}

module.exports = FE_TemplateController;