console.log("---in the requireExportModule.js ---");

const zoo=require('./moduleExport');
//require the directory
//which means running the index.js in that directory

console.log(zoo);
console.log(zoo[0].cat);

console.log("---in the requireExportModule.js ---");