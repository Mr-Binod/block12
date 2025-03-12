



const crypto = require('crypto');
const { create } = require('domain');
const upw = 'admin123';

const hash = crypto.createHash('sha256');
const hashing = hash.update(upw);

// console.log(hashing.digest('hex'))

const createSalt = () => {
    return new Promise ((res, rej) => {
        crypto.randomBytes(32, (err, result) => {
            if(err) return rej(err)
            res(result.toString('hex'));
        })
    })
}

const createHash = (upw, salt) => {
    const data = crypto.pbkdf2Sync(upw, salt, 100000, 32, 'sha256')
    console.log(data, data.toString('hex'))
    return data.toString('hex');
}

// createHash(upw);

const express = require('express');
require('dotenv').config();
const mysql = require('mysql2/promise');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.urlencoded({extended : false}));

const sqlpool = mysql.createPool({
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : 'project',
    multipleStatements : true,
    host : process.env.DATABASE_HOST,
    port : process.env.DATABASE_PORT
})
sqlpool.getConnection((err) => {
    console.log(err)
})

const tableinit = async () => {
    try {
        console.log('table check')
        await sqlpool.query('SELECT * FROM new')
    } catch (err) {
        console.log('not found')
        await sqlpool.query('CREATE TABLE new(id INT AUTO_INCREMENT PRIMARY KEY, nid VARCHAR(16), uid VARCHAR(16), upw VARCHAR(128), salt VARCHAR(128))')

    }
}
tableinit();

app.get('/', (req, res) => {
    res.render('main')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/signup', (req, res) => {
    
    res.render('signup')
})

app.get('/update', (req, res) => {
    res.render('update')
})


app.post('/signup', async (req, res) => {
    try {
        const {nid, uid, upw} = req.body;
        console.log(nid,'nid')
        const salt = await createSalt();
        const pwhash = await createHash(upw, salt);
        const [[data]] = await sqlpool.query('SELECT * FROM new WHERE uid=?', [uid]);
        console.log(data)
        if(data) return res.json({state : 400, message : 'signup error'});
        await sqlpool.query('INSERT INTO new(nid, uid, upw, salt) VALUES (?, ?, ?, ?)', [nid, uid, pwhash, salt])
        res.json({state : 200, message : 'signup compelted'})
    } catch (err) {
        console.log(err)
        res.json({state : 500, message : 'server error'})
    }
})

app.post('/login', async (req, res) => {
    try {
        const {uid, upw} = req.body;
        const [[data]] = await sqlpool.query('SELECT * FROM new WHERE uid=?', [uid])
        if(!data) return res.json({state : 401, message : '아이디를 확인해주세요'});
        const pwhash = createHash(upw, data.salt);
        console.log(pwhash , data.upw)
        console.log(pwhash === data.upw)
        if(pwhash === data.upw){
            res.cookie('login-token', data.uid, {maxAge : 10 * 60 * 60* 1000, httpOnly : true})
            res.json({state : 200, message : '로그인 성공'})
        }
        else {
            res.join({state : 402, message : '비밀번호가 틀렸습니다'})
        }

    } catch (err) {
        console.log(err)
        res.json({state : 500, message : 'error'})
    }
})


const cookieparser = (req, res, next) => {
    if(!req.headers.cookie) return res.redirect('/login');
    const cookie = req.headers.cookie.split('=')[1];
    req.cookie = cookie;
    next()
}

app.delete('/delete', cookieparser, async (req, res) => {
    console.log(req)    
    const uid = req.cookie;
    const data = await sqlpool.query(`DELETE FROM new WHERE uid=${uid}`)
    console.log(data)
})

app.put('/update',cookieparser ,async (req, res) => {
    try {
        
        const {nid} = req.body;
        const uid = req.cookie;
        console.log(nid, uid,'hi')
        const [data] = await sqlpool.query(`UPDATE new SET nid=${nid} WHERE uid=${uid}`)
        console.log('update', data)
        res.json({state : 200, message : 'update completed'})
    } catch (error) {
        console.log(error)
    }
})
app.get('/mypage', cookieparser, (req, res) => {
    res.render('mypage', {username : req.cookie})
})

app.listen(3000, () => {
    console.log('server on~')
})