class PageListComponent {
    constructor(element) {
        console.log('PageListComponent - constructor()');

        this.fetchData();
    }

    draw(data, element) {
        console.log('PageListComponent - getHTML()');
        var html = "<ul>",
            elArray = data;

        console.log(data.length);


        elArray.forEach(function (el, index) {
            html += `<li 
                    data-parent="${el.parent_id}" 
                    data-is-deleted="${el.is_deleted}" 
                    data-is-visible="${el.is_visible}" 
                    data-id="${el._id}"
                    data-name="${el.name}">
                    ${el.name} 
                    <span class="fa fa-pencil" data-function="edit"></span>
                    <span class="fa fa-trash-o" data-function="delete"></span>
                    <ul data-childrenof="${el._id}"></ul>
                    </li>`;
        });

        html += "</ul>"

        element.innerHTML = html;
    }

    createList(data) {
        var list = {},
            _self = this,
            finalHTML = '';

        data.forEach(function (el) {
            console.log(el.parent_id);
            if (typeof list[el.parent_id] == "undefined") {
                list[el.parent_id] = [];
            }
            list[el.parent_id].push(el);
        });

        console.log(list);
        console.log();

        list[0].forEach(function (el) {
            finalHTML += _self.createElement(el);
        });

        finalHTML = DOM.domify(finalHTML);


        delete list[0];
        console.log(list);



        for (var key in list) {
            console.log(key);
            console.log(list[key]);

            var inner = '';
            list[key].forEach(function (el) {
                console.log(el);
                inner += _self.createElement(el);
            });

            // inner = DOM.domify(inner);

            console.log(inner);
        }

        return list;
    }


    createElement(el) {
        return `<li 
                    data-parent="${el.parent_id}" 
                    data-is-deleted="${el.is_deleted}" 
                    data-is-visible="${el.is_visible}" 
                    data-id="${el._id}"
                    data-name="${el.name}">
                    ${el.name} 
                    <span class="fa fa-pencil" data-function="edit"></span>
                    <span class="fa fa-trash-o" data-function="delete"></span>
                    <ul data-childrenof="${el._id}"></ul>
                    </li>`
    }


    fetchData() {
        PagesServices.getAll().then(data => {
            var response = JSON.parse(data);

            if (response.status == "ok") {
                this.draw(response.content, document.getElementById('pages'));
                this.createList(response.content);
            } else {
                throw response.content;
            }
        });
    }

}