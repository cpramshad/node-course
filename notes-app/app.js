const chalk = require('chalk');
const getNotes = require('./notes.js');


const notes = getNotes();
console.log(notes);

console.log(chalk.green('Success!'));


// const add = require('./utils.js');
// const sum = add(5, -1);
// console.log(sum);