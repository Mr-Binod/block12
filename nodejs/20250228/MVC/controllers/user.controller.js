


// business logic 작성
// 유저의 회원가입과 로그인의 로직을 작성

// view -> controller -> model

const { log } = require('console');
const User = require('../models/user');
// User = {signupUser, selectUser, selectUserId};

const signup = (req, res) => {
    // 미들웨어로 
    const{uid, upw} = req.body;
    console.log(uid)
    // 요청 객체 응답 객체를 받아서 처리하는 로직
    // 조건문 처리 로직
    // 유저가 회원가입을 할수 있는지 체크
    // id 가 동일한 유저는 있을수 없으니?
    // 비즈니스 로직에서 처리를 해서
    // 입력한값이 정해진 정규식에 맞게 작성된 내용인지 한번더 체크
    const [isSign]= User.selectUserId(uid) // 중복된 값이 없으니
    // {uid : "123", upw : "456"};
    // const isSign= User.selectUserId(uid) // 중복된 값이 없으니
    console.log(isSign); // true [] 니까
    if(!isSign) {
        User.signupUser(uid, upw);
        res.redirect('/user/login'); // 회원가입 완료 되면 로그인 페이지로
    }
    else {
        res.send("아이디가 중복됩니다");
    }
}

const login = (req, res) => {
    const {uid, upw} =req.body;
    // [] undefined
    // [uid : "soon", upw : "123"]
    //  {uid : "soon", upw : "123"}
    console.log("hiii")
    const [isLogin] = User.selectUser(uid, upw);
    // { uid: '1', upw: '1' } islogin = [ { uid: '1', upw: '1' } ] hhh
    console.log(isLogin, "islogin")

    // uid 랑 upw
    if(isLogin) {
        res.send("로그인 성공")
    }
    else {
        res.send("아이디 비밀번호 확인하세요")
    }
}



module.exports = { signup, login };