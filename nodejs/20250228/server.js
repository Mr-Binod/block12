


const express = require("express");
const boardRouter = require("./routers/board.router")
const app = express();

app.set("view engine", "ejs");

// 메서드와 경로에 따라서 핸들러함수르 호출하는
// 핸들러 함수 
console.dir(boardRouter)

app.use("/board", boardRouter);

app.get("/", (req, res) => {
    res.render("main")
})

app.listen(3000, () => {
    console.log("server on~");
})