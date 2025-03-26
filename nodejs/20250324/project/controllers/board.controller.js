

const {Posts} = require('../models/config');

const post = {
    async create(content, user_name) {
        try {
            console.log(content, user_name, 'ssss')
            await Posts.create({content, user_name})
            return {state : 200, message : '게시글 작성 성공'}
        } catch (error) {
            return {state : 400, message : error}
        }
    },
    async postSelectAll() {
        try {
            // const data = await Posts.findAll({where : {id : 'soon'}});
            const data = await Posts.findAll();
            return {state : 200, message : '천체 조회 성공', data}
        } catch (error) {
            return {state : 400, message : error}
        }
    }
}

module.exports = post;