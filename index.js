var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');

app.use(morgan('combined'));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/nitron');


var ND_Page = require('./models/ND_Page.js');
var ND_Content = require('./models/ND_Content.js');


app.use(express.static('public'));


// http://localhost:8888/api/pages/list
// http://localhost:8888/api/pages/list?parent_id=0
app.get('/api/pages/list', function (req, res) {
    var parent_id = req.params.parent_id,
        searchCriteria = parent_id ? {parent_id: parent_id} : {};

    // console.log(parent_id);
    // console.log(JSON.stringify(searchCriteria));

    ND_Page.find(searchCriteria, function (err, nd_pages) {
        if (err) {
            console.log(err);
        } else {
            res.json(nd_pages);
        }
    });
});


// http://localhost:8888/api/pages/add?parent_id=57faa4d8b8b62ce780978cbc&name=Second level
// http://localhost:8888/api/pages/add?parent_id=57faa4d8b8b62ce780978cbc&name=Third level
app.get('/api/pages/add', function (req, res) {
    var parent_id = req.params.parent_id || 0,
        is_deleted = req.params.is_deleted || 1,
        is_visible = req.params.is_visible || 1,
        name = req.params.name,
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

});


// TODO
app.get('/api/pages/edit', function (req, res) {
    console.log(ND_Content.ND_Content__model);
    console.log(ND_Content.qrwa);
    res.json(ND_Content.ND_Content__model);
});

// http://localhost:8888/api/pages/read?_id=57fb5d5a4f751a1ebf30ef83
app.get('/api/pages/read', function (req, res) {
    var _id = req.query._id,
        searchCriteria = {_id: _id};

    ND_Page.find(searchCriteria, function (err, nd_pages) {
        if (err) {
            res.json(err);
        } else {
            res.json(nd_pages);
        }
    });
});


// TODO
app.get('/api/pages/delete', function (req, res) {
    ND_Page.remove({ _id: req.query._id }, function(err) {
        if (err) {
            res.json(err);
        }
        else {
            res.json("OK");
        }
    });
});


app.get('/api/contents/list', function (req, res) {
    ND_Content.find({}, function (err, nd_contents) {
        if (err) {
            console.log(err);
        } else {
            res.json(nd_contents);
        }
    });
});


app.listen(8888, function () {
    console.log('localhost:8888!');
});