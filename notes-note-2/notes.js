const fs = require('fs');

var fetchNotes = () => {
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch(e) {
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};

	var duplicateNote = notes.filter((note) => note.title === title);

	if(duplicateNote.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

var getAll = () => {
	return fetchNotes();
};

var getNote = (title) => {
	// fetch notes
	var notes = fetchNotes();
	// filter note, find specific note with title argument passes
	var filteredNote = notes.filter((note) => note.title === title);
	return filteredNote[0];
};

var removeNote = (title) => {
	// fetch notes
	var notes = fetchNotes();
	// filter note, remove note with using title argument passed
	var filteredNotes = notes.filter((note) => note.title !== title);
	// save new notes array
	saveNotes(filteredNotes);

	return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
	console.log('----');
  	console.log(`Title: ${note.title}`);
  	console.log(`Title: ${note.body}`);
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote
};