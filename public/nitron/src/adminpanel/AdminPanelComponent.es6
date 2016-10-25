class AdminPanelComponent {
    constructor() {
        this.pgl = new PageListComponent();

        document.getElementById("pages").addEventListener("click", (e) => {
            console.log(e.target.parentNode.dataset.id);

            if (e.target && e.target.nodeName == "LI") {
                this.clickListenerLI(e);
            } else if (e.target && e.target.nodeName == "SPAN") {
                if (e.target.dataset.function == "delete") {
                    ModalWindow.show('Are you sure you want to delete page: ' + e.target.parentNode.dataset.name);
                } else if (e.target.dataset.function == "deleteHard") {
                    this.clickHardDelete(e);
                } else if (e.target.dataset.function == "edit") {
                    this.clickListenerSPANEditPage(e);
                } else if (e.target.dataset.function == "addPage") {
                    this.clickListenerSPANCreatePage(e)
                } else if (e.target.dataset.function == "addRootPage") {
                    this.clickListenerSPANCreateRoot(e)
                } else if (e.target.dataset.function == "addContent") {
                    this.clickListenerSPANCreateContent(e);
                }
            }
        });

    }
    //
    // clickHardDelete(e) {
    //
    //     console.log(e.currentTarget);
    // }

    clickHardDelete(e) {
        let windowContent = 'Are you sure you want to delete page: ' + e.target.parentNode.dataset.name,
            mw = new ModalWindow(windowContent);

        mw.show();
        // ModalWindow.show('Are you sure you want to delete page: ' + e.target.parentNode.dataset.name, this.clickHardDelete, e);

        // var self = this;
        //
        // PageServices
        //     .remove(e.target.parentNode.dataset.id)
        //     .then(data => {
        //         var data = JSON.parse(data),
        //             status = data.status;
        //
        //         if (status == 'ok') {
        //             let mw = new ModalWindow();
        //             mw.show();
        //             ModalWindow.hide();
        //             this.pgl.fetchData();
        //
        //             // console.log(this)
        //             // console.log(self)
        //         } else {
        //
        //         }
        //         console.log(data);
        //     });
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
                            console.log(el);

                            html += `<li>Name: ${el.name}<br>Content: ${el.content}
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
                PageServices.update(sendData).then(data => {
                    this.pgl.fetchData();
                    Preloader.hide();
                })
            })

        });
    }

    clickListenerSPANCreateRoot(e) {
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
                parent_id: 0,
                order: 0,
                slug: document.getElementById('slug').value,
                page_description: document.getElementById('page_description').value,
                page_keywords: document.getElementById('page_keywords').value
            }

            console.log(sendData);


            PageServices.create(sendData).then(data => {
                PageServices.update(sendData).then(data => {
                    this.pgl.fetchData();
                    Preloader.hide();
                })
            })

        });
    }


    clickListenerSPANEditPage(e) {
        var id = e.target.parentNode.dataset.id;

        PageServices
            .read(id)
            .then(data => {
                data = JSON.parse(data);

                if (data.status == "ok") {
                    data = data.content[0];

                    document.getElementById('content').innerHTML = PageFormComponent.getHTML(data);
                    var button = document.getElementById('createPage');

                    button.addEventListener('click', e => {
                        Preloader.show();
                        var sendData = {
                            _id: id,
                            name: document.getElementById('name').value,
                            parent_id: document.getElementById('parent_id').getAttribute('val'),
                            order: 0,
                            slug: document.getElementById('slug').value,
                            page_description: document.getElementById('page_description').value,
                            page_keywords: document.getElementById('page_keywords').value
                        }


                        PageServices.update(sendData).then(data => {
                            this.pgl.fetchData();
                            Preloader.hide();
                        })

                    });
                }


            })


    }


    clickListenerSPANCreateContent(e) {
        var id = e.target.parentNode.dataset.id,
            data = {
                page_id: id
            },
            cf = new ContentFormComponent(document.getElementById('content'),data);

        var data = {
            page_id: id
        }

        // document.getElementById('content').appendChild(DOM.domify(cf.getHTML(data)));

        cf.init();

        var button = document.getElementById('createPage');

        button.addEventListener('click', e => {
            Preloader.show();

            var sendData = {
                name: document.getElementById('contentform__name').value,
                page_id: document.getElementById('contentform__page_id').getAttribute('val'),
                content: document.getElementById('contentform__content').value,
                order: 0
            }

            ContentServices.create(sendData).then(data => {
                Preloader.hide();
            })

        });
    }
}