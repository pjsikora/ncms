class ContentFormComponent {
    static getHTML(data) {
        if (typeof data != 'undefined') {
            console.log("data exists");
            console.log(data);

            var page_id = data.page_id
        }



        var form = `<h3>Content form</h3>
                <input type="text" class="hidden" id="page_id" val="${page_id}">
                <input type="text" placeholder="Name" value="" id="name">
                <input type="checkbox" id="is_visible"><label for="is_visible">Visible</label>
                <select name="" id="">
                
                </select>
            <button id="createPage">Create content</button>
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