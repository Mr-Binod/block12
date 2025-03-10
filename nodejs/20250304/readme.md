


# 파일 업로드 Multer

> express 환경에서 파일의 업로드를 처리하는 미들웨어를 제공
> 파일을 업로드해서 미들웨어에서 메모리에 파일을 저장하는 기능

## 웹에서 파일을 업로드
> form 요소로 파일을 업로드를 했고 데이터를 효과적으로 관리하게 하기위해 multipart/form-data
방식을 사용하게되었다.

> 파일 업로드를 할때 content-type 이 multipart/form-data인지 확닝해서 파일을 처리한다
> 데이트에 업로드한 파일의 차식 내용로 요청 객체에 생성한다

req.body.multipart/form-data

## 구조
> multipart/form-data 형식의 데이터를 처리하기 웨해 스트림을 사용한다.
> 우리가 원하는 작업 폴더에 파일을 저장한다
> 스토리지 옵션 : 파일을 저장할 위치 방법을 설정할수 있는 옵션이 제공
> 파일 필터링 : 업로드되는 파일을 필터링ㅎ새서 확장자등의 조겅에 맞는 파일만 처리할수 있는 옵션 제공
> 파일 크기 제한 : 파일의 크기를 제한할수 있다.
> 핸들러 함수를 만들어서 사용한다.

### MIME 타입 (multipurpose internet mail extensions)
> 컨텐츠를 전달할때 사용하는 파일의 종류를 요청 메시지에서 알려준다
> content-type : text/html
> content-type : image/png
> content-type : application/json
> content-type : multipart/form-data
> content-type : application/actet-stream

> multipart/form-data 바이너리 데이터를 전달할수도 있고 여러가지 데이터도 같이 전달 가능하다
> 파일과 텍스트 데이터를 같은 요청에 폴함해서 보낼수 있다.

> 핸들러 함수를 만들어서 사용한다

```sh
npm i multer
```
```js
const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

app.use(express.urlencoded{extended : false})

// 스터림 데이터를 받아서 처리하는 방식
// 저장소의 설정을 설정하기위한 객체
// multer 라이브러리를 사용할때 필요한 형식의 객체를 생성해주는 메서드

const sotrage = multer.diskStorage({    
    destination : (req, file, cb) => {  // cb() === next()
        // 다음 미들웨어로 넘기는 함수 콜백함수안에 전달이 되어 있다
        // 첫번째 매개병수는 오류의 내용이 있으면
        // 두번째 매개변수 저장 위치
        cb(null, "uploads"); //cb(null, 저장 위치)
    },
    filename : (req, file, cb) => {
        // req 요청 객체
        // file 의 내용을 가지고 있는 객체
        // cb 다음 미들웨어 호출 콜백
        // file키에 저자할 이름의 형식을 전달해준다.
        // 파일을 저장될때 이름
        // file.fieldname `filename`

        // now === static method 현재 시간은 반환한다
        // 안녕_2025/03/04/10:07 이름에 시간을 포함시켜서 고유의 키값도 포함시키는 경우가 있다.

        // 저장경로가 img/안녕
        // <img src="img/안녕.png">
        // 원본 파일 이름에서 확장자명만 잘라오자.
        cb(null, file.feildname + "_" + Date.now() + )


        // 안녕  
        // 안녕(2)
    }
})  // 객체의 내용을 반환

// 객체를 사용해서 미들웨어 함수를 만들 객체 생성
// multer 객체 생성
// const upload = multer({storage : storage})
// 설정한 옵션을 포함하고 있는 객체를 전달
// multer 객체의 안에는 메서드가 포함괴어있는데
// 우리가 미들웨어로 사용할 햄들러 함수를 반환할 메서드가 포함되어있다.
const upload = multer({storage})
// upload.single("키") ==> () => {}  핸들러함수 반환

// 이미지 혹은 파일을 업로드하기 위한 요청처리
// 요청의 베시지에서 데이터의 타입을 검사하고 파일을 스트림으로 읽어서 파일을 원하는 경로에 저장한다

// single 하나의 파일을 업로드
// upload.array 파일을 여러개 업로드 할때 
// upload.array("key", 10) 첫번쨰 매개변수가 키 두번째 매개변수가 갯수
const myapi = () ={
    return(req, res, next) => {
        if() {
        }
        else
        }
        next();
    }

app.post("/upload",upload.single("img"), (req, res) => {
    res.send("안녕");
})
app.post("/upload",() => {}, (req, res) => {
    res.send("안녕");
})

app.listen(3000, () => {
    console.log("server on~");
})

```


## 이미지가 저장하고 화면에 출력

화면에 게시글 출력
### MVC 패턴으로 작성

> models : 데이터의 조작 (조회와 저장)
> views : 사용자의 화면 UI 구성
> controllers : 사용자의 기능을 구성 로직작성 사용자가 컨트롤할수있는 내용 기능들



## 실습 
### cr 붑분이외의 ud부분을 제작
> 글 삭제할때 이미지도 삭제