define([], function () {
    'use strict';

    class Preloader {
        static getHTML(content) {
            // if (modalType == "onebutton") {
            //
            // } else if (modalType=="twobutton") {
            //
            // }

            // DOM.removeAllEventListeners();

            let html = `<div id="preloader" class="preloader">
                        <div class="preloader__icon">
                            Loading
                        </div>
                    </div>`;

            return html;
        }

        static show() {
            let body = document.body,
                preloader = DOM.domify(Preloader.getHTML(content));

            body.appendChild(preloader);

            preloader.classList.add('visible');
        }

        static hide() {
            let preloader = document.getElementById('preloader');

            document.body.removeChild(preloader);
        }
    }
});