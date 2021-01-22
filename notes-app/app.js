const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');



// add, remove, read, list

yargs.version('1.1.0')
// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body);
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Removing a note!')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'list note',
    handler: function () {
        console.log('list note!')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read note',
    handler: function () {
        console.log('Read note!')
    }
})

yargs.parse();

// console.log(process.argv);
//console.log(yargs.argv);


// const notes = getNotes();
// console.log(notes);
// console.log(chalk.green('Success!'));
// const add = require('./utils.js');
// const sum = add(5, -1);
// console.log(sum);