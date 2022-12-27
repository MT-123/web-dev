//This is a note
//arrow function

a.forEach()
a.map()

this
//https://pjchender.blogspot.com/2016/03/javascriptthisbug.html

setTimeout(()=>console.log('text'),3000);
//print "text" after 3 sec
//the first arg must be a funtion

let id = setInterval(()=>console.log(Math.random()),1000);
//print random numbers every sec
clearInterval(id);
//stop the interval

let b=[2,3,5,8,12,65,7,0,34,76,3];
b.filter((num)=>{return num%5===0})
// [5, 65, 0]
//filter the elements with true return
b.filter(num=>num%5===0)
// [5, 65, 0]
//implicit return
b.every(num=>num>10)
//false
//every result needs to be true
b.some(num=>num>10)
//true
//at leat one result is true

//spread with array,string,and object
Math.max(b)
//NaN
Math.max(...b)
//76

//rest param

//destruct object
user={username:'Paul',password:'123'};
const {username,password:pass,admin:master='N'}=user;

//destruct param
function info({username:name,password:pass}){console.log(`You are ${name} (${pass})`)};
//You are Paul (123)