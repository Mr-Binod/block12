


# AJAX, Fetch, Axios 와 cors 

> form 태그를 사용해서 요청을 보내고 응답을 처리하는 로직
> 태그로 요청을 보냈을때 요청을 받아서 처리하는 주제는 브라우저 페이지
> 쉽게 말해서 결국 페이지의 새로고침을 통해 새로운 페이지의 내용ㅇ르 동적으로 보여준다
> 요청과 응답의 주제를 자바스크립트 로직으로 처리를 하게 자바스크립트 로직을 작성

### AJAX    
> 초기에 웹피이지에서는 모등 데이터를 받아서 처리하고, 페이지의 새로고침 없이 데이터를 화면에 보여주기는 불가능했다. 데이터를 가지고
따로 페이지 새로고침 없이 사용자의 UI 를 보여주는데 무리가 있다.
> 데이터를 응답받아서 새로고침 없이 화면을 구성할수 있는 기술을 개발하기 시작
> XMLHttprequest 라는 객체를 만들었고 ajax 라는게 탄생 페이지를 새로고침하지 않아도 서버에서 데이터를 주고 받을수 있게 되었다
> 자바스크립트에서 로직을 제어하다보니 상태 값이 필요하게 되었고 완료라는 상택 되면 상태코드를
확인하고 코드에 맞는 내용을 작성해서 사용해줘야 한다. 즉 비동기 처리 로직이후에 호출되어야하는 콜백
함수를 전달해서 사용한다. 콜백 지옥이 펼쳐질수 있고 하드코딩의 내요이이 많이 들어간다.

## 문법
```js
let xhr = new XMLhttprequest();
// 오청을 보내는 코드

xhr.open("GET", "http://127.0.0.1:3000/board")

// 요청이 완료가 되면
// 응답을 받는 상태가 되면 호출되는 이벤트
xhr.onreadystatechange = () => {
    // 완료가 되었을때 완료된 상태를 확인하고 
    // xml 객체의 상태가 완료 상태인지 확인을하고  200 ok 404 error    4 success
    if((xhr.readyState === 4) && (xhr.status === 200) ) {
        JSON.parse(xhr.responseTExt);

    }
    // 응답이 완료되면 처리할 로직
} 

// 요청
xhr.send()  // xhr 객체안에 있는 객체를 호출한다 
```

### Fetch의 등장
> XMLhttpRequest의 단점이 많았고 문제점은 promise 기반의 비동기 처리를 사용해서 ajax의 단점을 극복
> ajax 는 콜백 함수의 기반이 많아서 코드의 하드코딩이 발생하고 콜백 지옥이 발생할 가능성이 높은 코드를 작성해야했다
> Fetch는 promise의 기반으로 코드의 가돌성이 증가하게되었다.
> JSON 의 파싱의 메서드를 축약 처리가 가능하다.
> 코드의 내용을 작성할때 이전보다 직관적인 코드를 작성할수 있게 되었다.
> 상태 코드를 제어에서 하드코등하는 영역도 따로 처라할 필요가 없어짐

```js
fetch("http://127.0.0.1:3000/board").then((result) => {
    console.log(result);
    console.log(result.json())    ;
    return result.json()
}).then((result) => {
    console.log(result)
})

const myfn = async () {

} 

async function myfn () {
    const data = await fetch("http://127.0.0.1:3000/board")
    // response 상태 코드의 내용ㅇ도 포함되는 응답의 내용을 가지고 있는 객체
    const data = await response.json();
    return data;
}
async function myfn () {
    // 기본적으로 옵셩 객체이 메서드 작성안하면 method : GET
    const data = await fetch("http://127.0.0.1:3000/create", {method : "POST", headers : {"content-type" : "application/json"},
        body : JSON.stringify({title : "제목", content : "내용"})})
    // response 상태 코드의 내용ㅇ도 포함되는 응답의 내용을 가지고 있는 객체
    const data = await response.json();
    return data;
}
```


### Axios 외부 라이브러리
> Fetch 는 API 요청을 보낼때 Ajax보다는 좀더 직관적이고 모던한 메서드를 제공하지만
> 오류 처리할때 catch() 라던지 처리가 잘 되비않는 문제가 있고 파싱하는 작업도 불편하다
> JSON (intersecr nestjs) 파싱이라던지 명시적으로 JSON 파싱작업은 기본적으로 사용해야되는데
우리기 직접 명시해서 코드를 작성을 해줘야하ㅡㄴㄴ 불편함 등
> 요청을 보내거나 응답을 받아서 처리하는 과정에서 데이터를 조작하는 방법이 없다(인터셉터 기능)
> Axios는 fetch 의 단점을 보안해서 개발한 promise 기반 http 요청의 클라이언트


## 문법

> 지금은 리액트를 사용할수 없으니 html에서 사용을 해야하는데
> 모듈화된 라이브러리 코드를 모듈을 불러오는 코드를 브라우저의 런타임 환경의 자바스크립트에서 호출할수 없으니
> cdn으로 제공되는 코드를 가져와서 사용할것

> 라이브러리를 공부하는 방법 가장 좋은 방법 공식문서를 참고 가장 베스트
> 어떤 내용 공부해야하나 `메서드가 어떤 반환 값을 반환하는지`
> 내용을 이해하면서 암기 

```js

<script src="https://unpkg.com/axios@1.6.7/dist/axios.min.js"></script>


const reponse = axios.get("http://127.0.0.1:3000");
console.log(response.data)

const foo = async () => {
    
    const {data} = await axios.get("/");
    console.log(data);
}
foo();

const foo = async () => {
    
    const {data} = await axios.post("/", {title : "제목", content : "내용"});
    console.log(data);
}
foo();

```

## form 태그의 요청과 차이 
> form 태그는 브라우저가 직접 요청을 처리하는 로직을 실행한다 즉 페이지의 새로고침니 기본 동적으로 페이지를 출력해준다.
> 새로고침이 되기 때문에 기존 페이지가 바꿔어서 새로운 페이지를 보여준다
> axios 등등 이런 자바스크립트 로직에서 응답을 처리하는 경우 요청 주제가 자바스크립트다 위에 form은 요청 주제가 브라우저다
> 내부적으로 는 자바스크립트에서 브라우저의 기능의 기본 동작을 제어해서 http 요청을 만들어준다.
> 기본동작을 막았다는것은 새로고침도 막고 데이터의 응답의 내용을 브라욷저에서 처리하지 않고 자바스크립트 로직에서 처리한다는것.


## RESTfull API  
> REST 라는 뜻이 쉽게 말해서 http의 아키텍처를 설계한것 리소스의 요청과 응답의 방식을 설계
> XML 기반으로 무거운 데이터를 전달하는 과정에서 웹페이지의 성능이 무척 많이 떨어졌다
> 복잡한 구조를 작성하기가 힘들었다
> 이런 문제를 해결하기 위해서 REST 라는 http 프로토콜을 활용해서 효율적으로 리소스의 직관적인 관리를 하게 된것
> API 를 리소스 중심으로 설개하자


###REST 의 주요 원칙

1. 클라이언트 - 서버 구조
> 클라이언트와 서버를 명확히 구분해서 독립적으로 확장 가능하게 설계

2. 무상태성
> 요청들을 각각 독립적으로 처리하게 하며 서버는 클라이언트의 상태를 저장하지 않게 한다

3. cache (케시 기능)
> http 캐싱 기능을 활용해서 성능을 향상 시키자

4. 계층적 시스템
> API 서버 데이터베이스 인증서버 등등 계층 서버의 아키텍처 설계

5. 코드 온 디맨드 code on demand
> 필요성에 따라서 서버에서 클라이언트로 실행이 가능한 코드를 전달할수 있다

한줄로 요약해서 ## RESTfull API 우리가 url 을 통해서 리소스를 명확하고 구분해서 설계하고 http 메서드 (GET, POST, PUT, DELETE) 를 활용해서 데이터를 주고 받는 어플리케이션을 개발하는 개발 방식


## CORS
> CORS 는 웹의 보안정책들 중에서 하나로 웹 어플리케이션의 리소스를 접근할때 발생하는 보안의 이슈로 제어하기위한 정책을 해결하기 위한 방안이다. 
> 쉽게 말해서 보안은 유지하뒤 요청과 응답간에 서로 다른 도메인의 서버여도 리소스의 접근이 가능하게
> 보안정책은 same-origin-policy  동일한 출처 정책

<!-- www.naver.com ==> 프론트 서버 -->
<!-- www.back.naver.com ==> 백엔드 서버 -->

<!-- www.naver.com ==> 프론트 서버  -->
<!-- www.naver.com ==> 백엔드 서버  -->

<!-- 서버의 아키택처를 설계하다보면 이렇게 동일한 출처의 정책을 지킬수 없고
해결하는 방안이 필요하게 되었다 -->

> sop의 문제를 해결하기 위해서 탄생한 CORS 자바스크립트가 다른 도메인의 API 에 요청을 하는것을 제안하는 내용을 해결해준다.
> 출처와 프로토콜 도메인 포트가 동일해야 요청이 가능한 전책
> 악성의 유저가 요청으로 인해 사용자의 민감한 정보나 잘못된 리소스의 요청을 할수 있을수 있기때문에

> React 나 viewjs, angular, 등등 라이브러리나 프레임워크들도 동장을 하게 되면서 도메인을 같게 사용하는 경우가 어려워졌다. 다른 도메인을 많이 사용하게 된것. CORS 가 등장할수 밖에 없던것. 
```js
const express = require("express");
const cors =  require("cors");
const app = express();

// 보안적인
// milddlewear 요청이 들어오면 해더의 내용을 추가해서 다음 미들웨어로 진행
app.use(cors({ 
    origin : "허용한 도메인", 
    methods : "GET, POST, PUT, DELETE",
    allowHeaders : "content-type,..등등"
}))
// Access-Control-Allow-Origin
// Access-Control-Allow-Methods
// Access-Control-Allow-Headers

// 프리플라이트 요청이 발새 
// 프리플라이트 요청을 허용을 출처인지를 한번 확인

// TCP 통신 진행

// 

app.listen(3000, () => {
    console.log("server on~")
})
```
### CORS 원리 (principle)

> 특정 출처에 요청을 허용할수 있도록 하는 로직 개념

1. preflight 요청 즉 사전에 허용한 출처인지 검증하는 요청
> 다른 도메인에서 요청이 발생하면 츠리츨라이트 요청을 한번 검증하고 TCP 통신이 이루어진다
> 클라이언트에서 메서드를 사용해서 서버에 실제 요청을 보내기 전에 한번 검증을 거처서 리소스를 안전하게 전달하고 응답받을수 있는것.
> HTTP 레벨에서 동작 한다 TCP 랑은 별개로 TCP 요청은 이후에 진행된다
> PREFLIGHT 요청은 단순 요청에서는 필요가 없다. GET 과 POST 사전 검증은 단순 요청에서는 필요가 없다.


