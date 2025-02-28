

const express = require("express");

const userRouter = require("./routers/user.router")
const app = express();

app.set ("view engine", "ejs")
// GET / HTTP/1.1

// body
// input name {uid : "soon"}
// input name {uid : [1,2], upw : {}}  // 이런 일이 없어니까..

app.use(express.urlencoded({extended : false}));
// (express.urlencoded({extended : false}) === 반환값 함수
// 어떤 함수냐? 핸들러 함수
// 요청 메시지가 발생핶을떄
//  `urlencoded`
// app.use ((req, res, next) => {
//     // req.안의 내용에서 body 내용을 가지고
//     // JSON.parse
//     // body key 추가하면서 
//     req.body = {};
//     next();
// }) 

// debugging
app.use("/user", userRouter);

app.listen(3000, () => {
    console.log("server on~")
})