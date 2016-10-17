class AdminPanelComponent {
    constructor() {
        var pgl = new PageListComponent();

        document.getElementById("pages").addEventListener("click",  (e) => {
            if (e.target && e.target.nodeName == "LI") {
                this.clickListenerLI(e);
            }

            else if (e.target && e.target.nodeName == "SPAN") {
                if (e.target.dataset.function == "delete") {
                    ModalWindow.show('Are you sure you want to delete page: ' + e.target.parentNode.dataset.name);
                } else if (e.target.dataset.function == "edit") {
                    this.clickListenerSPANEdit(e);
                } else if (e.target.dataset.function == "addPage") {
                    this.clickListenerSPANCreatePage(e)
                } else if (e.target.dataset.function == "addContent") {
                    this.clickListenerSPANCreateContent(e);
                }
            }
        });

    }

    clickListenerLI(e) {
        var elID = e.target.dataset.id;

        Promise
            .all([PageServices.read(elID), ContentServices.read(elID)])
            .then(values => {
                var pageInfo = JSON.parse(values[0]),
                    page = pageInfo.content[0],
                    contents = JSON.parse(values[1]),
                    html = '<h2>Page info</h2>';

                html += `<p>
                        <strong>_id: </strong>${page._id}
                        <br>
                        <strong>_created: </strong>${page._created}
                        <br>
                        <strong>is_deleted: </strong>${page.is_deleted}
                        <br>
                        <strong>is_visible: </strong>${page.is_visible}
                        <br>
                        <strong>name: </strong>${page.name}
                        <br>
                        <strong>order: </strong>${page.order}
                        <br>
                        <strong>parent_id: </strong>${page.parent_id}
                        <br>
                        <strong>slug: </strong>${page.slug}
                        <br>
                        <strong>page_keywords: </strong>${page.page_keywords}
                        <br>
                        <strong>page_description: </strong>${page.page_description}
                        <br>
                        <br>
                        <strong><a href="/pageslug/${page.slug}" target="blank">Go to page by slug</a></strong>
                        <br>
                        <strong><a href="/pageid/${page._id}" target="blank">Go to page by id</a></strong>
                        <br>
                        </p>`;

                // Check status
                if (contents.status == "ok") {
                    if (contents.content.length == 0) {
                        document.getElementById('content').innerHTML = "No content";
                    } else {
                        html += '<h2>Contents</h2><ul>';

                        contents.content.forEach(function (el) {
                            html += `<li>${el.name}
                                    <span class="fa fa-pencil" data-function="edit"></span>
                                    <span class="fa fa-trash-o" data-function="delete"></span>
                                    <span class="fa fa-plus-square-o" data-function="addContent"></span>
                                </li>`;
                        });
                        html += '</ul>';


                    }
                } else {

                }

                document.getElementById('content').innerHTML = html;
            })
    }


    clickListenerSPANCreatePage(e) {
        var id = e.target.parentNode.dataset.id;

        var data = {
            parent_id: id
        }

        document.getElementById('content').innerHTML = PageFormComponent.getHTML(data);
        var button = document.getElementById('createPage');

        button.addEventListener('click', e => {
            console.log('Create element');

            Preloader.show();
            var sendData = {
                name: document.getElementById('name').value,
                parent_id: document.getElementById('parent_id').getAttribute('val'),
                order: 0,
                slug: document.getElementById('slug').value,
                page_description: document.getElementById('page_description').value,
                page_keywords: document.getElementById('page_keywords').value
            }

            console.log(sendData);

            PageServices.create(sendData).then(data => {
                console.log(data);
                Preloader.hide();
            })

        });
    }

    clickListenerSPANEdit(e) {
        var data = {
            parent_id: id
        }

        document.getElementById('content').innerHTML = PageFormComponent.getHTML(data);
        var button = document.getElementById('createPage');

        button.addEventListener('click', e => {
            console.log('Create element');

            Preloader.show();
            var sendData = {
                name: document.getElementById('name').value,
                parent_id: document.getElementById('parent_id').getAttribute('val'),
                order: 0,
                slug: document.getElementById('slug').value,
                page_description: document.getElementById('page_description').value,
                page_keywords: document.getElementById('page_keywords').value
            }


            PageServices.update({_id: id}, sendData).then(data => {
                Preloader.hide();
            })

        });
    }

    clickListenerSPANCreateContent(e) {
        var id = e.target.parentNode.dataset.id;

        var data = {
            page_id: id
        }

        document.getElementById('content').innerHTML = ContentFormComponent.getHTML(data);
        var button = document.getElementById('createPage');

        button.addEventListener('click', e => {
            Preloader.show();

            var sendData = {
                name: document.getElementById('name').value,
                page_id: document.getElementById('page_id').getAttribute('val'),
                order: 0
            }

            console.log(sendData);

            ContentServices.create(sendData).then(data => {
                console.log(data);
                Preloader.hide();
            })

        });
    }
}