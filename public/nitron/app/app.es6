"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
    var router = new Router(
        { "ding/dong": function() {console.log('siup')}},
        {}
        );

    var pgl = new PageListComponent(); // List page

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
                            html += `<li>${el.content}</li>`;
                        });
                        html += '</ul>';

                        document.getElementById('content').innerHTML = html;
                    }
                } else {

                }
            });
        }

        if (e.target && e.target.nodeName == "SPAN" && e.target.dataset.function == "delete") {
            var id = e.target.parentNode.dataset.id,
                name = e.target.parentNode.dataset.name;

            ModalWindow.show('Are you sure you want to delete page: ' + name);
        }

        if (e.target && e.target.nodeName == "SPAN" && e.target.dataset.function == "edit") {
            var id = e.target.parentNode.dataset.id;


        }
    });
});


