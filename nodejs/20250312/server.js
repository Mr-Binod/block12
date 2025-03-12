const crypto = require('crypto'); //내장 모듈
const { create } = require('domain');
const upw = 'admin123';

const hash = crypto.createHash('sha256');
const hashing = hash.update(upw);

// hash 문자열 반환
// 64 자리의 크기의 문자열 16 짐수로 표현된
const hashString = hashing.digest('hex');

console.log(hashing)
console.log(hashString, hashString.length);

// 솔트의 값을 사용해서 예측이 불가능한 데이터를 만들어 줘야한다.

// salt를 사용해서 난수 생성
// 난수 : 랜덤한 값을 생성하는것

// crypto.randomBytes(32, (err, result) => {
//     if(err) {console.log(err);}
//     else {console.log(result);
//         console.log(result.toString('hex'));
//     }
// })

// 이 값을 솔트값으로 만든다면?
// 예측할수 없는 값을 만들수 있다.
// 솔트는 안전하게 데이터베이스에 저장
// 모든 비밀번호가 고유한 솔트를 가지고 있다

//  salt 값도 노출이 되기 힘들게 만들어야 한다
//  salt 값을 찾기 위해서 많으 시도를 한다

// 헤커를 귀찮게 하는 방법
// 키 스트리칭
//  hash 함수를 열어 번 호출해서 시간을 일부러 오래걸리게 만드는 기법

const createSalt = () => {
    // 난수가 생성이 된다면 콜백함수를 호출하면서 매개변수로 전달
    // new Promise 객체가 최초에 생성되면 상태가 pending 대기상태
    return new Promise ((res, rej) => {
        crypto.randomBytes(32, (err, result) => {
            if(err) return rej(err);
            res(result.toString('hex'));
        })
      
    })
    console.log(data)
}

console.log(createSalt());
// 비동기 호출할때 최초에 상태는 pending 라서

const createHash = (upw,salt) => {
    // 매개변수 순서  비밀번호, 솔트값, 키 스트레칭 횟수, 
    // 사용할 hash 알고리즘, 콜백함수
    const data = crypto.pbkdf2Sync(upw, salt, 100000, 32, 'sha256')
    return data.toString('hex');
}

// 값을 비밀번호 저장해서 사용하는게 솔트와 키 스트레칭 기법을
// 사용한 해시 문자열을 저장해서 비밀번호로 사용

// const foo = async () => {
//     const data = await createSalt();
//     console.log(data);
//     createHash(data)
// }
// foo();

// 240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9 64
// Promise { <pending> }
// <Buffer 0c 3d 64 a9 67 d2 61 2f 8d d5 e8 39 50 b6 a5 50 36 56 47 4c 1c bd 73 bb aa 9a 9b 2a 29 73 1e 8b>
// 0c3d64a967d2612f8dd5e83950b6a5503656474c1cbd73bbaa9a9b2a29731e8b
// 34769cb369c5158303c1fe199e2b671212c50db210f6da8588764d97ba3778de



const express = require('express');
require('dotenv').config();
const mysql = require('mysql2/promise');
const path = require('path');
const app = express();


app.use('/public', express.static(path.join(__dirname, 'public')))
// 암호화
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended : false}));
// createConnection : 요청 쿼리를 테스트하는 객체를 만드는 메서드
// createPool : 다수의 유저가 쿼리를 요청해도 풀을 생성해서 속도가 유지되게


// 환경변수 생성을 한귀에 
// dotenv 라이브러리에서 .env 의 값을 읽어서 안에있는 내용을 문자열 잘라서
// 환경 변수의 이름과 값을 프로세스가 종료되면 환경변수에서 제거된다.
// 값을 가져와서 사용
// process os의 내용이 포함된 객체
// env의 키의 값으로 들어있다 환경변수
console.log(process.env.DATABASE_USER)
const sqlpool = mysql.createPool({
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : 'project',
    multipleStatements : true,
    host : process.env.DATABASE_HOST,
    port : process.env.DATABASE_PORT
})

// 커넥션 확인
sqlpool.getConnection((err) => {
    console.log(err)
})

// 테이블이 없으면 생성 있으면 그냥 유지 
// 테이블 포기화 
const usertableinit = async () => {
    try {
        console.log('table check')
        // promise 로 처리
        await sqlpool.query('SELECT * FROM users') // 내부에서 err 발생
    } catch (err) {
        console.log('notfound created a new table')
        await sqlpool.query('CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY KEY, uid VARCHAR(10), upw VARCHAR(128), salt VARCHAR(128))')
    }
}

usertableinit();

// 회원가입 페이지
app.get('/signup', (req, res) => {
    res.render('signup')
})

//  로그인 페이지
app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/', (req, res) => {
    res.render('main')
})

app.post('/signup', async (req, res) => {
    try {
        
        const {uid, upw} = req.body;
        const salt = await createSalt();
        const pwhash = await createHash(upw, salt);
        const [[data]] = await sqlpool.query('SELECT * FROM users WHERE uid=?', [uid]);
        console.log(data)
        // [{
        //       id: 1,
        //       uid: '123',
        //       upw: null,
        //       salt: '9bd28af4b4b4644a319c8bf544957ea4d1bcfda8f7b354bb93a07bed5aca7853'
        //  }]
        if(data) return  res.json({state : 400, message : 'signup error'});

        await sqlpool.query('INSERT INTO users(uid, upw, salt) VALUES (?, ?, ?)',[uid, pwhash, salt]);
        res.json({state : 200, message : 'signup completed'});
    } catch (err) {
        res.json({state : 500, message : 'server error'})
    }
})

app.post('/login', async (req, res) => {
    try {
        const {uid, upw} = req.body;
        const [[data]] = await sqlpool.query('SELECT * FROM users WHERE uid=?', [uid]);
        if(!data) return res.json({state : 401, message : '아이디가 존재하지 않는다'})
            // 비밀번호 검사
        const pwhash = createHash(upw, data.salt);
        if(pwhash === data.upw) {
            // set-cookie
            res.cookie('login-token', data.uid, 
                {maxAge : 10 * 60 * 60 * 1000, 
                httpOnly : true}) // 요청과 응답 간에 사용할수 있는 쿠키데이터 자바스크립트에서 접근 불가능하다
            console.log(data)
            // set cookei라는 헤더를 응답 메시지의 헤더로 추가
            // 쿠키 값을 생성 시킨다
            // httpOnly 요청과 응답 간에만 쿠키의 값을 사용할수 있는 속성 자바스크립트 제어
            // res.redirect('/');
            // res.send({state : 200})
            res.json({state : 200, message : '로그인 성공'})

        }
        else {
            res.join({state : 402, message : '비밀번호가 틀렸습니다'})
        }
        
    } catch (err) {
        res.json({state : 500, message : "error"})
    }
})
// handler function which handles request from client
// and response from server
const logincookieparser = (req, res, next) => {
    console.log()
    if(!req.headers.cookie) return res.redirect('/login');
    const cookie = req.headers.cookie.split('=')[1];
    req.cookie = cookie;
    next();
}

app.get('/mypage', logincookieparser, (req, res) => {

    res.render('mypage', {username : req.cookie})
})

app.listen(3000, () => {
    console.log("server on~");
})