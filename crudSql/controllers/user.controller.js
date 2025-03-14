const { Createuser, Checkid, Login } = require("../models/user")

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



const Logincheck = async (uid, upw) => {
    const data = await Login(uid);
    console.log(data,'data')
    if(!data) return {state : 401, message : 'check your id'}
    const checkpw = bcrypt.compareSync(upw, data.upw);
    if(!checkpw) return {state : 401, message : 'check your password'}
    const{nick, imgpath} = data;
    const jwttoken = jwt.sign({nick, imgpath}, process.env.TKN, {expiresIn : '10m'})
    return ({state : 200, message : 'login successful', token : jwttoken})
}


const Create = async (uname, nick, uid, upw, gender,imgpath) => {
    // console.log('l',uname, nick, uid, upw, gender,imgpath)
    try {
        const [id] = await Checkid(uid);
        console.log(id)
        if(id) return {state : 401, message : 'id not available'}
        const pwhash = bcrypt.hashSync(upw, 10);
        const data = await Createuser(uname, nick, uid, pwhash, gender,imgpath)
        console.log(data,'asdf')
        return data;
    } catch (error) {
        return (error)
    }
}

const logintoken = (req, res, next) => {
    const data = req.headers.cookie.split('=')[1];
    console.log(data, 'login token');
    const userdata = jwt.verify(data, process.env.TKN);
    req.user = userdata;
    next()
}



module.exports = {Create, Logincheck, logintoken}







