const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const{v4:uuidv4} = require('uuid');
const router = require('./router');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine','ejs');
app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/assets',express.static(path.join(__dirname,'public/assets')));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

app.use('/route',router);

app.get('/',(req,res)=>{
    res.render('index',{title:"Login System"});
})
app.listen(port,()=>{
    console.log('listening on port 3000');
})