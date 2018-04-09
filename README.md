# evernote2boostnote
Export your notes from Evernote to Boostnote

Note: This project is a weekend hack project so please be careful and excuse me if the code is a bit fragile

USE IT AT YOUR OWN RISK

NO WARRANTY

### Description
This tool is a CLI tool that help you to import your notes into Boostnote from Evernote
I expect you to have HTML export of your notes from Evernote
The imported note into Boostnote will be an iFrame which loads the content to your notes (so you get all of the goodies like images and so)
All the notes will be searchable from Boostnote


### Usage
Boostnote:
* Create a new storage let's call it `EvernoteArchive`
* Create a new folder inside of this storage let's call it `EvernoteNotes`
* Go to Boostnote settings > Interface > Sanitization and allow dangerous HTML tags *sorry*
* Go to your storage folder and create a new folder inside of it and name it `imports`
* Paste all of your HTML notes there (The tool will create a note for each HTML file)

There's a template file `template.js` which you can edit if you need to change your imported notes markup

This tool:
* Clone this repo
* Run `yarn`
* Run the tool:
```
node index.js --output '/path/to/storage'
```

Example:
```
node index.js --output '/Users/USERNAME/Library/Mobile Documents/com~apple~CloudDocs/EvernoteArchive'
```
