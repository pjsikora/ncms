class ContentServices {
    // Returns Promise

    static getAll() {
        return ND_AJAX.get("/api/contents/list");
    }

    static edit(id, data) {

    }

    static create(id, data) {

    }

    // Returns Promise
    static read(id) {
        return ND_AJAX.get("/api/contents/read?page_id="+id);
    }

    static delete(id) {
        return ND_AJAX.get("/api/contents/delete?_id="+id);
    }
}