"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
    // var router = new Router(
    //     { "ding/dong": function() {console.log('siup')}},
    //     {}
    //     );

    var pgl = new PageListComponent(); // List page

    var sendData = {
        name: 'uno',
        parent_id: 'dong',
        order: 0
    }

    Helpers.JSON2GET(sendData);

    document.getElementById("pages").addEventListener("click", function (e) {
        if (e.target && e.target.nodeName == "LI") {
            var elID = e.target.dataset.id;

            ContentServices.read(elID).then(data => {
                console.log(data);
                var response = JSON.parse(data);

                // Check status
                if (response.status == "ok") {
                    if (response.content.length == 0) {
                        document.getElementById('content').innerHTML = "No content";
                    } else {
                        var html = '<ul>';

                        response.content.forEach(function (el) {
                            html += `<li>${el.name}<span></span></li>`;
                        });
                        html += '</ul>';

                        document.getElementById('content').innerHTML = html;
                    }
                } else {

                }
            });
        }




        if (e.target && e.target.nodeName == "SPAN") {

            var id = e.target.parentNode.dataset.id,
                name = e.target.parentNode.dataset.name;


            if (e.target.dataset.function == "delete") {
                console.log('remove');
                console.log(id);
                ModalWindow.show('Are you sure you want to delete page: ' + name);

            } else if (e.target.dataset.function == "edit") {
                console.log('addPage');
                console.log(id);

                var data = {
                    _id: id
                }

                document.getElementById('content').innerHTML = PageFormComponent.getHTML(data);
                var button = document.getElementById('createPage');

                button.addEventListener('click', e   => {
                    console.log('Edit element');

                    Preloader.show();
                    var sendData = {
                        name: document.getElementById('name').value,
                        parent_id: document.getElementById('_id').getAttribute('val'),
                        order: 0
                    }

                    console.log(sendData);

                    PageServices.edit(sendData).then(data => {
                        console.log(data);
                        Preloader.hide();
                    })

                });
            } else if (e.target.dataset.function == "addPage") {
                console.log('addPage');
                console.log(id);

                var data = {
                    parent_id: id
                }

                document.getElementById('content').innerHTML = PageFormComponent.getHTML(data);
                var button = document.getElementById('createPage');

                button.addEventListener('click', e   => {
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

            } else if (e.target.dataset.function == "addContent") {
                var id = e.target.parentNode.dataset.id;

                console.log('addContent');
                console.log(id);


                var data = {
                    page_id: id
                }

                document.getElementById('content').innerHTML = ContentFormComponent.getHTML(data);
                var button = document.getElementById('createPage');

                button.addEventListener('click', e   => {
                    console.log('Create element');

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
    });
});


