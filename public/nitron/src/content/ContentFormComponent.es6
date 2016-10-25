class ContentFormComponent {
    constructor(element, data) {
        console.log(data);


        var form = this.getHTML(data);


        element.innerHTML = form;
    }

    init() {
        // document.querySelectorAll('[data-element]').addEventListener('click', e => this.clickListener);
        var buttons = document.querySelectorAll('.elements')
        console.log(buttons);



        buttons[0].addEventListener('click', () => this.clickListener);
    }

    getHTML(data) {
        console.log('-------------');
        console.log('-------------');
        console.log(data);
        // if (typeof data != 'undefined') {
        //     console.log("data exists");
        //     console.log(data);
        //
        //     var page_id = data.page_id;
        // }
        // else {
        //     data.name = undefed;
        // }



        var form = `<h3>Content form</h3>
                <input type="text" class="hidden" id="contentform__page_id" val="${(typeof data.page_id == 'undefined') ? '' : data.page_id}">
                <input type="text" placeholder="Name" value="${(typeof data.name == 'undefined') ? '' : data.name}" id="contentform__name">
                
                <div class="elements">
                    <button data-element="div">Div</button>
                    <button data-element="div">Div</button>
                    <button data-element="div">Div</button>
                    <button data-element="div">Div</button>
                </div>
                
                <textarea name="" id="contentform__content" cols="30" rows="10">${(typeof data.content == 'undefined') ? '' : data.content}</textarea>
                <input type="checkbox" id="is_visible"><label for="is_visible">Visible</label>
                <select name="" id="">
                
                </select>
                
            <button id="createPage">Create content</button>
        `;

        return form;
    }

    clickListener(e) {
        console.log('click');
    }

}