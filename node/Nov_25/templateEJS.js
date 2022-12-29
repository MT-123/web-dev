const express = require('express');
const app = express();
// for views path setup
const path =require('path');

app.listen(8080, () => {
    console.log("Port 8080 online!!!")
})


// prerequisite: install ejs with npm and create:
// a folder named "views" for ejs templates
// a folder named "public" for static files like css

app.set('view engine','ejs');
// use ejs as view engine

app.set('views',path.join(__dirname, '/views'));
// set the absolute path for views so express can find it even this file is not executing at  current folder

app.use(express.static(path.join(__dirname,'/public')));
// set the absolute path for static assets like css files

app.get('/',(req,res)=>{
    res.render('home');
    // no need to incude file extension(i.e. home.ejs)
    // no need to specify the folder path cause we use the default name "views"
})


// pass values to ejs
app.get('/random',(req,res)=>{
    const num = Math.floor(Math.random()*9)+1;
    const luckyNums = [3,5,9];
    res.render('random',{num,luckyNums});
})


app.get('*', (req,res)=>{
    res.send("<h1>Sorry! Don't expect that coming!!")
})
