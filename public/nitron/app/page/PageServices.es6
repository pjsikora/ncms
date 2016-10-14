class PageServices {
    // Returns Promise

    static getAll() {
        return AJAX.get("/api/pages/list");
    }

    static update(id, data) {
        // TODO
        return AJAX.get("/api/pages/update  ?");
    }

    static create(data) {
        // console.log("/api/pages/create?"+ Helpers.JSON2GET(data));
        return AJAX.get("/api/pages/create?"+ Helpers.JSON2GET(data));
    }

    // Returns Promise
    static read(id) {
        return AJAX.get("/api/pages/read?_id=" + id);
    }

    static delete(id) {
        return AJAX.get("/api/pages/delete?_id=" + id);
    }
}