

// const express = require('express').router();
// // const temp = express.router();
// const router = express()

const router = require('express').Router();
// const router1 = require('express');
// const router = router1();

router.get("/", (req, res) => {
    res.render("board")
})

// board/create 요청을 하면

router.post("/create", (req, res) => {
    res.send("안녕")
})
module.exports = router;
