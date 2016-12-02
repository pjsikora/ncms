export default class Helpers {
  static JSON2GET (json) {
    var string = ''

    for (var key in json) {
      string += key + '=' + encodeURIComponent(json[key]) + '&'
    }

    string = string.slice(0, -1)

    return string
  }
}
