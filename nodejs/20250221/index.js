



const fs = require("fs");
// 비동기적으로 실행 할때
fs.exists("./Test",(e) => {
    console.log(e)
})

// 동기적으로 호출할수있는 메서드 sync
const folder = fs.existsSync("./Test");

console.log(folder);
console.log("실행 1");

// 폴드가 없으면 생성

// 비동기적 호출
// if(!folder) {
//     fs.mkdir("Test", (err) => {
//         if(err) {
//             console.lo(err);
//         }
//         else {
//             console.log("폴드 생성 완료");
//         }
//     })
// }


// 동기적 호출
if(!folder) {
    const text = fs.mkdirSync("./Test");
    console.log(text);
}

console.log("실행 2");

// 폴드 안에 파일 추가
// 수정과 추가가 같음
// 추가와 수정이 가능  파일 덮어싀운다
const str = `안녕하세요
저는 123123
moon 입니다.`
// fs.writeFile("./Test/text.txt", str, (err) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log("파일 생성 완료")
//     }
// })

const text2 = fs.writeFileSync("./Test/text.txt", str);
console.log(text2);
console.log("실행 3");

// 동기적인
// 파일 읽어오기
// fs.readFile("./Test/text.txt", "utf8", (err, data) => {
//     if(err) {
//         console.log(err);
//     }   
//     else {
//         console.log(data);
//     }
// })

// 동기적 호출
const text3 = fs.readFileSync("./Test/text.txt", "utf8");
console.log(text3)
console.log("실행 4");

// 식제
// recursive : 삭제할때 옵션으로 폴더 내부에 있는 파일까지 삭제를 허용하겎다
fs.rm("./Test", {recursive : true}, (err) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log("폴드가 잘 삭제됬어")
    }
})