//1. (in terminal) do "npm init" at the project directory for initial JSON
//2. (in terminal) do "npm i give-me-a-joke " to download the joke package

const jokes = require('give-me-a-joke');
const color = require('colors');
const figlet = require('figlet');


jokes.getRandomDadJoke((joke) => {
    console.log(joke.rainbow);
});

figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

