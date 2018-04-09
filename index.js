const program = require('commander');
const getFolderHash = require('./utils/folderHash');
const exportCSONNotes = require('./utils/exportCSONNotes');
const fs = require('fs');


program
  .version('0.0.1')
  .option('--output, --output [outputDir]', 'Output Boostnote storage directory')
  .parse(process.argv)

const folderHash = getFolderHash(program.output);
const notesFiles = [];

fs.readdirSync(program.output+'/imports').forEach(file => {
  if(!fs.statSync(program.output+'/imports/' + file).isDirectory()) {  
    notesFiles.push(file);
  }
});
console.info(`Found ${notesFiles.length} notes`);

exportCSONNotes(notesFiles, folderHash, program.output);

