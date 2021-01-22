const validator = require('validator');
const getNotes = require('./notes.js');


const notes = getNotes();
console.log(notes);

console.log(validator.isEmail('a@b.com'));



// const add = require('./utils.js');
// const sum = add(5, -1);
// console.log(sum);