class PagesServices {
    // Returns Promise

    static getAll() {
        return AJAX.get("/api/pages/list");
    }

    static update(id, data) {
        // TODO
    }

    static create(id, data) {
        // TODO
        return AJAX.get("/api/pages/create?");
    }

    // Returns Promise
    static read(id) {
        return AJAX.get("/api/pages/read?_id="+id);
    }

    static delete(id) {
        return AJAX.get("/api/pages/delete?_id="+id);
    }
}