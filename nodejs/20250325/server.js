


require('dotenv').config();
require('./models/config');
const express = require('express');
const path = require('path');
const {userRouter} = require('./routers');



const app = express();


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// app.use('/public', express.static(__dirname + '/public')) without path
app.use('/public', express.static(path.join(__dirname, 'public')))    // output dirname/public
// localhost:3000/public => 작업 폴더 public 폴더까지지

app.get('/', (req, res) => {
    res.render('main')
})

app.use('/user', userRouter);  //  /user/login,  /user/signup

app.listen(process.env.PORT || 3000, () => {
    console.log('server on~')
})