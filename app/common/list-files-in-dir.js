var path = require('path'),
    fs = require('fs');


/**
 * Find all files recursively in specific folder with specific extension, e.g:
 * findFilesInDir('./project/src', '.html') ==> ['./project/src/a.html','./project/src/build/index.html']
 * @param  {String} startPath    Path relative to this file or other file which requires this files
 * @param  {String} filter       Extension name, e.g: '.html'
 * @return {Array}               Result files with path string in an array
 */
function listFilesInDir(startPath, filter) {

    var results = [];

    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return -1;
    }

    var files = fs.readdirSync(startPath);

    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i]),
            stat = fs.lstatSync(filename);

        if (stat.isDirectory()) {
            results = results.concat(listFilesInDir(filename, filter)); //recurse
        }

        else if (filename.indexOf(filter) >= 0) {
            console.log('-- found: ', filename);
            results.push(filename);
        }
    }

    return results;
}

module.exports = listFilesInDir;