


const express = require('express');
const Router = require('./routers/user.router');
const path = require('path');
const app = express();


// console.log(Router, path)
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use('/public',express.static(path.join(__dirname, 'public')))


app.use(Router);


app.listen(3000, () => {
    console.log('server on~');
})



