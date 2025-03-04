

const express = require("express");
const boardrouter = require("./routers/board.router");
const path = require("path");
const app = express();

// app.get("/", (req, res, next) => {
//     next();
// }) 
// // app.get("/", (req,res,next)=>{next()},(req,res) => {console.log("안녕")})
// app.get("/", (req, res, next) => {
//     req.user = "날 지나가";
//     next();
// },(req, res) => {
//     res.send(req.user)
// })

app.set("view engine", "ejs");

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/image",express.static(path.join(__dirname, "upload")));
app.use(express.urlencoded({extended : false}));
app.use(boardrouter);

app.listen(3000, () => {
    console.log("server on~")
}) 