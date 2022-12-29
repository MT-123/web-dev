// install nodemon for fast testing
// go to terminal: "sudo npm install -g nodemon"

const express = require('express');
const app = express();

app.listen(8080, () => {
    console.log('Port 8080 listening!!')
})


// basic routing
app.get('/', (req, res) => {
    res.send('This is home page!!!')
})

app.get('/reddit/:id', (req, res) => {
    const { id } = req.params;
    res.send(`id= ${id}`);
})
// http://localhost:8080/reddit/6778786
// id= 6778786

app.get('/reddit/:topic/comment/:id', (req, res) => {
    const { topic, id } = req.params;
    res.send(`<h1>The ${topic} comment with id ${id}<h1>`)
})
// http://localhost:8080/reddit/food/comment/123456
// The food comment with id 123456

// query string
app.get('/search', (req, res) => {
    const { que } = req.query;
    res.send(`searching for ${que} ...`);
})
// use "?" to start query string
// http://localhost:8080/search?que=apple
// searching for apple ...

app.get('/multisearch', (req, res) => {
    const { q, id } = req.query;
    res.send(`search ${q} with id ${id}`);
})
// use "&" to connect multi query strings
// http://localhost:8080/multisearch?q=apple&id=123
// search apple with id 123

// catching unexpected url
app.get('*', (req, res) => {
    res.send('no page for this~~~')
})
// http://localhost:8080/dfasfdaf
// no page for this~~~
