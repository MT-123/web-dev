const express = require('express');
const app = express();

//start listening localhost:8080
app.listen(8080, () => {
    console.log('Port 8080 listening!!')
})

// action when request coming from port:8080
app.use((req, res) => {
    console.log('A request coming!!!');
    //print at terminal

    res.send('<h1>This h1 is sent by express</h1>');
    // send h1 element to the web
    // only one send is allowed for a request
})