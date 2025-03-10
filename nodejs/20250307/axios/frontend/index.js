


const express = require('express');
const cors = require('cors');
const axios = require('axios');
const ejs = require('ejs');
const path = require('path');
const app = express();

app.use(cors({
    origins : '*', //모든 경로
    credentials : true
}))

app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.set('view engine', 'ejs')
app.set('views', './')

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/login', (req, res) => {
    const {uid, upw} = req.body;
    console.log(req.body)
    res.send("done")
})

app.listen(3000, () => {
    console.log('hello')
})