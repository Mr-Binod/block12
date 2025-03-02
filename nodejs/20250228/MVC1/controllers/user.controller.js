



const {userdata, idcheck, signupidcheck, editusername, deletedata} = require("../models/user");

const signup = (req, res) => {
    const {uname, uid, upw} = req.body;
    const [signupidCheck] = signupidcheck(uid);
    console.log("signup",signupidCheck)
    if(!signupidCheck) {
        userdata(uname, uid, upw);
        res.render("user/login")
    }
    else {
        res.send("id not available")
    }
}

const login = (req, res) => {
    const {uid, upw} = req.body;
    const [isLogin] = idcheck(uid, upw);
    // { uid: '1', upw: '1' } islogin = [ { uid: '1', upw: '1' } ] hhh

    console.log(isLogin, "login");
    if(isLogin) {
        const index = isLogin.index; 
        console.log(typeof(index),index, "ii")
        res.render("user/edit", {index});
    }
    else {
        res.send("아이디와 비밀번호 확인해주세요")
    }
}

const edit = (req, res) => {
    const uname = req.body.uname;
    const i = req.query.index;
    console.log(req.query)
    console.log(i, "i", uname)
    editusername(i, uname);
    res.redirect("./login");
}

const deleteid = (req, res) => {
    const index = req.query.index;
    deletedata(index);
    // res.redirect("./login");
    res.redirect("./login");
}
module.exports = { signup, login, edit, deleteid}