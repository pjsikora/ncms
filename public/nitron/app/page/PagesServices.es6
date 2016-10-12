class PagesServices {
    // Returns Promise

    static getAll() {
        return AJAX.get("/api/pages/list");
    }

    static edit(id, data) {

    }

    static create(id, data) {

    }

    // Returns Promise
    static read(id) {
        return AJAX.get("/api/pages/read?_id="+id);
    }

    static delete(id) {
        return AJAX.get("/api/pages/delete?_id="+id);
    }
}