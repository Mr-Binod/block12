


const router = require("express").Router();
const { signup, login } = require("../controllers/user.controller");//{signup}



// 요청 경로는  /user
// 로그인 페이지
console.log(router, "router");
// GET /login HTTP/1.1
router.get('/login', (req, res) => {
    res.render('user/index');
})

// user/signup
router.get('/signup', (req, res) => {
    res.render('user/signup')
})

// POST /login HTTP/1.1
// 로그인 로직 작성
router.post('/login', (req, res) => {
    login(req, res);
})

// 회원가입 로직 작성
router.post('/signup', (req, res) => {
    signup(req, res);
})

module.exports = router;

// 순환참조 : circular reference