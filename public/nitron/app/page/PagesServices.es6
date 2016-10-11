class PagesServices {
    // Returns Promise

    static getAll() {
        return getPages();
    }

    static edit(id, data) {

    }

    static create(id, data) {

    }

    // Returns Promise
    static read(id) {
        return ND_AJAX.get("/api/pages/read?_id="+id);
    }

    static delete(id) {
        return ND_AJAX.get("/api/pages/delete?_id="+id);
    }
}