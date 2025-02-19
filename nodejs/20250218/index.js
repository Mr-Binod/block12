

const blockClass = [
    {
        name : "soon",
        age :21,
        comment() {  //  functiond을 사용하면 불필요한 생성자의 내용까지 포함되기 떄문에
            console.log("안녕")
        }
    },
    {
        name : "kim",
        age : 30,
        comment() {
            console.log(`안녕 ${this.name} 이야`)
        }
    }
]
// console.log(blockClass);

// index.js 에서 내보낼 데이터
// module.exports = blockClass;

module.exports.add = blockClass; 
// 값을 할당하면 exports가 this로 호출된다
console.log(this);