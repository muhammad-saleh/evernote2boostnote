var fs = require('fs');
var path = require('path');

function folderHash(outputPath) {
    var file = fs.readFileSync(outputPath + '/boostnote.json');
    console.info('Folder hash: ' + JSON.parse(file)['folders'][0]['key']);
    return JSON.parse(file)['folders'][0]['key'];
}

module.exports = folderHash;