


// nodejs 의 내장 모듈듈
//  stream

// Transform 스트림 데이터를 읽고 데이터를 변환한뒤 자른 스트림으로 데어터를 전달 하는데 사용
const {Transform} = require("stream");
const path = require("path");
// nodejs 의 내장 모듈을 사용해거
// 파일을 읽거나 쓰거나

// file system module 사용해서 파일에 crud 를 제어할수있다
const fs = require("fs");

// 청크의 크기
// 스트림에서 작업할때 데이터를 받고 처리할때마다 각 청크의 크기를 정해주자

const chunkSize = 1 * 1024  // 64KB
const mypath = path.join(__dirname,"text.txt");
console.log(mypath)
const state = fs.statSync(mypath);
const fileSize = state.size;
console.log(fileSize, "filesize")

// Transform 생성자 함수 호출할때 필요한 옵션의 값을 가지고 있는 객체
const transformData = new Transform({
    highWaterMark : chunkSize, // chunk의 크기의 값을 전달
    transform(chunk, en, callback) {
        // chunk 단위의 데이터을 받는것
        this.push(chunk.toString().toUpperCase());
        // 변환이 완료가 되면 콜백함수 호출
        callback();
    }
})

//  파일을 text.txt 하나 만들고 파일에 있는 내용을 text2.txt 파일에 내용을 추가

// createReadStream 스트림 데이터를 읽오온다
// 매개변수 첫번째 파일의 경로
// 매개변수 두변째 옵셩값ㅇ르 객체로 전달
// 파일을 읽어오는데 스트림 데이터을 읽어온다
const text = fs.createReadStream("text.txt", {highWaterMark : chunkSize} );
// console.log(text, "text")


// 파일 읽기 스트림 생성

// text2 파일의 내용에 스트림 데이터를 추가
// 파일에 스트림 데이터 추가
const text2 = fs.createWriteStream("text2.txt");

// 스트림으로 내용을 파일에서 읽어서 다른 파일의 내용으로 추가
// pipe : 메서드를 호출하는 객체의 데이터의 내용을 매개변수로 전달한 스트림 객체에 내용을 이동시킨다.
text.pipe(transformData).pipe(text2);