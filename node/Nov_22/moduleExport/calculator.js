console.log("---in the calculator.js ---");

function sq(num){
    return num*num;
}

function abs(num){
    if (num<0) {return num*(-1)}
    else return num;
}


const methods={
    sq:sq,
    abs:abs
}

module.exports=methods;
//exports the function

console.log("---in the calculator.js ---");