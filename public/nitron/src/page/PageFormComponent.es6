class PageFormComponent {
  static getHTML(data) {
    if (typeof data != 'undefined') {
      console.log("data exists");
      console.log(data);

      var parent_id = data.parent_id
    }


    var form = `<h3>Page form</h3>
                <input type="text" class="hidden" id="parent_id" val="${parent_id}">
                <input type="text" placeholder="Name" value="${(typeof data.name == 'undefined') ? '' : data.name}" id="name">
                <input type="text" placeholder="SEO Keywords" value="${(typeof data.page_keywords == 'undefined') ? '' : data.page_keywords}" id="page_keywords">
                <input type="text" placeholder="SEO Description" value="${(typeof data.page_description == 'undefined') ? '' : data.page_description}" id="page_description">
                <input type="text" placeholder="slug" value="${(typeof data.slug == 'undefined') ? '' : data.slug}" id="slug">
                <input type="checkbox" id="is_visible"><label for="is_visible">Visible</label>
                <select name="" id="">
                
                </select>
            <button id="createPage">Submit</button>
        `;

    return form;
  }

  createPage(data) {

  }

  updatePage(data) {

  }

  clearForm() {
  }

  sendData() {
  }


}