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
    it('get() - static method/funciton exists', function () {
        expect(typeof AJAX.get).toBe("function");
    });
    it('post() - static method/funciton exists', function () {
        expect(typeof AJAX.post).toBe("function");
    });
});