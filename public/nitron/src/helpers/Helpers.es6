class Helpers {
    static JSON2GET(json) {
        var string = '';

        for (var key in json) {
            string += key + '=' + encodeURIComponent(json[key]) + '&'
        }
        string = string.slice(0,-1);
        console.log(string);
        return string;
    }
}