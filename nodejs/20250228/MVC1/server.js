


const express = require("express");
const app = express();
const userRouter = require("./routers/user.router");


app.set("view engine", "ejs");
app.use(express.urlencoded({extended : false}))

app.use("/user", userRouter)

app.listen(3000, () => {
    console.log("안녕");
})