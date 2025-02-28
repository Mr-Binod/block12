

/* -----------------------------------------------javascript-------------------------------------------------------- */


//javascript codes :

```js
let vari = []
git 
for (i in vari){}  // for no of indexes
for (i of vari){}  // for the content inside the vari
while(){
    //content 
    break;
    continue;
}
Math.random() * length //of numbers  10 20 100 etc
vari.push("me");
vari.splice

for(let i = 0; i < 10; i++){    // if   i  is minute 
    for(let j =0; j< 10; j++){      // j is second
        console.log(i, j);
    }
}
alert(Math.random()) //for random numbers
let a = parseInt(Math.random() * 3) + 1; 
// if 1 is not added starts from 0 random number from 1 to 3  as 1 2 3
// if not it will count 0 also  0 1 2
alert(a);

while(a){
    break;
    continue;  // if continue it wont count as played
}
for (let i = 0; i <= 100; i ++) {
    arr.push(i);
}

//1,2,3,4..........100] 

// splice : 배경\ㄹ의 인게스의 값을 제거
// () : 값이 두개가 들어간다 첫번재 시작 인덱스 두번째 지울 갯수
lottoNum.splice(randomNumber, 1);
result.push(number);
console.log("번호 세팅 끝" + lottoNum.length + "개의 번호");
// 6개의 공을 뽑아야한다
for (let i = 0; i < 6; i++) {
    let randomNumber = parseInt(Math.random() * lottoNum.length);
    let number = lottoNum[randomNumber];
    lottoNum.splice(randomNumber, 1);
    result.push(number);
}

if(this.popup.classList.contains("is-active")){
    // 켜져있가면 팝업을 끄고
    this.popup.classList.remove("is-active");
}
else {
    this.popup.classList.add("is-active");
}

// while 겹치는 숫자가 안나올떄까지.
// 여러번 발생할수 있는 상황도 발생한다.
console.log("로또의 추첨 결과느 두구두구두굳ㄱ");
for (let i = 0; i < result.length; i++) {
    console.log(result[i])    
}

function poo() {
    const num2 = 2;
    function poo2(num2) {
        console.log(num2);
    }
    const num3 = 5;
    function poo3(num3) {
        poo2(num3);
        console.log(num3);
    }
    const num4 = 6;
    function poo4(num4) {
        poo3(num2);
    }
    poo4();
}
poo();   //function doesnt execute until its called // 부루기 전에 함수는 호출되지 않아요

class Child extends Mother {
    constructor(name, age, city) {
        super(city); // 부모의 생성자 호출
        this.name = name;
        this.age = age
    }
    // 부모와 같은 키를 사용하면 안되요.
}
const child = new Child("soon", 20);
// city가 없어
//{name, age, getInfo f(){}}

let _el = document.createElement("div"); // 원하는 태그 이름 쓰면 됩니다
box.append(_el)
let el = document.createElement("div");
el.innerHTML = "본문 내용"

// 문자 text 만 작성하겠다
el.innerTEXT = "요소 제외하고 문자만 작성하겠다."
// 노드 객체
el.classList += "box2"
// classList 클래스의 문자열을 제공한다
// "box box2 box3"

// 배열의 갯수를 확인하는 키값
arr.length // 배결의 길이를 호추하는 키
arr. length === 4 // 4 의 길이
for (let i = 0, i <= 100, i ++) {
    arr.push(i);
}
[1,2,3,4..........100]  // 이렇게 
// 컨탠츠를 만드는데 제목이 5 개 필요한다. 숫자의 표현이 들어간다.
for(let i = 1, i <= 5, i++){
    arr.push(i + "번쩨 제목");
}
["1 번째 재목", "2 번째 재목",......."5 번째 재목"]

for(let i = 1; i < = 5; i++){
    const object = {
        title : i + "번째 제목"
        content : i + "번째 컨텐츠"
    }
    arr.push(object);
}
[{title : "1번쨰 제목", content : "1 번째 컨텐츠"},..................]

//  게시글들의 내용을 배열에 담아서 표현
// 배열은 여러자기 갯수가 많은 데이터를 가룰떄 용이하다.
// 배열은 여러가지의 값을 접근할때 용이하기 때문에 우리가 많은 양의 데이터를 배영에 담아거 사ㅛㅇ한다

arr[2] === {title : "3번째 제목", content : "3번째 컹탠츠"}

// 배영\ㄹ의 갯수만큼 호풀하면서 사용해야한다
for(let i = 0; i < arr.length; i++){
    // DOM 요소 제어 부분은 나중에 
    // 예를 들어서 DOM 제어를 한다
    // 새로운 요소를 만들면서 만들어줄 예정
    // 예시만 든것
    myTag.InnerHTML = arr[i].title + " | " + arr[i].content;  // just a example dont follo the same
}
const init = () => {
    // for문 반복문 
    // 배열 메서드
    // 함수 값만 전달하는 방법
    playerBtn.forEach((item, index) => {
    })
}
    // const a = (item, index) => {
    //     for (let i = 0; i < playerBtn.length; i++) {
    //         a(playerBtn[i], i)
    // 배열이나 객체로 return
return[increment, decrement]
// 객체의 키를 할당하는 값을 참조하는 변수명과 같게 할것이다
// 축약 (줄일수 있다)
return{increment : increment, decrement: decrement}
return{increment, decrement}
uid.onchange 

`${-(index )}px 입니다`;
.forEach = () =>{}
.onmousedown = () =>{} /* while click*/
.onmouseup = () => {} /* while lift the click*/
 
 e.touches[0].clientX.

console.log(data.toString());
const content_JSON = JSON.stringify(data);
localStorage.setItem("comment", content_JSON);
fetch("api").then((result) => {
    result.json(); //.then 안에 있는 객체에만 사용 가능 
})
const arrTemp = [...arr];  // spread 연산자
const searchArr = arrTemp.filter((el) => el.title.startsWith(e.target.value))
location.href = `../detail/index.html?index=${index + (pageIndex -1) * PAGENUM}`;
const clickHandler = (e) => {
    // parentNode 요소의 부모요소 호출
    const contentNode = e.target.parentNode.parentNode;
    const {index} = contentNode.dataset;
const arrTemp = [...arr];  // spread 연산자const {index} = contentNode.dataset;
}

if(e.keyCode !== 13) //enter key code 13
    return;

const getQuery = (queryString) => {
    if(queryString.length === 0) return null;
    // index=1&age=20
    const query = queryString.split("&");
    // index [index=1, age=2]
    const query2 = query.map((value) => value.split("="))
    console.log(query2, "query")
    // [ [ 'index', '1' ], ['age', '20'] ] query
    const query3 = query2.reduce((acc, line) => {
        const [key, value] = line;
        acc[key] = value;
        return acc;
    }, {})
    // {index : 1, age : 20}
    return query3;
}