class PageServices {
    // Returns Promise

    static getAll() {
        return AJAX.get("/api/pages/list");
    }

    static update(data) {
        // TODO
        return AJAX.get("/api/pages/update?"+Helpers.JSON2GET(data));
    }

    static create(data) {
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