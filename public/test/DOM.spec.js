describe('DOM', function () {
    it('domify() - static method/funciton exists', function () {

        expect(typeof DOM.domify).toBe("function");
    });

    it('domify() - returns object', function () {
        var htmlString = "<div>element</div>",
            DOM_domifyReturn = DOM.domify(htmlString);

        expect(typeof DOM_domifyReturn).toBe("object");
    });

    it('domify() - not returns string', function () {
        var htmlString = "<div>element</div>",
            DOM_domifyReturn = DOM.domify(htmlString);

        expect(typeof DOM_domifyReturn).not.toBe("string");
    });
});


describe('AJAX', function () {
    it('makeRequest() - static method/funciton exists', function () {
        expect(typeof AJAX.makeRequest).toBe("function");
    });
    it('makeRequest() - returns object', function () {
        expect(typeof AJAX.makeRequest("dd", 'url')).toBe("object");
    });
    it('get() - static method/funciton exists', function () {
        expect(typeof AJAX.get).toBe("function");
    });
    it('post() - static method/funciton exists', function () {
        expect(typeof AJAX.post).toBe("function");
    });
});


describe('BE -> AJAX communication', function () {
    beforeEach(function () {
        jasmine.Ajax.install();
    });
    afterEach(function () {
        jasmine.Ajax.uninstall();
    });

    it('get() - static method/funciton exists', function () {
        expect(typeof AJAX.get).toBe("function");
    });
    it('post() - static method/funciton exists', function () {
        expect(typeof AJAX.post).toBe("function");
    });
});


describe('BE', function () {
    beforeEach(function () {
        jasmine.Ajax.install();
    });
    afterEach(function () {
        jasmine.Ajax.uninstall();
    });

    it("specifying response when you need it", function () {
        var doneFn = jasmine.createSpy("success");
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function (args) {
            if (this.readyState == this.DONE) {
                // console.log(this.responseText);
                doneFn(this.responseText);
            }
        };

        xhr.open("GET", "/api/pages/list");
        xhr.send();
        // console.log('-------------------')
        // console.log(jasmine.Ajax.requests);
        // console.log(jasmine.Ajax.requests.mostRecent());
        // console.log(jasmine.Ajax.requests.mostRecent().url);

        expect(jasmine.Ajax.requests.mostRecent().url).toBe('/api/pages/list');
        expect(doneFn).not.toHaveBeenCalled();

        console.log(doneFn);

        // jasmine.Ajax.requests.mostRecent().respondWith({
        //     "status": 200,
        //     "contentType": 'text/plain',
        // "responseText": 'awesome response'
        // });
        // expect(doneFn).toHaveBeenCalledWith('awesome response');
    });

    it("allows responses to be setup ahead of time", function () {
        var doneFn = jasmine.createSpy("success");
        jasmine.Ajax.stubRequest('/another/url').andReturn({
            "responseText": 'immediate response'
        });

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function (args) {
            if (this.readyState == this.DONE) {
                doneFn(this.responseText);
            }
        };

        xhr.open("GET", "/another/url");
        xhr.send();

        expect(doneFn).toHaveBeenCalledWith('immediate response');
    });
});