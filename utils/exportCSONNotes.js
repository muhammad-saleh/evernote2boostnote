const fs = require('fs');
const fsCson = require('fs-cson');
const crypto = require('crypto');
const t = require('../template');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function exportCSONNotes(notes, folderHash, outputPath) {
    if (notes && folderHash && outputPath) {
        const notesLength = notes.length;
        console.info(`Exporting ${notesLength} to ${outputPath} under folder ${folderHash}`);

        notes.map(function(note, index) {
            console.info(`Exporting ${index+1} of ${notesLength}`);
            let content = noteContent(outputPath+'/imports/', note, t.template);
            let notePath = outputPath + '/notes/' + crypto.randomBytes(10).toString('hex') + '.cson';
            const newNote = {
                folder: folderHash,
                title: note.split('.html')[0],
                type: 'MARKDOWN_NOTE',
                content: content,
                createdAt: new Date(),
                updatedAt: new Date(),
                tags: [],
                isStarred: false
            };

            fsCson.writeFile(notePath, newNote, function(err) {
                if(err) {
                    console.error(`Error writing ${newNote.title}`);
                }
            });
            return;
        });
    }
}

function noteContent(filePath, fileName, template) {
    let content = new JSDOM(fs.readFileSync(filePath+fileName, 'utf8'));
    content = content.window.document.body.innerHTML;
    let finalTemplate = template.split('{{FILEURL}}').join(fileName);
    finalTemplate = finalTemplate.split('{{FILECONTENT}}').join(content);
    return finalTemplate;
}
// Math.random().toString(36).slice(-16)
module.exports = exportCSONNotes;