const express = require('express');
const app = express();

//start listening localhost:8080
app.listen(8080, () => {
    console.log('Port 8080 listening!!')
})


app.use(express.urlencoded({extended:true}))
// enable parse req.body if used in post request 


// only one send is allowed for a request, so these lines have to be disabled
// app.use((req, res) => {
//     console.log('A request coming!!!');
//     // res.send('<h1>This h1 is sent by express</h1>');
// })

app.get('/', (req, res) => {
    //'/' means the root route
    res.send('<h1>This is home page!</h1>')
})

app.get('/cats', (req, res) => {
    res.send('Meow~')
})

app.get('/fish', (req, res) => {
    res.send('bubble.....')
})

app.post('/cats', (req, res) => {
    res.send('Meow with post!')
})

