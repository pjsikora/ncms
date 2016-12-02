// class ContentServices {
//   // Returns Promise
//   static getAPIUrl() {
//     return 'http://localhost:8081'
//   }
//
//   static getAll() {
//     return AJAX.get("/api/contents/list");
//   }
//
//   static edit(id, data) {}
//
//   static create(data) {
//     return AJAX.get("/api/contents/create?" + Helpers.JSON2GET(data));
//   }
//
//   // Returns Promise
//   static read(id) {
//     return AJAX.get("/api/contents/read?page_id=" + id);
//   }
//
//   static delete(id) {
//     return AJAX.get("/api/contents/delete?_id=" + id);
//   }
// }
//
//
// import VueResource from 'vue-resource'

class PageServices {
  // Returns Promise
  static getAPIUrl () {
    return 'http://localhost:8888'
  }

  static getAll () {
    return this.$http.get('http://localhost:8888/api/pages/list')
    // return AJAX.get("/api/pages/list");
  }

  // static update (data) {
  //   // TODO
  //   return AJAX.get("/api/pages/update?" + Helpers.JSON2GET(data))
  // }
  //
  // static create (data) {
  //   return AJAX.get("/api/pages/create?" + Helpers.JSON2GET(data))
  // }
  //
  // // Returns Promise
  // static read (id) {
  //   return AJAX.get("/api/pages/read?_id=" + id)
  // }
  //
  // static remove (id) {
  //   return AJAX.get("/api/pages/remove?_id=" + id)
  // }
}
