class PageFormComponent(){
    getHTML(data){
        var data = `<form>
                    <input type="text" placeholder="Name">
                    <input type="text" placeholder="Name">
                </form>`;

        return data;
    }

    pageForm(data){
        var form = `<input type="text" placeholder="Name" value="">
        <input type="text" placeholder="Name" value="">
        <input type="checkbox" id="is_visible"><label for="is_visible">Visible</label>
        <select name="" id="">
        
        </select>`;

        return form;
    }

    clearForm(){}

    sendData() {}


}