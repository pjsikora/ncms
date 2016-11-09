export class Helpers {
  static JSON2GET(json) {
    var string = '';

    for (var key in json) {

      if (json[key] != '') {
        string += key + '=' + encodeURIComponent(json[key]) + '&';
      }
    }
    string = string.slice(0, -1);
    return string;
  }
}
