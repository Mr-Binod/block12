
// TCP 서버 구현

// net 내장 모둘
// http 보다 이전 내용의 library

// 모듈

const net = require("net");
const PORT = 3000;

// 서버 객체 생성
// 요청을 받았을때때 호출할 함수의 내용을 매매개변수로 전달
const server = net.createServer((client) => {
    // console.log(" client", client , "client2")
    // client 가 서버에 접속을 콜백함수 실행
    // 요청의 데이터를 받으면 
    //  바이너리 데이터 형식의 데이터를 받는다
    // utf8 의 형식으로 문자열 인코딩
    client.setEncoding("utf8");
    // data 는 client 에서 메시지를 받았을떄 요청을 받았을때


    // 데이터의 설명의 부분이 요청 해더에 포함된다
    // GET, POST  기본적인 방식
    // GET 는 값을 조회할 용도로 사용하는 방식 민갑한 데이터는 GET 요청에 포함시키지 말자 게시글의 내용만 조회할때
    // POST 는 값의 조회용도 뿐만 아니라 값을 전달하는 목적도 가지고 있는 방식 안전하게 값을 전달하는 방식

    // 이 문자열을 객체로 파싱한 내용이 요청 객체
    // 헤더의 내용에서 중요한 값들 요청 방식과 컨텐츠의 타입
    // index 이런식으로 요청 경로에 따라서 어떤 내용의 데이터를 요청했는지 를 판별한다
    //// GET /index HTTP/1.1   // 요청 방식은 GET의 방식 http 버전은 1.1 버전을 사용하고 있다.
    // 1.1 버전은 지속적인 연결을 할수있게 되었다. 캐시 작업 인증 에러처리등의 기능이 개선됨
    // 호환성 비교적으로 간단하게 구현이 가능해서 가장 큰 이유는 1.1 을 사용하면서 굳이 2 버전을 사용할 이유가 없기때문에
    // 엿날에 만들어진 브라우저들은 2 버전을 지원하지 못하는 경우가 있을수 있다

    // Host: localhost:3000  // 요청을 보낸 host 의 주소와 포트   서버는 요청을 허용한 클라이언트에서 요청을 보냈는지
    // Connection: keep-alive  
    // sec-ch-ua: "Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"
    // sec-ch-ua-mobile: ?0
    // sec-ch-ua-platform: "Windows"
    // Upgrade-Insecure-Requests: 1
    // User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0   
    // Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
    // Sec-Fetch-Site: none
    // Sec-Fetch-Mode: navigate
    // Sec-Fetch-User: ?1
    // Sec-Fetch-Dest: document
    // Accept-Encoding: gzip, deflate, br, zstd
    // Accept-Language: en-US,en;q=0.9,ko;q=0.8


    client.on('data', (data) => {
        console.log(data);
        
        // 1 요청 1 응답
        const body = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>안녕</div>하세요
    <ul>
        <li>item</li>
        <li>item</li>
        <li>item</li>
    </ul>
</body>
</html>`

        // 서버에서 client 에게 응답 헤거
        // 응답을 할때 숫자로 표현한 상태의 내용
        // 100 
        // 200 성공
        // 300 redirect 요청 응당 요청 응답
        // 400 404 실패
        // 500 서버가 에러 발생
        const resHeader = `HTTP/1.1 200 ok
Content-type : text/html
Content-length : ${body.length}

${body}`
        // 브라우저의 화면에 받은 데이터를 작성하는 메서드
        client.write(resHeader);

        // end 메서드는 응답을 하고 종료 4-way-handshake
        client.end()
    })
})

server.listen(PORT, () => {
    console.log("서버 잘 열림");
})