

const router = require('express').Router();
const {userController, adminCategory} = require('../controllers/user.controller')



router.get('/login', (req, res) => {
    res.render('Userpage/login')
})

router.get('/signup', (req, res) => {
    res.render('Userpage/signup');
})
router.get('/category', (req, res) => {
    res.render('Userpage/category')
})

router.get('/admin', async (req, res) => {
    const uid = 1;
    const data = await userController.admin(uid);
    res.render('Userpage/login')
})

router.post('/category', async (req, res) => {
    const {uname} = req.body;
    const data = await adminCategory.admin(uname)
    res.json(data)
})

router.post('/signup', async (req, res) => {
    const {unamevalue, uidvalue, upwvalue} = req.body;
    // const data = await 
    console.log(unamevalue, uidvalue, upwvalue)
    const data = await userController.signup(uidvalue, upwvalue, unamevalue)
    res.json(data)
})

router.post('/login', async (req, res) => {
    const {uidvalue, upwvalue} = req.body;
    const data = await userController.login(uidvalue, upwvalue)
    // console.log(data,'data')
    // if(data.state === 402) return res.json(data)
    if(data.state === 200) {
        res.cookie('user-token', data.token, {
            maxAge : 10 * 60 * 60 * 1000,
            httpOnly : true
        })
        res.json(data)
    }
    else {
        res.json(data)
    }
})
module.exports = router;