

require('dotenv').config();
const path = require('path')
const express = require('express');
const {userRouter, mainRouter, boardRouter} = require('./routers')


const app = express();


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended : false}))
// app.use('/public', Path.use(__dirname,"public"))

// 미들웨어 부문 

app.use(mainRouter);
app.use('/user', userRouter)  // user/login   user/signup
app.use('/board', boardRouter)  // board       board/create


app.listen(process.env.PORT || 3000, () => {
    console.log('server on~')
})