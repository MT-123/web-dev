console.log('---in the index.js--');

const cal=require('./calculator');
// "./" is necessary
const cats = require('./zoo/cat');
const dogs =require('./zoo/dog');
const hamsters =require('./zoo/hamster');

const squre=cal.sq;
const abs=cal.abs;

console.log(cal.sq(3),cal.abs(-10));//use the fuctions from calculator

//exports the zoo as the "moduleExport" directory is required
const zoo = [cats,dogs,hamsters];
module.exports=zoo;

console.log('---in the index.js--');