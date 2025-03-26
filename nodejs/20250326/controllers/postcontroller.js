


const {Post, Category} = require('../models/config')


const postController = {
    async create (category_id, title, content,user, user_id) {
        try {
            await Post.create({category_id, title, content, user, user_id});
            return {state : 200, message : '글 추가 완료'}
        } catch (error) {
            return {state : 400, message : error}

        }

    },
    async categoryPostSelectAll (name) {
        try {
            const [data] = await Category.findAll({where : {name}, include : [Post]})
            let postData;
            if(data) {
                postData = data.Posts.map(el => el.dataValues)
            }
            console.log(postData)
            return { state : 200, data : postData }
        } catch (error) {
            console.log(error)
            return { state : 400, message : error }
        }
    }
}


module.exports = postController;