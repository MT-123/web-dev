const sqrt = (num) => {
    return num * num;
}
const isSquare = (a, b, c) => {
    if (sqrt(a) + sqrt(b) === sqrt(c)) return true;
    else return false;
}

isSquare(3, 3, 3);
//-----------------------//
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

async function requestData() {
    try {
        let resp1 = await delayResponse('Q1');
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
// ---
fetch('https://catfact.ninja/fact')
    .then((res) => {
        console.log(res.json())
    });

const catFact = async () => {
    try {
        const fetchData = await fetch('https://catfact.ninja/fact');
        //if there is no await in front of the fetch,
        //the fetchData will be undefined due to delay feedback from the server

        const responseContent = await fetchData.json();
        console.log(responseContent);
    } catch (e) {
        console.log('ERROR~~|||', typeof fetchData, '|||', e)
    }
}


//---class---
class Color {//class name with first letter upper case
    constructor(r, g, b, name) {//the constructor will run as creating a new instance with this class
        this.r = r;
        //"this" will refer to the object which new operator creates later
        this.g = g;
        this.b = b;
        this.name = name;
    }

    //add methods to the prototype
    innerRGB() {
        const { r, g, b } = this;
        return `${r},${g},${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }

}

const red = new Color(200, 20, 20, 'red');
const blue = new Color(50, 50, 230, 'blue');

document.body.style.backgroundColor = blue.rgb();
//change backgroundcolor to blue

red.r === blue.r && console.log('red.r === blue.r');
//false

red.rgb === blue.rgb && console.log('red.rgb === blue.rgb');
//true