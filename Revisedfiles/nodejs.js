



const fs = require("fs");
// 비동기적으로 실행 할때
fs.exists("./Test",(e) => {
    console.log(e)
})
// 동기적으로 호출할수있는 메서드 sync
const folder = fs.existsSync("./Test");

// node .\Server.js
const file = fs.readFileSync(path.join(__dirname, "..", "views", filename + ".html"), "utf8");
const http = require("http")
const server = http.createServer((req, res) => {
    res.end("server")
})
server.listen(3000, () => {
    console.log("성공했어")
})