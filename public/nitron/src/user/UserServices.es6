class UserServices {
    // Returns Promise

    static getAll() {
        return AJAX.get("/api/user/list");
    }

    static update(data) {
        // TODO
        return AJAX.get("/api/user/update?"+Helpers.JSON2GET(data));
    }

    static create(data) {
        return AJAX.get("/api/user/create?"+ Helpers.JSON2GET(data));
    }

    // Returns Promise
    static read(id) {
        return AJAX.get("/api/user/read?_id=" + id);
    }

    static remove(id) {
        return AJAX.get("/api/user/remove?_id=" + id);
    }
}