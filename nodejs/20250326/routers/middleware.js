
const e = require('express');
const jwt = require('jsonwebtoken')

// 로그인 검중 미들웨어어

exports.authmiddleware = async (req, res, next) => {
    try {
        
        console.log(req.headers.cookie)
        if(req.headers.cookie) {
            const user = req.headers.cookie.split('=')[1];
            const decoded = jwt.verify(user, process.env.SECRET_KEY)
            if (decoded) {
                req.user = decoded;
                next();
            }
            else {
                req.admin = false;
                next();
            }
        }else {
            res.json({state : 401, message : '카태고리 전입입'})
        }
    } catch (error) {
        res.redirect('/user/login')
    }
}   

// admin 유저 컴중 미들웨어

exports.adminmiddleware = (req, res, next) => {
    try {
        
        console.log(req.headers.cookie)
        if(req.headers.cookie) {
            const user = req.headers.cookie.split('=')[1];
            const decoded = jwt.verify(user, process.env.SECRET_KEY)
            if (decoded.grade === 2) {
                req.user = decoded;
                req.admin = true;
                next();
            }
            else {
                req.user = decoded;
                req.admin = false;
                next();
            }
        }
    } catch (error) {
        res.redirect('/user/login');
        res.json({state : 400, message : 'admin 계정 검중 실패'})
    }
}  
