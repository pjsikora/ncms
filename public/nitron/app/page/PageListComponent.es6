class PageListComponent {
    constructor(element) {
        console.log('PageListComponent - constructor()');

        PagesServices.getAll().then(data => {
            // var pgl = new PageListComponent();

            this.draw(JSON.parse(data), document.getElementById('pages'));
        });
    }

    draw(data, element) {
        console.log('PageListComponent - getHTML()');
        var html = "<ul>";

        data.forEach(function (el) {
            html += `<li 
                data-parent="${el.parent_id}" 
                data-is-deleted="${el.is_deleted}" 
                data-is-visible="${el.is_visible}" 
                data-id="${el._id}"
                data-name="${el.name}">
                ${el.name} <span class="fa fa-pencil" data-function="edit"></span><span class="fa fa-trash-o" data-function="delete"></span>
                </li>`;
        });

        html += "</ul>"

        element.innerHTML = html;
        // return html;
    }

}