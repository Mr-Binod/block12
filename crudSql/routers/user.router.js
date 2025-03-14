
const router = require('express').Router();
const path = require('path');
const {upload} = require('../lib/imgupload');
const {Create, Logincheck, logintoken} = require('../controllers/user.controller');
router.get('/login', (req, res) => {

    res.render('login');
})
router.get('/', (req, res) => {
    res.render('main');
})
router.get('/signup', (req, res) => {
    res.render('signup');
})
router.get('/details', logintoken, (req, res) => {
    const {nick, imgpath} = req.user;
    res.render('details', {nick, imgpath});
})
router.get('/update', (req, res) => {
    res.render('update');
})

router.get('/error', (req, res) => {
    const {message} = req.query;
    console.log(message)
    res.render('error', {message})
})


router.post('/login', async (req, res) => {
    const {uid, upw} = req.body;
    const logincheck = await Logincheck(uid, upw);
    console.log(logincheck, 'asdf')
    
    if(logincheck.state === 200) {
        const {token} = logincheck;
        res.cookie('login-token', token, {maxAge : 10 * 60 * 60 * 1000,
            httpOnly : true
        })
        res.json({state : 200, message : logincheck.message})
    }
    else {

        res.json({state : logincheck.state, message : logincheck.message})
    }
})


router.post('/signup', upload.single('image'), async (req, res) => {
    const {path} = req.file;
    const {uname, nick, uid, upw, upw1, gender} = req.body;
    if(upw !== upw1) {
        console.log(req.body, req.file.path, 'ss')
        const data = {state : 405, message : '같은 비밀번호를 입력해주세요'}
        res.json(data)
        return;
        
    }
    console.log('asdfasdf')
    const data = await Create(uname, nick, uid, upw, gender,'/'+path)
    console.log(data,'router')
    res.json(data);
})

router.put('/update', (req, res) => {

})
router.delete('/delete', (req, res) => {

})

module.exports = router;