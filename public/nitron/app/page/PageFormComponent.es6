class PageFormComponent {
    static getHTML(data) {
        if (typeof data != 'undefined') {
            console.log("data exists");
            console.log(data);

            var parent_id = data.parent_id
        }



        var form = `<h3>Page form</h3>
                <input type="text" class="hidden" id="parent_id" val="${parent_id}">
                <input type="text" placeholder="Name" value="" id="name">
                <input type="text" placeholder="SEO Keywords" value="" id="page_keywords">
                <input type="text" placeholder="SEO Description" value="" id="page_description">
                <input type="text" placeholder="slug" value="" id="slug">
                <input type="checkbox" id="is_visible"><label for="is_visible">Visible</label>
                <select name="" id="">
                
                </select>
            <button id="createPage">Create page</button>
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