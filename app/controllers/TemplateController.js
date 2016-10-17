var express = require('express'),
    router = express.Router(),
    pug = require('pug'),

    ND_Content = require('../models/ContentModel'),
    ND_Page = require('../models/PageModel');

var TemplateController = {
    renderHomepage: function (req, res) {
        ND_Content.find({page_id: '57faa4d8b8b62ce780978cbc'}, function (err, content) {
            if (err) {
                res.render('homepage', {title: 'error', message: 'no content'})
            } else {
                var seoObj = {
                    keywords: content.page_keywords || '',
                    description: content.page_description || ''
                };

                res.render('homepage', {
                    title: 'Hey',
                    message: content,
                    seo: seoObj
                });
            }
        });
    },

    renderPage: function (req, res) {
        ND_Content.find({page_id: req.query.page_id}, function (err, page) {
            if (err) {
                res.render('page', {title: 'error', message: 'no content'})
            } else {
                ND_Content.find({page_id: req.query.id}, function (err, content) {

                    res.render('page', {
                        title: req.params.page_id,
                        content: req.content,
                        seo_keywords: "keywords",
                        seo_description: "desc"
                    });
                })


            }
        })
    },

    renderPageBySlug: function (req, res) {
        ND_Content.findOne({slug: req.query.slug}, function (err, page) {
            if (err) {
                res.render('page', {title: 'error', message: 'no page/content'})
            } else {
                // ND_Content.find({page_id: req.query.id}, function (err, content) {

                    res.render('page', {
                        seo_title: page.page_id,
                        title: req.params.slug,
                        content: req.content,
                        page_keywords: page.page_keywords,
                        page_description: page.page_description,
                    });
                // })


            }
        })
    },

    getContents: function (page_id) {
        // var page_id = req.query('page_id');

        ND_Content.find({page_id: page_id}, function (err, content) {
            if (err) {
                return {status: "error"}
            } else {
                return {status: "ok", content: content}
            }
        });
    }
}

module.exports = TemplateController;