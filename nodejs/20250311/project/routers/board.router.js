const { create, getboard, updateboard, deleteboard } = require('../controllers/board.controller');


const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('main');
})

router.get('/create', (req, res) => {
    res.render('create')
})

router.get('/view', async (req, res) => {
    const data = await getboard();
    console.log(data);
    res.render('view', {data});
})

router.get('/details', (req, res) => {
    let {index} = req.query;
    index = parseInt(index) + 1;
    res.render('details', {index})
})

router.post('/create', async (req, res) => {
    try {  // server가 유지됩니다 
        console.log(req);
        const {titlevalue, contentvalue} = req.body;
        console.log(titlevalue, contentvalue)
        await create(titlevalue, contentvalue);
        res.json({state : 200, message : '글 추가 완료'})
    } catch (error) {
        res.json({state : 400, message : error})
    } 
    // 서버가 종료되지 않고 모니터링을 통해서 운영 배포 수정
})

router.put('/details', async (req, res) => {
    try {
        
        console.log(req.body)
        const {textvalue, index} = req.body;
        console.log(textvalue, index, 'put');
        await updateboard(textvalue, index)
        res.json({state : 200, message : '글 추가 완료'})
    } catch (error) {
        res.json({state : 400, message : error})
    }
})
router.delete('/delete', async (req, res) => {
    
    try {
        const {index} = req.body;
        console.log('delete', index, req.body)
        await deleteboard(index);
        res.json({state : 200, message : '삭제 완료'})
    } catch (error) {
        res.json({state : 400, message : error})
    }
})
module.exports = router;