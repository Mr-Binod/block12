


const express = require("express");
const app = express();
const path = require("path");


app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "page"));

// body 의 parsing 내용 추가
// use 는 메서드 상관없이 미들웨어 호출
// 가자위에 호출을 시키기 위해서 위에 배치
// GET POST 상관 없이 요청 경로만 확인
// 경로를 전달하지 않으면 모등경로
// url 의 문자열 형태를 객체로 파싱하는 기능을 하는 함수르 반환
// 문자열에서 싶은 객체도 포함해서 파싱을 할것인지 아닌지?
// {name : {age : {}}}
// extended : false 기본적으로 사용 안함 사용해갸될 경우는 true로주면 된다
// app.use((req,res,next) => {
    // body 라는 key
    // req.body = "문자열을 파싱해서 겍체의 내용을 추가"
    // next();
// })

// app.use(express.static()) // 경로를 반환하는 handler 함수
// app.use("/border",express.urlencoded({extended : false})) 경로 에서만 
app.use(express.urlencoded({extended : false})) //모등 요청
// app.use("/mypage", (req, res, next)) {
//     // login 유지 상태
//     if (req.cookies){
//         next();
//     }    
// }

// app.get("/mypage", (req, res) => {
//     res.render("mypage");
// })


const data = [];


//  views: 'C:\\Users\\user\\Desktop\\visual studio1\\nodejs\\20250227\\views',
// 'jsonp callback name': 'callback',
// 'view engine': 'ejs'
// console.log(app);
app.get("/", (req, res) => {
    // res.send("안녕");
    
    // render (filename 파일의 경로, 전달하는 데이터 객체)
    // 기본으로 설정되어있는 경로
    // views 의 key 에 value 의 경로에 접근해서 파일을 찾는다
    //  views: 'C:\\Users\\user\\Desktop\\visual studio1\\nodejs\\20250227\\views',
    // app.set("view engine", "ejs"); 엔진을 사용하게되면 
    // 확장자를 사용하는 엔진의 파일 확장자 명을 찾는다.
    // 페이지를 완성할때 참조할수 있는 값
    // 서버에서 페이지를 완성할떄 필요한 값 즉 페이지를 완성시키느 서비스에서
    `/*
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <%= name %> === soon
        메인 페이지
    </body>
    </html>
    */`
    // res.render("main/index");
    
    const data1 = [{index : 1, title : "제목", content : "나야"},{index : 12, title : "제목1", content : "나야1"}]
    res.render("index", {name : "soon", count : 5, board : data}); // takes object parameter
})
app.get("/detail", (req, res) => {
    // GET /detail HTTP/1.1 
    // console.log(req.query.index);
    const Data = data[req.query.index];
    // {index : 1, title : "123123", content : "123123"}

    // render (filename 파일의 경로, 전달하는 데이터 객체)
    res.render("detail", Data)
})

// POST / HTTP/1.1
// POST body의 내용을 요청 메세지에서 사용할수있다
// POST 는 안전하게 값을 전달해서 값을 요청 메세지로 전달해서 
// 서버로직에서 파싱해서 사용
// POSTMAN : API 를 테스트할때 사용 프론트에서 구현이 되지안ㄹ은 상태에서 
// 백엔드 개발자가 요청을 보내서 데이터를 확인할떄 test 로 사용
app.post("/board", (req, res) => {
    // res.send("글 작성 놩료")
    // redirect === 300 번대의 상태코드를 반환
    // 브라우저에서 서버로 요청을 보내고 받은 응답은? 다시 여기로 재요청 보내
    // 브아우저는 두번을 요청하게 된다
    // post / board ㄷ요청을 보내고 나서 받은 응답은 /로 요청을 보내
    // 경로로 get 요청을 보낸다

    // console.log("나 보이니?")
    // // body 내ㅛㅇ을 가져와서 데이터를 추가해주고 싶어
    // // req 요청 메시지 파싱할때  body 의 내용을 추가
    // console.log(req);
    // console.log(req.body);
    // console.log(req.body.title);
    req.query.index
    data.push({index : data.length + 1, title : req.body.title, content : req.body.content})
    res.redirect("/");  // 재요청 보내는 method
})

// data[i].title = req.body.title

app.listen(3000, () => {
    console.log("server on")
})


app.get("/edit", (req, res) => {
    console.log(req.query)
    console.log("나 왔다")
    res.render("edit", { index : req.query.index})
})
app.post("/edit", (req, res) => {
    // console.log(req.query)
    // console.log(req.body)
    data[req.query.index].title =  req.body.edittitle;
    data[req.query.index].content =  req.body.editdetails;
    // console.log(data)
    // console.log(req.body)
    res.redirect("/");
})




app.get("/delete", (req, res) => {
    const index = req.query.index;
    //console.log(index)
    data.splice(index, 1);
    //console.log(data);
    res.redirect("/");
})


