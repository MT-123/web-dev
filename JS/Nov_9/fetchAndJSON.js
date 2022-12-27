// JSON.parse() : turn JSON to javascript object
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true

//JSON.stringify() : turn javascript object to JSON
console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

//get json with fetch
fetch('https://catfact.ninja/fact')
//fetch will return a promise wit response
    .then((res) => {
//get the response with res
        console.log(res.json())
//get the json with .json()
    });

//refactoring with async for error catch
const catFact = async () => {
    try {
        const fetchResponse = await fetch('https://catfact.ninja/fact');
        //if there is no await in front of the fetch,
        //the fetchData will be undefined due to delay feedback from the server

        const response2Json = await fetchResponse.json();
        console.log(response2Json);
    } catch (e) {
        console.log('ERROR~~|||',typeof fetchData,'|||', e)
    }
}




