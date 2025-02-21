



// 서버 로직을 만들어보자

// 내장 모듈을 사용해서 서버 로직을 작성 
// 네트워크에서 요청과 응답을 처리할때는 규칙 약속 정핵서 데이터를 주고받는다
// `프로토콜`
// 데이터가 어던 타입의 컨텐츠를 전달하는지 메세지로 알려주고

// net 이라는 라이브러리로 메세지내용을 보면서

// 서버 호직
// nodejs에ㅐ서 내장 모듈을 제공해준다

const http = require("http")  // hyper text transfer protocol

// 서버 객체를 생성
// createServer 
// 이벤트 구독 서버가 정상적으로 대기 상태에 있고 클라이언트가 접속 했을떄
const server = http.createServer((req, res) => {   // website search is called req (요청 보낸거) port is path to request to server 경로
    // 매개변수의 순서로는 펏번째가 요청의 객체
    // 두번째 매개변수는 응답의 객체
    res.end("server") // 응답을 주고 종료
})

// 시스템 예약 포트 외의
// 1025 ~ 65535 안에서 포트번호를 사용할수 있다.
const PORT = 3000
// 개발할떄 많이 사용하는 포트 번호는 3000, 8000, 8080  port

// server 대기 상태 이벤트가 발생할떄까지 기다리겠다
server.listen(PORT, () => {
    // 서버가 정상적으로 열렸을떄
    console.log("잘 실행 됬어~");
})
