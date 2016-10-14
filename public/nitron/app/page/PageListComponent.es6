class PageListComponent {
    constructor() {
        console.log('PageListComponent - constructor()');

        this.fetchData();
    }

    createElement(el) {
        var children = "";

        // Remember that element can have children
        if (typeof el.children != 'undefined') {
            el.children.forEach((el) => {
                children += this.createElement(el);
            })
        }

        return `<li 
                    data-parent="${el.parent_id}" 
                    data-is-deleted="${el.is_deleted}" 
                    data-is-visible="${el.is_visible}" 
                    data-id="${el._id}"
                    data-name="${el.name}">
                    ${el.name} 
                    <span class="fa fa-pencil" data-function="edit"></span>
                    <span class="fa fa-trash-o" data-function="delete"></span>
                    <span class="fa fa-plus" data-function="addPage"></span>
                    <span class="fa fa-plus-square-o" data-function="addContent"></span>
                    <ul data-childrenof="${el._id}">${children}</ul>
                    </li>`
    }

    draw(data, element) {
        var html = "<ul>",
            elArray = data.children;

        for (var key in elArray) {
            html += this.createElement(elArray[key]);
        }

        html += "</ul>"

        element.innerHTML = html;
    }


    createList(data) {
        var list = data,
            rootNode = { children: []},
            nodeList = { 0 : rootNode};

        for (var i = 0; i < list.length; i++) {
            nodeList[data[i]._id] = data[i];

            if (typeof nodeList[data[i].parent_id].children == "undefined") {
                nodeList[data[i].parent_id]['children'] = [];
            }

            nodeList[data[i].parent_id].children.push(nodeList[data[i]._id]);
        }

        return rootNode;
    }


    fetchData() {
        PageServices.getAll().then(data => {
            var response = JSON.parse(data);

            if (response.status == "ok") {
                var list = this.createList(response.content),
                    $el = document.getElementById('pages');

                this.draw(list, $el);
            } else {
                throw response.content;
            }
        });
    }

}