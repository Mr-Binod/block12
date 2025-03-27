
const router = require('express').Router()



router.get('/', async(req, res) => {
    res.render('main')
})
router.get('/login', async(req, res) => {
    res.render('login')
})
router.get('/signup', async(req, res) => {
    res.render('signup')
})
router.get('/user/main', async(req, res) => {
    res.render('usermain')
})


module.exports = router