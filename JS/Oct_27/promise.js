//Promise
const respon = (q) => {
    return new Promise((yes, no) => {
        //(resolve,reject)
        if (q === 'y') { yes('YES!') }
        //resolve with value 'YES!'
        else { no('NO!') }
        //reject with value 'NO!'
    })
};

respon('y')
    .then((msg) => console.log('Solved~~~ ',msg))//resolve
    .catch((msg) => console.log('Failed~~!',msg));//reject
//Yes!
respon('n')
    .then((msg) => console.log('Solved~~~ ',msg))//resolve
    .catch((msg) => console.log('Failed~~!',msg));//reject
//No!