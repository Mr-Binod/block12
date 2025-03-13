


const {userNickselectall, userSelectuid, createuser} = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserNickselectall = async () => {
    // 유저의 닉네임을 전채 조회할때 해당 기능 추가내용은 여기
    try {
        
        return await userNickselectall();
    } catch (error) {
        return error;
    }
}

const login = async (uid, upw) => {
    try {
        const data = await userSelectuid(uid);
        if(!data) return {state : 401, message : 'not found.'}
        const passwordcheck = bcrypt.compareSync(upw, data.upw);
        if(!passwordcheck) return ({state : 402, message : 'wrong password'})
        const {nick, imgpath} = data;
        const jwttoken = jwt.sign({nick, imgpath}, process.env.TOKEN_KEY, {expiresIn : '10m'});
        console.log({state : 200, message : 'login successful', jwtoken : jwttoken})
        // {
        //     state: 200,
        //     message: 'login successful',
        //     jwtoken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrIjoiaGVsbG8iLCJpbWdwYXRoIjoiaW1nIiwiaWF0IjoxNzQxODQyNTIxLCJleHAiOjE3NDE4NDMxMjF9.Q8nIuTAu62lmuvtj-tRmFSqTUgxEi-SF2RarCcahfVs'
        //   }
        return ({state : 200, message : 'login successful', user : {token : jwttoken, userdata : {nick, imgpath}}})
    } catch (error) {
        return error;
    }
}

const signup = async (uid, upw, name, nick, imgpath) => {
    try {
        const issignup = await userSelectuid(uid);
        if(issignup) return {state : 400, message : 'id not available'}
        const pwHash = bcrypt.hashSync(upw, 10);
        // /public/img/imgname
        const data = await createuser(uid, pwHash, name, nick, imgpath);
        return data;
    } catch (error) {
        return error;
    }
}

// signup('soon', '123','moon', 'hello', 'img');

// login('soon', '123')

// async function foo() {
//     const data = await UserNickselectall();
//     console.log(data);
// }

// foo();
// async function foo() {
//     const data = await signup('soon', '123','moon', 'hello', 'img');
//     console.log(data);
// }

// foo();

const logintoken = (req, res, next) => {
    const data =  req.headers.cookie.split('=')[1];
    const userdata = jwt.verify(data, process.env.TOKEN_KEY);
    req.user = userdata;
    next();
}

module.exports = {UserNickselectall, login, signup, logintoken}