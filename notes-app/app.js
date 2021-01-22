const fs = require('fs');

fs.appendFileSync('notes.txt', ' Appended string!');
//fs.writeFileSync('notes.txt', 'Sample Text!');