const categoryController = require('../controllers/category.controller');
const postController = require('../controllers/postcontroller');
const { authmiddleware } = require('./middleware');


const router = require('express').Router();




router.get('/', (req, res) => {
    res.render('boardpage/main');
})

//  /board/list/:params

// board/list/1
// category=1
// req.params === {category : 1}
// host:3000/board/list
// host:3000/board/list1
router.get('/list/:category', async (req, res) => {
    console.log(req.params)
    const {category} = req.params;
    const {data} = await postController.categoryPostSelectAll(category)
    res.render('boardpage/list', {data});
})

router.get('/create',authmiddleware,async (req, res) => {
    const {data} = await categoryController.selectAll()
    const categorydata = data.map(el => el.dataValues);
    console.log(categorydata)
    res.render('boardpage/create', {data : categorydata})
})

router.post('/create', authmiddleware, async (req, res) => {
    console.log('check')
    const {name, uid} = req.user
    const {category, title, content} = req.body;
    console.log({category, title, content})
    const data = await postController.create(category, title, content, name, uid);
    res.json(data)
})


module.exports = router;