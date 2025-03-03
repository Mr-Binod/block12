


# 라우터, MVC 페턴


## 라우터 
> 사용하는 API 의 형태를 목적에 맞게 나눠서 관리하고 유지보수성을 높여서 라우팅 분리
> API 문서를 작성을 한뒤에 라우터를 나눠서 유지보수성과 확장성을 높여서 관리
> 라우터를 사용하는 이유는 코드의 구조화 시키고  유지보수성을 향상 시키기 위해서 사용
> 라우터의 분리의 목적은 기능 별로 파일을 분리해서 코드의 가독성과 유지보수성을 향상 시키는 데에 목적이 있다
> 가장 많이 고려하는

## express로 라우팅 처리

```js
// server.js
const express = require("express");
const router = require("./routers/board.js")
const app = express();
// 서버 로직 즉 생태를 관리하는 객체
// 게시판 관리할 API
// 객체를 미들웨어로 추가
// use (미들웨어)  get post 상관 없이 실행 된다
// 모든 경로 요청에서 처리가 된다
// /board로 요청 보내면 
// /board/create
app.use("/board", router);

// router 쪽에서 처리한다
// app.get('/', () => {

// })

app.get('/', (req, res) => {
    console.log("server on~")
})

app.listen(3000, () => {
    console.log("server on~");
})

// router/board.js
// router/user.js

const router = require("express").Router();
// handler 함수 제공 express  콜백으로 등록할수 있는 router 객체를 제공

// GET / HTTP/1.1
router.get('/', (req, res) => {
    res.send("게식을 출력");
})
router.post('/create', (req, res) => {
    res.send("게식을 출력");
})

module.exports = router;

```

```sh
npm init
npm init -y
npm i express ejs
```

## MVC 패턴을 활용해서 디렉터리를 분리 
> MVC 패턴은 사용자의 인터페이스 UI 와 어플리케이셩 로직을 분리하자. (화면 보여주는 로직과 기능의 로직을 분리하자)
> MVC 이 등장

> MVC 패턴을 사용한 목적성은 모든 사용자 UI 나 비즈니스 로직등의 데이터 처리가 하나의 파일에 작성이 되면 유지보부성을 해치기때문에 문제가 발생했다. 그해서 코드의 구조화를 시켜서 관리를 하기위해서 
> boilerplate(`보일러플레이트` : 자주 사용하는 형태를 정의해놓는것.). 폴더의 구조를 보일러플레이트화 한다

## Model
> 데이터 조작(operation) database
> M 은 Model의 약어 
> 데이터과 관련된 로직을 처리하는 파일을 관리하는 폴저
> 데이터 베이스의 로직을 처라할 파일을 관리하는폴더

## View
> 사용자 UI (client 화면)
> 사용자의 인터페이스 즉 화면 UI 화면의 파일을 관리하는 폴더

## Controller
> 사용자의 기능 호출
> Model 과 View 의 상로작용 데이터의 전달의 과정을 컨트롤 한다
> 데이터의 구조를정의해서 요청을 보내서 응답 데이터의 저장 혹은 조화
> 제어하는 로직을 작성


client(view) <-> controller(repastory business logic, service logic) <-> model

```sh
server.js
-model
    - user.js
    - board.js
-views
    -user
        - user.ejs
        - signup.ejs
    -board
        - main.ejs
        - create.ejs
        - update.ejs

-controllers
    - userController.js  # 사용자 로그인 관련 함수 기능 회워가입 관련 기능
    - boardController.js  # 게시글 들고의 기능 게시글 조회의 기능



// 실습 과제 UD
// 회원 가입 할떄 닉네임을 작성하고
// 닉네임을 수정할수 있는 페이지에서 닉네임 수정
// 회원 탈퇴 요청을 보내면 회원 정보 삭제

// 포트폴리오
// 추가 과제 게시판 주말동안 완벽하게 끝내서 10 시
// 드라이브에 업로드