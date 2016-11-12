var fs = require('fs');

function readLine(filename, line_no, callback) {
    var data = fs.readFileSync(filename, 'utf8'),
        lines = data.split("\n");

    if(+line_no > lines.length){
        throw new Error('File end reached without finding line');
    }

    callback(null, lines[+line_no]);

}

module.exports = readLine;