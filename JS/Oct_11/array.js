//This is a note
//array

&&
//and
||
//or
!
//not

//array

let arr =[];
//create an array
arr=[1,2,3];
//assign
arr.length; //3
// get array length

//array methods
arr.push(4);
//add to the end of array
arr.pop();
//delete the end element
arr.shift();
//delete the beginning element
arr.unshift(1);
//add to the beginning

abrr=arr.concat(brr);
//create array abrr by combine arr and brr
//the source arrays(arr and brr) are not modified
arr.includes('a');
//check if the array includes the element
arr.indexOf(2);
//get the index of element
arr.reverse();
//reverse the array

arr.slice();
//copy an array
sarr=arr.slice(2);
//slice the array arr from the index 2
//the original array(arr) is not modofied
sarr=arr.slice(1,5);
//slice the array arr from the index 1 to index 5(not includes 5)
//the original array(arr) is not modofied


//splice
//sl=[1, 2, 3, 'a']
sl.splice(2,1,'c','b');
//sl=[1, 2, 'c', 'b', 'a']
//splice(starting index,number of elements to delete,elements to add)

aarr=arr;
//make aarr refer to the arr address
//those two variable work on the same memory space

aarr===arr;
//check the adress of the two array variable

const mathc=[3.14,2.71828];
//a const array cannot be reassigned(change address)
//but can be editted(push, pop....)
