

const router = require('express').Router();

const categoryController = require('../controllers/category.controller');
const {adminmiddleware} = require('./middleware')

router.get('/category1',async (req, res) => {
    if(req.admin) return res.json({state : 403, message : 'admin 계정 검중 실패'})
    const {index} = req.query;
    console.log(index)
    const categorydata = await categoryController.selectAllPageNation(index);
    console.log(categorydata, categorydata.data)
    // if(!categorydata.data) 
    const data = categorydata.data?.map((el => el.dataValues))
    res.render('admin/category1', {data : data, count : categorydata.count})
})

module.exports = router;