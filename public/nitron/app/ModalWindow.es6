"use strict";

class ModalWindow {
    /**
     * Show window
     * @desc show window and set content
     */
    static show(content) {
        let mw = document.getElementById('modalWindow'),
            mwc = document.getElementById('modalWindowContent');

        mw.classList.add('visible');
        mwc.innerHTML = content;

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
    }

}