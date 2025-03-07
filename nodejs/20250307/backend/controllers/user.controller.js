const { userFindUid,userCreate } = require("../models/user");



exports.signup = async (req, res) => {
    const {uid, upw} = req.body;
    
    const isSignup = await userFindUid({uid});
    if(isSignup) {
        return {state : 201, message : '중복된 로그인 입니다.'}
        // 401, 403, 404 는 사용하면 안됩니다 error  state 본인 정할수 있습니다
    }
    else {
        userCreate({uid, upw})
        return {state : 200, message : '가입 성겅'}
    }
}






