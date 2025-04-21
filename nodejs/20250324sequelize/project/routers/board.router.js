

const router = require('express').Router();
const boardController = require('../controllers/board.controller')

router.get('/', () => {
    res.render('boardpage/main');
})

router.get('/create', (req, res) => {
    res.render('boardpage/create');
})

////////////////////////////////// 데잉터 로직

router.post('/create', async (req, res) => {
    try {
        
        const {textvalue, username} = req.body;
        // const username = req.header.cookie.split('=')[1]; // [user, soon] 
        await boardController.create(textvalue, username)
        res.json({state : 200, message : '글 추가 성공'})
    } catch (error) {
        res.join({state : 400, message : '게시판 추가 컨트롤러 에러'})
    }
})

router.get('/contentGetAll', async (req, res) => {
    try {
        const data = await boardController.postSelectAll();
        res.json(data)
    } catch (error) {
        res.json({state : 400, message : '게시글 조회 컨트롤러 에러'})
    }
})

module.exports = router;