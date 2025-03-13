



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
const isFile = fs.statSync(findPath).isFile();

let b = 12;
b = b.toString(2).padStart(8, "0"); // 2 진수 8 bit 으로 변환
// console.log(" client", client , "client2")
// client 가 서버에 접속을 콜백함수 실행
// 요청의 데이터를 받으면 
//  바이너리 데이터 형식의 데이터를 받는다
// utf8 의 형식으로 문자열 인코딩
client.setEncoding("utf8");

const temp = parseInt(binary.substr(i, 8), 2)


// app.set("views", path.join(__dirname, "page"));




const createSalt = () => {
    return new Promise ((res, rej) => {
        crypto.randomBytes(32, (err, result) => {
            if(err) return rej(err)
            res(result.toString('hex'));
        })
    })
}

const createHash = (upw, salt) => {
    const data = crypto.pbkdf2Sync(upw, salt, 100000, 32, 'sha256')
    console.log(data, data.toString('hex'))
    return data.toString('hex');
}

const pwHash = bcrypt.hashSync(upw, 10);

const passwordcheck = bcrypt.compareSync(upw, data.upw);