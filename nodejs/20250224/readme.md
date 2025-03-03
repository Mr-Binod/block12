


# Express

> node js 환경해서 프레임워크형태나 라이브러리를 사용해서
> 서버의 API 를 쉽게 만들수 있다.

## 장점
> 코드의 간결성 최소의 코드로 서버로직을 작성할수 있다
> 미들웨어 사용도 간단해진다, 요청과 응답 간에 기능을 추가
> 라우팅의 코드 간결성 API 를 쉽게 구성할수 있다
> 템플릿 엔진 지원 서버측에서 문자열로 페이지로 구성하고 자바스크립트 영역에 내용을 포함시킨뒤뒤 페이지를 환성해서 응답을 해주는 엔진.


## express 설치
```sh

# package.json
# 조기화
# package.json 내가 작업하는 프로제ㄱ트의 내용
# 어떤 의존성 라이브러리 

express
ejs
mysql

# npm i [설피할 라이브러리]
# npm 배포가 괴어있는 라이브러리를 설치한다
# npm uninstall 설치한 라이브러리 제거
# npx 설치한 node 에 내장 된 명령어를 실행
npm i express;


# 여러 개의 라이브러리를 설치 
npm i express ejs mysql;

```
```js
```
## 미들웨어는 요청과 응답간에 사이에 기능을 추가할수 있다

```js
const express = require("express");
const app = express();


// 요청이 들어오면 기능을 실행시키는 것
// 첫번째 미들웨어가 먼저 호출된다. 코드의 순서 중요
// 로그인 인즈 관련된 라우팅 처리할때 등등

app.get("/", (req, res, next) => {
    // next는 다음 미들웨어 호출
    if(true) {

        next();
    }
    else {
        res.send("123")
    }
        
})
app.get("/", (req, res) => {
    res.send("안녕")
})
app.listen(3000, () => {
    console.log("server on")
})

```

### 정적 파일 라우팅 미들웨어 추가


```js
const express = require("express");
const app = express();

// use 사용할 미들웨어 추가
// use 경로를 넣을수고 있고 안넣을수도 있다
app.use("/", () => {
    // next 호출하는 떄가 있을것
})

// 모든 요청에서 사용할 미들웨어
app.use(() => {

})
// express.static 정적 라우팅 처리를 하는 미들웨어를 반환
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
    console.log("server on~")
})


```
## templete page 안에 내용을 추가할수 있다 객체

```js
const boardContent = [{title : "", index : "0", content : ""}, {}, {}]

// 브라우저에서 처리하는 방식
// 브라우저에서 해거한 자바스크립트 구문에서 DOM 제어하는 방식

// templete 엔진을 사용
// 서버측에서 요소를 제어해서 내용을 응답


`${}` : 이런 templete litereal 처럼
<html>
    <header>
    </header>
    <body>
    <!--  반복문 호출 -->  % %   templete literal
      % for (let i = 0; i < boardCOntent.length; i++) {%
        <div></div>
      % } %

      % for (let i = 0; i < boardCOntent.length; i++) {%
        <div>%= boardContent[i].title%</div>
      % } %
    </body>
</html>


=> 

<html>
    <header>
    </header>
    <body>
    
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </body>
</html>


```



### 실습 과제 
> main 페이지
> login 페이지
> board 페이지
> detail 페이지

> 라우팅 처리를 해서 페이지 보여주기 각각의 페이지는 css를 가지고 있게 정적 라우팅 추가 미들웨어