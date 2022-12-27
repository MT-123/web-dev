//string methods

string.length();
string.toUpperCase();
string.toLowerCase();
string.trim();
//remove the space at the beginning and the end

string.trim().toUpperCase();
//chained methods

string.indexOf("search content");
// indicate index of the matched content
// if no matches, show -1

string.slice(start index[, end index]);
//the end index will not be included if used

string.replace("content to be repaced","replacing content");
string.repeat(number);

//string template literals
`text ${content to be evaluated}`;
//example

let message = "You bought " + qty +" "+name+". The total is $" +qty*price +".";
//'You bought 5 artichoke. The total is $150.'
//equals to the following
let messageEq = `You bought ${qty} ${name}. The total is $${qty*price}.`;
//'You bought 5 artichoke. The total is $150.'

//Math objects
Math.PI;
// 3.141592653589793
Math.floor(3.45);
// 3
Math.ceil(3.45);
// 4

Math.random();
// 0.8301520977761572
// is 0~1(1 is not included)

//random integers
Math.floor(Math.random()*100)+1;
//1~100 random

Math.floor(Math.random()*11)+20;
//20~30 random

//equal 
//double equals does not check types
//triple equals checks both values and types
5=='5';  //true
5==='5'; //false

false==''; //true
false==='';  //false

false==0; //true
false===0;  //false

0=='';  //true
0===''; //false

null==undefined;  //true
null===undefined;  //false

null==0;  //false
undefined==0;  //false

//not equals
3!='3';  //false
3!=='3';  //true

''!=0;  //false
''!==0;  //true

//conclusion
//use === and !== always if not intended to use == and !=
