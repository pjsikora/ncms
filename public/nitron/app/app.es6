"use strict";

function isURL(str) {
    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (!regex.test(str)) {
        return false;
    } else {
        return true;
    }
}

function prepareElement(string) {
    var validString = isURL(string) ? "validElement" : "invalidElement";

    return '<li class="' + validString + '" data-css="false">' + string + '</li>';
}

function createList(urlsList) {
    var list = '<ul>';

    urlsList.forEach(function (el) {
        list += prepareElement(el);
    });

    list += '</ul>';

    return list;
}


function getPages() {
    return makeRequest("GET", "/api/pages/list");
}

function getContents() {
    return makeRequest("GET", "/api/contents/list");
}

function drawDataInTable(data) {
    var table;

    table = `<table>
            <tr><td>Test</td></tr>
    </table>`;

    return table;
}


function prepareList(data) {
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
    return html;
}

function pageForm(data) {
    var form = `<input type="text" placeholder="Name" value="">
        <input type="text" placeholder="Name" value="">
        <input type="checkbox" id="is_visible"><label for="is_visible">Visible</label>
        <select name="" id="">
        
        </select>`;


    return form;
}


document.addEventListener("DOMContentLoaded", function (event) {
    var pgl = new PageListComponent();


    document.getElementById("pages").addEventListener("click", function (e) {
        if (e.target && e.target.nodeName == "LI") {
            var elID = e.target.dataset.id;

            ContentServices.read(elID).then(data => {
                var contents = JSON.parse(data);
                if (contents.length == 0) {
                    document.getElementById('content').innerHTML = "No content";
                } else {
                     var html = '<ul>';

                    contents.forEach(function(el) {
                        html += `<li>${el.content}</li>`;
                    });
                    html += '</ul>';

                    document.getElementById('content').innerHTML = html;
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


