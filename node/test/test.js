const arr = [{ name: 'Paul', comment: 'Hello' }, { name: 'Judy', comment: 'Hi' }];
const addTo = { name: 'Tim', comment: 'Hey' };
const { name, comment } = addTo;
console.log(arr);
console.log(name, comment);
console.log([name, comment]);
arr.push({ name, comment });
console.log(arr);
//print
//print
//print
