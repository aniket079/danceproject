
const path=require("path");
const express=require("express");
const app=express();
const port=80;
const fs=require("fs");

app.use('/static',express.static('static'));
app.use(express.urlencoded());

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));


app.get('/',(req,res)=>{
    const params={}
    res.status(200).render('index.pug',params);
})
app.get('/contact',(req,res)=>{
    const params={}
    res.status(200).render('contact.pug',params);
})
app.get('/services',(req,res)=>{
    const params={}
    res.status(200).render('sevices.pug',params);
})
app.get('/about',(req,res)=>{
    const params={}
    res.status(200).render('about.pug',params);
})
app.get('/demo',(req,res)=>{
    const params={}
    res.status(200).render('demo.pug',params);
})
app.post('/submit',(req,res)=>{
    Name=req.body.name
    Mail=req.body.email
    Mobile=req.body.phone
    About=req.body.About
    let otw=`NAME-->${Name},   EMAIL-->${Mail},   PHONE NO-->${Mobile},    ABOUT-->${About}`
    fs.writeFileSync("output.txt", otw);
    const params={'message':'Your form is sumbitted successfully'}
    res.status(200).render('thank.pug',params);
})
 

app.listen(port,()=>{console.log("app running successfully on port ")});
