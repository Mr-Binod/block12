

# EJS 템플릿 엔진

> 템플릿 엔진은 서버에서 html으 동적으로 만들어서 브라우저에세 응답을 보내 페이지를 렌더링 하는 도구

## 특징
> 자바스크립트 문법을 그대로 사용가능하며 기호를 사용해서 자바스크립트 영역을 표현

```js
//  `${}` 과 비슷하게 <%%> : 기호 파일을 읽어서 내용을 자바스크립트로 호출한다.
<% 코드의 내용 %>


```
> 장점이 랜더링 속도가 브라ㅜㅇ저에서 동적으로 생성하는 방식이 아닌 서버에서 냉ㅇ을 동적으로 만들고 완성된 html 을 응답 하게 떄문에 렌더링 속도가 빠르다.

> nodejs 와도 호환성이 좋다. express 를ㄹ 사용하면서 추가적인 템플릿 엔진 내뇽ㅇ의 메서드를 제공한다.

## 템플릿 엔진은?

> EJS html에서 자바스크립트를 제어해서 동적인 페이지를 만드는게 목적
> 서버사이드 렌더링을 사용할때 사용한다.
> 동적인 HTML 필요성을 느끼게 되고 프론트에서 동적인 웹페이지를 처리하다보니 내용이 무거워질수록
렌더링의 속도가 저하굈고 사용자의 이틸이 생길수 있다.
> 서버사이드 렌더링 (`SSR`) 클라이언트 사이드 렌더링 (`CSR`) 아닌 서버에서 검색을 하는 경우에고 페이지의 완성을 서버측에서 동적인 페이지 완성을 해서 클라이언트에서 응답을 해준다.
> 서버측 자원을 사용하고 클라이언ㅌ의 자원을 줄일수 있다.
> nodejs가 많이 알려지면서 express 같은 라이브러리의 사용이 많아졌고 express 가 버전이 많이 업데이트되면서  EJS 의 내용도 지원하기 시작했다.


## EJS 
```html
<!-- 자바스크립트 문법을 html 에 작성 -->

 <html>
    <header></header>
    <body>
        <div>
            안녕
        </div>
    <body>
</html>
 <html>
    <header></header>
    <body>
        <div>
            <%= name %>
        </div>
    <body>
</html>

<!-- html 파일의 내용을 읽어서 ejs 구문 있는 부분을 해석 코드 내용을 호출한다 -->
<!-- <%= name %>  이 들어간 <%= %> 변수를 html 의 영역에 할당 title이란 변수를 찾아서 값을 전달 -->  

```

```js
const express = require("express");
const app = express();  //server 도 만들고 express 안에 있는 필요한 모듈 반환한다
// app 서버 겍체라는 것은 ? 서버에서 동작할 내용의 상태를 가지고 있다.
// app 서버에서 동작할 내용의 상태를 변경하여 서버의 호직을 제어할쑤 있는 메서드들을 제공한다.
// net 에서 조건문 혹은 라이브러리 형태로 만든 내용들이 모던하게 객체화 되어서 작성이 되어있는것
// EJS 를 사용한다는 객체의 상태를 변경

// set 경로나 설정의 내용을 객체에 추가한다
// set 이라는 구문은 개발을 할때 값을 할당하겠다 업데이트 수정
// 첫번째 매개변수가 key, 두번쨰 매개변수가 value
// 화면을 그리는 render === 이전에 dom 객체로 화면을 구성할 dom 을 동적으로 생성해서 화면을 출력하는 메서드를 만든적이 있는데 이런 한 내용이 포함된 메서드를 제공한다.
// view engine이 key 에 render 함수 호출할때 사용할 엔진의 이름이 할당되어있다
app.set("view engine", "ejs") // templete litereal engine name and can use other engines also
// render 함수를 호출할때 어느 경로를 루트로 서\ㄹ정해서 

// 메서드의 get 은 이전의 get 과 set 은 구분해서 사용한 코드의 내용왁 같다고 보면 안됨
// 이부분의 get 메서드는 요청 메시지의 어느 메서드로 요청을 보냈는지를 제어

// 설명 위해서
// GET /shop HTTP/1.1
// app.get.url = "/"
// if(app.get.url === "/") 
// callback(요청 객체, 응답 객체, 다음 미들웨어 호출);
// callback 함수는 핸들러 함수
// next 다음 핸들러 함수를 호풀하겠다.
app.get("/", (req, res, next) => {
    // 다음 미들웨어 ㅁ함수로 값을 전달
    req.uid = "soon";
    next();
})
app.get("/", (req, res) => {
    // next 가 호출된 이후에 이 미들웨어 핸들러 함수 호출
    console.log(req.uid) === "soon";
})

// POST /shop HTTP/1.1 

// app.post.url = "/"
// if(app.post.url === "/") 
// callback(요청 객체, 응답 객체, 다음 미들웨어 호출);
app.post("/", () => {
    
})

app.listen(3000, () => {
    console.log("server on~");
})

```

## 설치 내용
```sh

npm i express
npm i ejs

npm i express ejs  //한번에 설치할수도 있다 

node version 15 
node version 20
node version 에 따라 라이브러리의 버전이 변경될수 있다

실제로 버전의 정보가 작성되어있는
package-lock.json도 중요한 파일

라이브러의 의존성 내용

라이브러리 버전의 차이다 난다
팀원간에 nodejs 버전을 맞춰서 사용해야한다

```

## UD 수정 삭제 
> 글을 수정하는 페이지
> 삭제버튼은 글 여폐에 배치
> 상세 페이지에 삭제 버튼 수정버튼이 있음

