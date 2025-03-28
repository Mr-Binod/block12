
require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios')
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const qs = require('qs');
const { text } = require('stream/consumers');

const app = express();

app.set('view engine', 'ejs');
app.use('/img', express.static(path.join(__dirname, 'images')))  // localhost:3000/img => images 폴더까지 접근
// kocalhost:300/img
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cookieParser())
// cookie 값을 파싱해서 객체로 변환해준다 req.cookie에 객체값을 할당해준다.
// req.headers.cookie === user_token=123
// req.cookie === user_token=123  파싱한 객체의 내용 {user_token :123}

app.get('/kakao/login', (req, res) => {
    const kakaoAuth = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URL}`
    res.redirect(kakaoAuth)
})

// app.get('auth', (req, res) => {
    // 쿼리를 가지고 인가 코드 생성
    // 쿼리에서 redirect url 가져와
    // 개발자에서 추가한 redirect url이 맞는지 확인 이후에 
    // 리다이렉트 응답 보내준다
//     req.redirect('vRyO7Ox4G1BZpA3Qs5DRmRo22e_TRN1LDTqAgxoxl4SeYHiqLDnifQAAAAQKFwYuAAABldWN8CGSBpCp5rpDbg')
// })

app.get('/auth/kakao/callback', async (req, res) => {
    const {code} = req.query;
    console.log(code);
    // 엑세스 토크 요청 왜?
    // 카카오 api 를 호출할때 사용해야한다. 액세스토큰이 즉 api 를 호출할수 있는 권한 허가

    // 동의항목에 추가한 내용이 있는지도 확인.
    // params 변수 정해진 내용을 전달
    const tokenUrl = `https://kauth.kakao.com/oauth/token`
    // 쿼리를 많이 사용하니까
    // 내장 클래스를 사용해서 쿼리 문자열 생성
    const data = new URLSearchParams({
        grant_type : 'authorization_code',
        client_id : process.env.KAKAO_CLIENT_ID,
        redirect_uri : process.env.REDIRECT_URL,
        code,
        client_secret : process.env.KAKAO_CLIENT_SECRETKEY
    })
    const response = await axios.post(tokenUrl, data, {
        headers : {
            'Content-type' : 'application/x-www-form-urlencoded'
        }
    })
    console.log(response)
    const {access_token} = response.data;
    // access_token: '-91p9LiQuvZmpvdfNqeD4vsBgvRQ6lQgAAAAAQoNFN0AAAGV1gU7v9Q0RDl69jWm',
    // 유저 정보 조회

    const {data : userData} = await axios.get('https://kapi.kakao.com/v2/user/me', {
        headers : {
            Authorization: `Bearer ${access_token}`
        }
    })
    const {id, properties} = userData
    const token = jwt.sign({id, properties}, 'jwt_key', {expiresIn : '1h'});

    res.cookie('login_access_token', token, {httpOnly : true, maxAge : 10 * 60 * 60 * 1000})
    res.cookie('kakao_access_token', access_token, {httpOnly : true, maxAge : 10 * 60 * 60 * 1000})
    // client_id
    // redirect_uri
    // code
    // client_secret
    res.redirect('/');
})

app.get('/', (req, res) => {
    const {login_access_token} = req.cookies;
    if(login_access_token) {
        const {properties} = jwt.verify(login_access_token, 'jwt_key')
        res.render('main', {data : properties});
    }
    else {
        res.render('main', {data : null})
    }
})
app.get('/unlink',async (req, res) => {
    try {
        
        const access_token = req.cookies.kakao_access_token;
        const data = await axios.post('https://kapi.kakao.com/v1/user/unlink', {} , {
            headers : {
                Authorization: `Bearer ${access_token}`
            }
        })
        res.clearCookie('login_access_token')
        res.clearCookie('kakao_access_token')
        res.json({state : 200, message : '종료 성공'});
    } catch (error) {
        res.json(error)        
    }
})

app.get('/logout', (req, res) => {
    const redirect_kakao_logout = `https://kauth.kakao.com/oauth/logout?client_id=${process.env.KAKAO_CLIENT_ID}&logout_redirect_uri=${process.env.LOGOUT_REDIRECT_URL}`
    res.redirect(redirect_kakao_logout)
})

app.get('/auth/kakao/logout/callback', (req, res) => {
    res.clearCookie('login_access_token')
    res.clearCookie('kakao_access_token')
    res.redirect('/')
})

// 친구 목록 조회권한 동의
// 테스트할 계정만 동의가 된것
// 비즈니스앱이 되어야 모든 친구의 목록을 조회할수있다
// 지금은 테스트 계정의 친구목록만 (개발자 페이지에 앱설정에 )
app.get('/friends', (req, res) => {
    const friends_url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URL}&scope=friends`
    res.redirect(friends_url);
})

// 친구 목록 확인
// 친구를 조회했을때 내가 만든 서비스에서 그 친구의 고유 아이디가

// 그 유저의 고유 아이디

app.get('/friendsView',async (req, res) => {
    const {kakao_access_token} = req.cookies;
    const friendsview_url = `https://kapi.kakao.com/v1/api/talk/friends`
    const {data} = await axios.get(friendsview_url, {
        headers : {       
            Authorization: `Bearer ${kakao_access_token}`
        }
    })
    console.log(data)
    res.json(data.elements);
})

// 본인한테 메시지 카톡 보내기
// 친구에세 카카오톡 메시지 보내기

app.get('/myMessage',async (req, res) => {
    const url = `https://kapi.kakao.com/v2/api/talk/memo/default/send`
    // 내장 객체에서 쿼리스트링을 만들때 쉽게 만들수 있도록 제공하는 내장 모듈
    // 쿼리스트링링 변환 해주는 내장 모듈 전달을 객체를 전달하면 변환해준다
    // const params = qs.stringify({a : {b : {c : 1}}});
    const params = qs.stringify({
        template_object : JSON.stringify({
            object_type : "text",
            text : "안녕 카톡",
            link : {
                web_url: "https://www.naver.com",
                mobile_web_url: "https://www.naver.com"
            },
            button_title : "클릭하기"
        })
    });
    const {kakao_access_token} = req.cookies;
    const data = await axios.post(url, params, {
        headers : {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            Authorization: `Bearer ${kakao_access_token}`
        }
    })
    console.log(data)
    res.send(params);
})
// 친구에세 카카오톡 메시지 보내기
app.post('/friendMessage', async (req, res) => {
    const url = `https://kapi.kakao.com/v1/api/talk/friends/message/default/send`
    const {uuid, content} = req.body;

    const params = qs.stringify({
        receiver_uuids : `["${uuid}"]`,
        template_object : JSON.stringify({
            object_type : "text",
            text : content,
            link : {
                web_url: "https://www.naver.com",
                mobile_web_url: "https://www.naver.com"
            },
            button_title : "클릭하기"
        })
    })
    const {kakao_access_token} = req.cookies;
    await axios.post(url, params, {
        headers : {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            Authorization: `Bearer ${kakao_access_token}`
        }
    })
    res.json({state : 200, message : '성공'})
})

app.listen(3000, () => {
    console.log('server on~')
})