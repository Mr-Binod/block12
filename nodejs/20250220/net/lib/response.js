


const fs = require("fs");
const path = require("path")

const statemessage = {
    200 : "ok",
    404 : "NOT FOUND",
}
// 200 : 성공의 내용
// 300 : 리다이렉트
// 400 : 클라이언트 이슈
// 500 : 서버의 이슈
// 요청의 다한 응답 메시지를 작성할 함수

// function a () {
//     return function () { 
//     }
// }
const getMessage = (request) => (body, stateCode = 200) => {  // () => return;  () => ()=>{}
    const bodyBuffer = Buffer.from(body); 
    // 요청한 내용의 컨텐츠 타입을 확인을 해야한다
    // content-type
    // 응답을 할떄 요청ㅇ한 내용의 컨텐츠를 응답해줘야 하니
    // 내가 이 컨텐츠를 응답했어
    const ContentType = request.header.headers.Accept.indexOf("text/html") !== -1 ? "text/html" : request.header.headers.Accept;
    // HTTP/1.1 200 ok
    // 응답 메시지 생성
    return `HTTP/1.1 ${stateCode} ${statemessage[stateCode]}
Connection : Close
Content-type : ${ContentType}; charset=UTF-8
Content-Length : ${bodyBuffer.length}

${body}`
}
/*
    const temp = getMessage();
    temp = (body, stateCode = 200) => {
        const bodyBuffer = Buffer.from(body);
    }
    temp("123") === body = 123, stateCode = 200
*/
// 클라이언트에게 응답할 객체를 최종 완성
    const getResponse = (socket, request) => {
    // msg 매개변수로 body 내용과 상태코드를 두가지를전달하면 응답 메시지를 반환하는 함수 생성
    const msg = getMessage(request);

    // 응답의 내용을 가지고 있을 객체
    return {
        notFound : (body) => {
            // 잘못된 요청을 했을떄 응답할 메서드
            const errorMessage = msg(body, 404);
            socket.write(errorMessage);
            socket.end();
        },
        send : (filename) => {
            // 응답을 하고 종료
            // readFileSync 비동기 처리를 해서 동기적으로 호출한다
            // 파일의 경로를 전달하면 파일의 내용을 가져온다
            // 두번째 매개변수는 encoding 방식

            // 파일의 내용을 가져오는동안 기다린다
            // readFile 비동기 함수

            // 경로를 작성할때 제공하는 내장 모듈이 있다.
            // path.join("./page", "main", "..", "detail");
            // ./page/main/detail
            // 폴드의 경로를 만들어중떄 메서드를 제공한다

            // nodejs 에서 제공하는 전역 변수 
            // __dirname : 현재 파일의 폴더따지의 경로를 제공
            const file = fs.readFileSync(path.join(__dirname, "..", "views", filename + ".html"), "utf8");
            socket.write(msg(file));
            socket.end();
        },
 
    }
}

// module.exports === {}  in initial state object
// module.exports === f()  함수의 값을 exports

module.exports = getResponse;
