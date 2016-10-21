var express = require('express'),
    router = express.Router(),
    pug = require('pug'),

    ND_Content = require('../models/Content'),
    ND_Page = require('../models/Page');

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
        ND_Page.findOne({_id: req.params.page_id}, function (err, page) {
            if (err) {
                res.render('page', {title: 'error', message: 'no content'})
            } else {
                if (page == null) {
                    res.render('404');
                } else {

                    ND_Content.find({page_id: page._id}, function (err, content) {
                        res.render('page', {
                            seo_title: page._id,
                            page_id : page._id,
                            title: page.slug,
                            content: content,
                            page_keywords: page.page_keywords,
                            page_description: page.page_description,
                        });
                    })
                }





            }
        })
    },

    renderPageBySlug: function (req, res) {
        ND_Page.findOne({slug: req.params.slug}, function (err, page) {
            if (err) {
                res.render('page', {title: 'error', message: 'no page/content'})
            } else {
                if (page == null) {
                    res.render('404');
                }

                ND_Content.find({page_id: page._id}, function (err, content) {
                    res.render('page', {
                        seo_title: page._id,
                        page_id : page._id,
                        title: req.params.slug,
                        content: content,
                        page_keywords: page.page_keywords,
                        page_description: page.page_description,
                    });
                })


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