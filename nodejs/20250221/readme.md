


# fs, 대용량 영상 처리


### fs 파일 시스템 내장 모듈
> 파일을 읽거나 쓰거나 삭제 생성 등을 할떄 사용하는 내장 모듈

```js
// 내장 모듈 가져오기
const fs = require("fs");

// 모듈의 안에 내장되어 있는 메서드를 활용해서 파일을 제어할수있다

// 폴드가 있는지 확인
let folder = fs.existsSync("./Test");


// 폴드 안에 파일 추가
// 수정과 추가가 같음
// 추가와 수정이 가능  파일 덮어싀운다
const str = `안녕하세요
저는 123123
moon 입니다.`
fs.writeFile("./Test/text.txt", str, (err) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log("파일 생성 완료")
    }
})

const text2 = fs.writeFileSync("./Test/text.txt", str);
console.log(text2);
console.log("실행 3")

// 파일을 만드는 이유는 ? 데이터를 저장하고 불러오디위해서 
// 파일 읽어오기
fs.readFile("./Test/text.txt", "utf8", (err, data) => {
    if(err) {
        console.log(err);
    }   
    else {
        console.log(data);
    }
})

// 식제
fs.rm("./Test", () => {
    if(err) {
        console.log(err)
    }
    else {
        console.log("폴드가 잘 삭제됬어")
    }
})

```



## 대용량 영상 
