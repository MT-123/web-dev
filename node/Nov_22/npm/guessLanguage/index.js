
import { franc } from 'franc';
// use 'import' instead of 'require' due to franc using ES6 module(ESM) instead of CommonJS
// "type": "module" is added at package.json to switch the system module to ESM
// so 'require()' is not available now
// franc is using named export so we have to use the same export name
// {} is for named export

// CommonJS: "module.exports"&"require" 
// VS 
// ES6: "export"&"export"

// Node uses CommonJS as default

import langu from 'langs';
// the module langs is using default export we can name our import freely

const language = langu;

const words = process.argv[2];
const guess = franc(words);
if (guess === 'und') {
    console.log('Analysis failed! Please type more words.')
} else {
    console.log(guess, ':');
    try {
        const fullName = language.where("3", guess)['name'];
        console.log(fullName);
    } catch { console.log('Fullname not found!!') }
}
