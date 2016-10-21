define([], function () {
    'use strict';

    class DOM {
        static domify(str) {
            var el = document.createElement('div');
            el.innerHTML = str;

            var frag = document.createDocumentFragment();
            return frag.appendChild(el.removeChild(el.firstChild));
        }

        static removeAllEventListeners(element) {
            let old_element = element,
                new_element = old_element.cloneNode(true);

            old_element.parentNode.replaceChild(new_element, old_element);
        }
    }
});