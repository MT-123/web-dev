// install method override from npm first
const express = require('express')
const app = express()
const path = require('path')


// import method override
const methodOverride = require('method-override')

app.listen(8080,()=>{console.log('Port 8080 online!')})

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))

app.use(express.urlencoded({extened:true}))
app.use(express.json())

app.use(methodOverride('_method'))
// override the post method when seeing phrase "?_method=" in the url
// ex. use delete method when seeing "?_method=DELETE" in post request


const originalHeading = 'Original';
let heading2 = originalHeading;

app.get('/',(req,res)=>{
    res.render('index', {heading2})
})

app.get('/edit',(req,res)=>{
    res.render('edit')
})

app.patch('/edit',(req,res)=>{
    // take the patch method when the form submitted
    const {editText} = req.body;
    heading2 = editText;
    res.redirect('/')
})

app.get('/delete',(req,res)=>{
    res.render('delete')
})

app.delete('/delete',(req,res)=>{
    const {del} = req.body;
    console.log(del);
    if (del){heading2=''};
    res.redirect('/')
})