class ContentList {
    constructor(pageID) {
        this.getAllElements()
            .then(data => {
                console.log(data);
            });
    }

    getAllElements() {
        return ContentServices
            .getAll(pageID);
    }


    draw() {
        
    }

}