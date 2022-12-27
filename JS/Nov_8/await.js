// await, try and catch

function delayResponse(data) {
    let delayTime = Math.floor(Math.random() * 3000);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (delayTime < 1500) resolve(data)
            //sent data back

            else if (delayTime >= 1500) reject('rejected!!!')
            //sent error with message
            else reject('ERROR!!!');
            //sent error with message

            console.log('Response', data, ' done');
        }, delayTime)

    })
}


//use await with async function
async function requestData() {
    try {
        let resp1 = await delayResponse('Q1');
									//await for the promise

        console.log(resp1, ' Success!!');
        
    } catch (e) {//catch the error and message
        console.log('fault system code:', e)
    }
    try {
        let resp2 = await delayResponse('Q2');
        console.log(resp2, ' Success!!');
    } catch (e) { 
        console.log('fault system code:', e) 
    }
    try {
        let resp3 = await delayResponse('Q3');
        console.log(resp3, ' Success!!');
    } catch (e) {
        console.log('fault system code:', e)
    }
    console.log('---END---');
}

//----test result
console.log('===start===')
requestData();
console.log('===end===')
// Response Q1  done
// Q1  Success!!
// Response Q2  done
// fault system code: rejected!!!
// Response Q3  done
// Q3  Success!!
// ---END---