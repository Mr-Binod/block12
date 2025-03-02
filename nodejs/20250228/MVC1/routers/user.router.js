




const router = require("express").Router();
const {signup, login, edit, deleteid} = require("../controllers/user.controller")

router.get("/login", (req, res) => {
    res.render("user/login")
})
router.get("/signup", (req, res) => {
    res.render("user/signup")
})

router.get("/edit", (req, res) => {
    console.log(req.query.index)
})

router.get("/delete", (req, res) => {
    deleteid(req, res);
})
router.post("/signup", (req, res) => {
    signup(req, res);
})

router.post("/login", (req, res) => {
    login(req, res);
})

router.post("/edit", (req, res) => {
    console.log(req.query.index, "post")
    edit(req, res);
})



module.exports = router;