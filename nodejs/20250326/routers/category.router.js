const categoryController = require('../controllers/category.controller');
const { authmiddleware } = require('./middleware');


const router = require('express').Router();



router.post('/create',authmiddleware, async (req, res) => {
    const {name} = req.body;
    const {uid} = req.user;
    const data = await categoryController.create(name, uid)
    console.log(name, uid)
    res.json(data);
})
module.exports = router;