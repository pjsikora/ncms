"use strict";

class ModalWindow {
    static getHTML(content) {
        // if (modalType == "onebutton") {
        //
        // } else if (modalType=="twobutton") {
        //
        // }

        // DOM.removeAllEventListeners();

        let html = `<div id="modalWindow" class="modalWindow">
                        <div class="modalInner">
                            <div id="modalWindowContent">
                                ${content}
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
    static show(content) {
        let body = document.body,
            window = DOM.domify(ModalWindow.getHTML(content));

        body.appendChild(window);

        window.classList.add('visible');

        document
            .getElementById('modalWindow__no')
            .addEventListener('click', (e) => {
                e.preventDefault();
                ModalWindow.hide();
            });
    }

    /**
     * Hide window
     * @desc hide window and remove content
     */
    static hide() {
        let mw = document.getElementById('modalWindow'),
            mwc = document.getElementById('modalWindowContent');

        mw.classList.remove('visible');
        mwc.innerHTML = '';

        document.body.removeChild(mw);
    }

}