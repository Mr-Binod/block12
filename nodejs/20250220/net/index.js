

// const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log(req);
//     console.log(res);
//     res.setHeader("Content-type", "text/plain; charset=utf-8");
//     // const data = "";
//     // const temp = data.indexOf("/shop");
//     // const length = "/shop";
//     // const temp2 = data.substr(temp, length)
//     if(req.url === "/") {
//         res.end("여기는 메인 페이지");
//     }
//     else if(req.url === "/shop") {
        
//         res.end("상품 페이지")
//     }
//     console.log(res);
// })
// // GET / HTTP 1.1
// server.listen(3000, () => {
//     console.log("서버가 잘 열렸어");
// })

// const net = require("net");

// const server = net.createServer((client) => {
//     client.setEncoding("utf8")
//     client.on("data", (data) => {
//         console.log(data);
//     })
// })

// server.listen(3000, () => {
//     console.log("서버 열림")
// })

const net = require("net");
const { request : {getRequest}} = require("./lib/request")
// {request : { getRequest }}
const getResponse = require("./lib/response")
const server = net.createServer((client) => {
    // client.setEncoding("utf8")
    let buffer = Buffer.alloc(0); // buffer 를 사용할 변수로 정의만 해놓을것
    client.on("data", (chunk) => {
        console.log(chunk, "chunk");
        // concat 바이너리 데이터를 이어 붙인다. [0, 1, 2] 0 1 2
        buffer = Buffer.concat([buffer, chunk]);
        const req = getRequest(buffer);
        const res = getResponse(client, req);

        // 요청 경로에 따라서 사용자가 필요한 데이터를 응답 하는 백엔드 일
        // API 문서 어떤 경로에 요펑을 보내면 어떠한 데이터의 형식과 데이터의 타입을 받을수 있는지
        // 프롱트 엔드와 백엔드와 같이 작업을 할건데
        // 백엔드가 문서를 만들어서 프론트엔드에서 전달


        if (req.header.startLine.url === "/") {
            // console.log("루트 경로로 요청햿고 데이터는 1")
            res.send("index");
        }
        else if(req.header.startLine.url === "/boardData") {
            // console.log("/boardData 경로로 요청 받았고 게시글 데이터 응답")
            res.notFound("에러 페이지");
            
        }
        else {
            res.notFound("에러 발생");
        }

        console.log(req);
    })
})

server.listen(3000, () => {
    console.log("서버 열림")
})
