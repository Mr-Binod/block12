






const express = require('express');
const cors = require('cors');
const axios = require('axios');
const ejs = require('ejs');
const path = require('path');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, '/'))
app.set("views", './')


app.get('/', (req, res) => {
    res.render('main')
})
app.get('/edit', (req, res) => {
    
})

app.post('/signup', async (req, res) => {
    const {uid, upw} = req.body;
    const {data} = await axios.post('http://127.0.0.1:4000/signup', {uid, upw})
    // data: { state: 200, message: '안녕' }
    // console.log('data1',  {data});
    console.log(data,'state')
    // if(data.state === 200) {
    //     res.send('성공')
    // }
    // else {
    //     res.send('가입 실패')
    // }
    res.send(data.index);
})

app.post('/login', async (req, res) => {
    const {uid, upw} = req.body;
    console.log(req.body, 'body')
    console.log(uid, upw)
    const {data} = await axios.post('http://127.0.0.1:4000/login', {uid, upw})
    console.log(data)
    console.log(data.index)
    res.send(data.index)
})

app.put('/edit', async (req, res) => {
    const {uid, upw} = req.body;
    console.log(req.body.uid, "body")
    console.log(uid, upw)
    const {data} = await axios.put('http://127.0.0.1:4000/edit', {uid, upw})
    console.log(data)
    res.send('hello')
})


app.listen(3000, () => {
    console.log('frontend server on~')
})