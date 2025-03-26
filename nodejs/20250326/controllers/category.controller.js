


const {Category} = require('../models/config')


// class Message {
//     constructor(state, message) {
//         this.state = state;
//         this.message = message;
//     }
// }

const categoryController = {
    async create (name, uid) {
        try {
            await Category.create({name, user_id : uid})
            return {state : 200, message : '유저 등록 환료'}
           
        } catch (error) {
            return {state : 400, message : error}
        }
    },
    async selectAllPageNation (index) {
        try {
            // 페이지네이션 구현했다 가정하면
            // 2 번 누르면 5 개씩 보여주고 있다
            // 2 를 누루면 5 개를 재외하고 아이템을 보여주면 된다
            // limit 는 몃개 보여줄지
            // 1 2 3 4 5 6 7 8 9 10
            const data = await Category.findAll({
                limit : 5,   // 5 개 가져온다
                offset : 5 * (index - 1), // 0 5 10 15
                // order : [['id', 'ASC']]
                // order : [['createAt', 'ASC']]
            });
            const counter = await Category.count();
            return {state : 200, data, count : counter}
        } catch (error) {
            return {state : 400, message : '카테고리 조회 실패'}
            
        }
    },
    async selectAll() {
        try {
            const data = await Category.findAll();
            return {state : 200, data}    
        } catch (error) {
            return {state : 400, message : error}
        }
    }
}

module.exports = categoryController;