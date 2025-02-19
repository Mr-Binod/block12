

//  모듈화된 데이터를 가져오기
// require 외부에서 내보낸 모듈을 가져올수 있다.
// require("파링의 경로") 배개변수는


// require es5 구문
// es6 문법 import/export
const block = require("./index");

const {lottoNum, result, init, play} = require("./lotto ")

console.log(block);
console.log(module.exports); // 모듈에서 외부로 내보낼 객체의 내용 (file becomes module)
console.log(module);


function a () {  // 이거는  global scope function에는 아무도 제한이 없다.
    console.log(this);
}
a()

const b = () => {     // 이거는 module scope   화살표 함수에 는 this binding 사용할수 없다.
    console.log(this, "나야 b")
}
b()

console.log(this)  // 이거는 모듈 스코프 module scope

init()
play()
console.log(lottoNum, result)