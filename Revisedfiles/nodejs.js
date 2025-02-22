



const fs = require("fs");
// 비동기적으로 실행 할때
fs.exists("./Test",(e) => {
    console.log(e)
})
// 동기적으로 호출할수있는 메서드 sync
const folder = fs.existsSync("./Test");
const text = fs.mkdirSync("./Test");
const text2 = fs.writeFileSync("./Test/text.txt", str);
const text3 = fs.readFileSync("./Test/text.txt", "utf8");
const state = fs.statSync(mypath);
const fileSize = state.size;
console.log(fileSize, "filesize");

fs.rm("./Test", {recursive : true}, (err) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log("폴드가 잘 삭제됬어")
    }
})

// node .\Server.js  Sync 는 동기 방법법
const file = fs.readFileSync(path.join(__dirname, "..", "views", filename + ".html"), "utf8");
const http = require("http");
const server = http.createServer((req, res) => {
    res.end("server")
})
server.listen(3000, () => {
    console.log("성공했어")
})
const videoStream = fs.createReadStream(mypath, {start, end});
videoStream.pipe(res);