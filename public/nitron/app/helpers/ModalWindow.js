define([], function () {
    "use strict";

    class ModalWindow {
        constructor(content) {
            let body = document.body;

            this.$window = DOM.domify(this.getHTML(content));

            this.mw = document.getElementById('modalWindow');
            this.$content = document.getElementById('modalWindowContent');

            body.appendChild(this.$window);

            document.getElementById('modalWindow__no').addEventListener('click', e => {
                e.preventDefault();
                console.log('no');
                this.hide();
            });
        }

        show(callback) {
            if (typeof callback == 'function' && typeof event != 'undefined') {
                document.getElementById('modalWindow__yes').addEventListener('click', e => {
                    callback(event);
                });
            }

            this.$window.classList.add('visible');
        }

        hide() {
            this.$window.classList.remove('visible');
            console.log(document.childNodes);
            document.body.removeChild(this.$window);
        }

        getHTML(content) {
            return ModalWindow.getHTML(content);
        }

        static getHTML(content) {
            let html = `<div id="modalWindow" class="modalWindow">
                        <div class="modalInner">
                            <div id="modalWindowContent">
                                ${ content }
                            </div>
                            <div class="modalChoice">
                                <button id="modalWindow__yes">Yes</button>
                                <button id="modalWindow__no">No</button>
                            </div>
                        </div>
                    </div>`;

            return html;
        }

        /**
         * Show window
         * @desc show window and set content
         */
        // static show(content, callback, event) {
        //     let body = document.body,
        //         window = DOM.domify(ModalWindow.getHTML(content));
        //     console.log('static show');
        //     body.appendChild(window);
        //
        //     if (typeof callback == 'function' && typeof event != 'undefined') {
        //         document
        //             .getElementById('modalWindow__yes')
        //             .addEventListener('click', (e) => {
        //                 callback(event);
        //             });
        //     }
        //
        //     document
        //         .getElementById('modalWindow__no')
        //         .addEventListener('click', (e) => {
        //             e.preventDefault();
        //             ModalWindow.hide();
        //         });
        //
        //     window.classList.add('visible')
        // }
        //
        // /**
        //  * Hide window
        //  * @desc hide window and remove content
        //  */
        // static hide() {
        //     let mw = document.getElementById('modalWindow'),
        //         mwc = document.getElementById('modalWindowContent');
        //
        //     mw.classList.remove('visible');
        //     mwc.innerHTML = '';
        //
        //     document.body.removeChild(mw);
        // }

    }
});