const fs = require('fs');

const getNotes = () => 'My notes!';

const addNotes = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(note => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);
    } else {
        console.log('Duplicate');
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);    
    } catch(e) {
        return [];
    }
}


module.exports = {
    getNotes: getNotes,
    addNotes: addNotes
}