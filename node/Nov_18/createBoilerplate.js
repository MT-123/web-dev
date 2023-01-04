const fs = require('fs');
const filename = process.argv[2]||'defaultName';
// take the argument from third of argv array
//if no argument, use 'defaultName'

try {
    fs.mkdirSync(filename);
    //create folder
    fs.writeFileSync(`${filename}/index.html`, '');
    //create empty file
    fs.writeFileSync(`${filename}/index.js`, '');
    fs.writeFileSync(`${filename}/index.css`, '');
} catch (e) { console.log('ERROR~!!!', e); }
