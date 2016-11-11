var fs = require('fs');

function readLine(filename, line_no, callback) {
    var stream = fs.createReadStream(filename, {
        flags: 'r',
        encoding: 'utf-8',
        fd: null,
        mode: 0666,
        bufferSize: 64 * 1024
    });

    var fileData = '';
    stream.on('data', function(data){
        fileData += data;

        var lines = fileData.split("\n");

        if(lines.length >= +line_no){
            stream.destroy();
            callback(null, lines[+line_no]);
        }
    });

    stream.on('error', function(){
        callback('Error', null);
    });

    stream.on('end', function(){
        callback('File end reached without finding line', null);
    });

}

module.exports = readLine;