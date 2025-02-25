


const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();


app.use(express.static(path.join(__dirname, "public")));
console.log(__dirname)
app.get("/", (req, res) => {
    const filePath = (path.join(__dirname, "views", "main.html"));
    fs.readFile(filePath, "utf8", (err, data) => {
        if(err) {
            return res.send("404 페이지 존재하지 않는다.")
        }
        else {
            res.send(data);
        }
    })
})

app.listen(3000, () => {
    console.log("서버 열림..")
})
