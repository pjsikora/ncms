class PageFormComponent {
    static getHTML(data) {
        if (typeof data != 'undefined') {
            console.log("data exists");
            console.log(data);

            var parent_id = data.parent_id
        }



        var form = `<input type="text" class="hidden" id="parent_id" val="${parent_id}">
                <input type="text" placeholder="Name" value="" id="name">
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