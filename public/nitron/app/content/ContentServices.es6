class ContentServices {
    // Returns Promise

    static getAll() {
        return AJAX.get("/api/contents/list");
    }

    static edit(id, data) {

    }

    static create(id, data) {

    }

    // Returns Promise
    static read(id) {
        return AJAX.get("/api/contents/read?page_id="+id);
    }

    static delete(id) {
        return AJAX.get("/api/contents/delete?_id="+id);
    }
}