//async, throw, then and catch
let isSuccess = true;
async function someFunction(test) {
    if (test) return 'good!!!'
    //for resolved promise use "return"
    else throw 'bad!!!';
    //for rejected promise use "throw"
}
someFunction(isSuccess)
    .then((data) => { console.log(data, 'made it!') })
		//for resolved promise use "then"
    .catch((data) => { console.log(data, 'again!') });
		//for rejected promise use "catch"
console.log('---End---');


//result
//---End---
//good!!! made it!