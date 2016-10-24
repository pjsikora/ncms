var assert = require('assert');
var expect = require('expect.js');

var appRoutes = require('../app/routes-api');


describe('App routes', function() {
    describe('Pages routes', function() {
        it('', function() {
            appRoutes['/api/pages/list'].fn({}, {
                json: function(data) {
                    console.log(data);
                    console.log(JSON.stringify(data));

                    expect(typeof data).to.eql(Object);
                }
            });
        });
    });
});