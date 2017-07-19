const fs = require("fs");

var notes = {
	title: "This is title",
	body: "This is note in detail"
};

// Convert object into string and store into file
var originalNoteObj = JSON.stringify(notes);
console.log(originalNoteObj);
fs.writeFileSync('notes.json', originalNoteObj);

// Get file data and convert it into object
var noteString = fs.readFileSync('notes.json');
var originalNoteObj = JSON.parse(noteString);
console.log(originalNoteObj);