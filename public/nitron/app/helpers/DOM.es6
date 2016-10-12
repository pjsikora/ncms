class DOM {
    static  domify(str) {
        var el = document.createElement('div');
        el.innerHTML = str;

        var frag = document.createDocumentFragment();
        return frag.appendChild(el.removeChild(el.firstChild));
    }
}