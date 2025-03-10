


const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const exp = require('constants');

const app = express();

app.use(cors({
    origins : '*', //모든 경로
    credentials : true
}))
app.use(express.json()); // uses json type string
app.use(express.urlencoded({extended : false}))  // express 요청객체에 body json 은 parsing
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'page'));
// console.log(app)

app.get('/', (req, res) => {
    res.render('main');
})

app.get('/details', (req, res) => {
    const cookie = req.headers.cookie;
    const token = cookie.split('=')[1].split('%')[0];
    // const entoken = encodeURIComponent(token);
    console.log(token, 'token');
    res.render('details', {token});
})

app.get('/login', (req, res) => {
    
    res.render('login');
})

app.get('/signup', (req, res) => {
    res.render(('signup'));
})

app.get('/error', (req, res) => {
    res.render('error')
})

app.post('/signup', async (req, res) => {
    const {uid, upw} = req.body;
    const {data} = await axios.post('http://127.0.0.1:4000/signup', {uid, upw})
    console.log(data);
    if(data.state === 200) {
        res.redirect('/login');
    }
    else {
        res.redirect('/error');
    }
    // res.redirect('/');
})
app.post('/login', async (req, res) => {
    const {uid, upw} = req.body;
    console.log(req.body, 'body')
    console.log(uid, upw)
    const {data} = await axios.post('http://127.0.0.1:4000/login', {uid, upw})
    // 헤더에 쿠키의 값을 저장해라는 요청을 브라우저에서 응답
    // cookie 응답 헤더에 
    res.cookie('login-token', data.token, {maxAge : 10 * 60 * 60 * 1000, httpOnly : true})
    console.log(data)
    // set cookei라는 헤더를 응답 메시지의 헤더로 추가
    // 쿠키 값을 생성 시킨다
    // httpOnly 요청과 응답 간에만 쿠키의 값을 사용할수 있는 속성 자바스크립트 제어
    // res.redirect('/');
    res.send('hiii')
})

app.put('/details', async (req, res) => {
    const cookie = req.headers.cookie;
    const token = cookie.split('=')[1].split('%')[0];
    const {uuid} = req.body;
    console.log(uuid, 'uuid', token);
    await axios.put('http://127.0.0.1:4000/details', {uuid, token})
    res.send('ok');
})

app.listen(3000, () => {
    console.log('front server on~');
})

