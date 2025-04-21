


const {User, Post, Category} = require('../models/config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userController = {
    async signup(uid, upw, name) {
        console.log()

        try {
            if((uid.trim() !== '') && (upw.trim() !== '') && (name.trim() !== "")){
                // secret key while hashing password
                const upwhash = bcrypt.hashSync(upw, 10);
                await User.create({uid, upw : upwhash, name});
                return {state : 200, message : '회원 가입 성공'}
            }
            return {state : 401, message : '빈값이 없이 작성하세요요'}
        } catch (error) {
            return {state : 400, message : error}
        }
    },
    async login (uid, upw) {
        try {
            // jwt에 담을 유저 정보는 아이디, 이름, 계정의 권한
            // {계정의 권한 : 1 , 아이디 : soon, 이름 : '순현'}
            // jwt 보안 안정성 쿠키로 로그인 유지지
            // 객체에 ? 옵션 체이니 : 키값이 있으면 호출 없으면 접근 안한다 data?.dataValues.upw
            const data = await User.findOne({where : {uid}}) 
            const userdata = bcrypt.compareSync(upw, data.dataValues.upw)
            console.log(userdata)
            if(!data) return ({state : 401, message : '일치하는 유저가 없습니다.'})

            if(data && userdata) {
                const {dataValues : {uid, name, grade}} = data;
                console.log(data, userdata)
                const token = jwt.sign({uid, name, grade},process.env.SECRET_KEY, {expiresIn : '1h'})
                return ({state : 200, message : '로그인 성공', token})
            }
        } catch (error) {
            console.log(error)
            return ({state : 402, message : error})
        }
    },
    async admin(uid) {
        const data = await User.update({grade : 2}, {where : {uid : '1'}})
    }
}

const adminCategory = {
    async admin(name) {
        try {
            
            await Category.create({name})
            console.log(uname, 'name')
            return {state : 200, message : 'admin 가입 성공'}
        } catch (error) {
            return {state : 400, message : error}
        }
    }
}



module.exports = {userController, adminCategory}