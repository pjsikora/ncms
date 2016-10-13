class PageListComponent {
    constructor(element) {
        console.log('PageListComponent - constructor()');

        this.fetchData();
    }

    createElement(el) {
        if (el.children.length !=0) {
            console.log('siup');
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
                    <ul data-childrenof="${el._id}">${el._id}</ul>
                    </li>`
    }

    draw(data, element) {
        var html = "<ul>",
            elArray = data;

        for (var key in elArray) {
            html += this.createElement(elArray[key]);
        }


        // elArray.forEach( (el, index) => {
        //     html += this.createElement(el);
        // });

        html += "</ul>"

        element.innerHTML = html;
    }


    createList(data) {
        var list = data,
            groupedArrayOfChildren = [];


        console.log(list);
        // Check which elements has parent other than and create element
        // in groupedArrayOfChildren with key equali parent_id
        list.forEach(function (el) {
            if (typeof groupedArrayOfChildren[el.parent_id] == "undefined") {
                groupedArrayOfChildren[el.parent_id] = [];
            }
            groupedArrayOfChildren[el.parent_id].push(el);
        });

        //
        list.forEach(function (el) {
            if (typeof groupedArrayOfChildren[el._id] != "undefined") {
                el['children'] = groupedArrayOfChildren[el._id];
            }
        });

        // Remove duplicates from main list
        list.forEach(function (el, index) {
            if (el.parent_id != "0") {
                delete list[index];
            }
        });

        console.log(list);

        return list;
    }


    fetchData() {
        PagesServices.getAll().then(data => {
            var response = JSON.parse(data);

            if (response.status == "ok") {
                console.log(response);
                var list = this.createList(response.content),
                    $el = document.getElementById('pages');

                this.draw(response, $el);
            } else {
                throw response.content;
            }
        });
    }

}