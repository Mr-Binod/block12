

const {Users} = require('../models/config')



const user = {
    async create (name, nickname, createAt) {
        try {
            await Users.create({name, nickname, createAt})
            return {state : 200, message : '유저 등록 완료'}
            // _02315151 이순
        } catch (error) {
            return{state : 400, message : error};
        }
    },
    async userSelectAll () {
        try {
            const data = await Users.findAll();
            return {state : 200, message : '조회 성공', data}
        } catch (error) {
            return {state : 400, message : error}
        }
    }
}


module.exports = user;