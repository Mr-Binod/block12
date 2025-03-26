


const router = require('express').Router();
const {upload} = require('../lib/imgupload')
const {UserNickselectall, login, signup, logintoken} = require('../controllers/user.controller')
  
router.get('/', (req, res) => {
    res.render('login');
})
router.get('/signup', (req, res) => {
    res.render('signup');
})


router.get('/mypage', logintoken, (req, res) => {
    const {nick, imgpath} = req.user;
    console.log(imgpath)
    res.render('mypage', {nick, imgpath})
})

router.get('/login', (req, res) => {
    res.render('login')
})

// -----------------backend server--------------
// 단순한 데이터를 요청하는 api 화면을 보여주는거 아니다

// rou
    // res.json(data);


router.post('/login', async (req, res) => {
    const {uid, upw} = req.body;
    const data = await login(uid, upw);
    if(data.state === 200) {
        const {token} = data.user;
        res.cookie('login-token', token, {
            maxAge : 10 * 60 * 60 * 1000,
            httpOnly : true
        
        })
        res.json({state : 200, message : data.message});
    }
    else {
        res.json({state : data.state, message : data.message});
    }
} )


module.exports = router;


// exports = {}ter.post('/signup', async (req, res) => {
//     const {uid, upw} = req.body;
// })

router.post('/signup', upload.single('image'), async (req, res) => {
    const {uid, upw, name, nick} = req.body;
    console.log(uid, upw, name, nick)
    console.log(req.file)
    const {path} = req.file;
    const data = await signup(uid,upw,name,nick,'/'+path);
    console.log(uid, upw, name, nick)
    console.log(data, 'iii')
})
