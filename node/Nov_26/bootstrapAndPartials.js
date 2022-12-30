// js and css files of bootstrap are required and added to public folder

const express = require('express')
const app = express()
const path = require('path')

app.listen(8080,()=>{console.log('port 8080 online')})

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))

app.use(express.static(path.join(__dirname,'/public')))
app.use(express.urlencoded({extended:true})) //to enable req.body when posting

app.get('/submitted', (req,res)=>{
    const {reqWord} = req.query;
    res.render('searchResult',{reqWord});
})

app.post('/submitted', (req,res)=>{
    const {reqWord} = req.body;
    const postWord = reqWord + "- by posting"
    res.render('searchResult',{reqWord:postWord});
})

app.get('/',(req,res)=>{
    res.render('index');
})
