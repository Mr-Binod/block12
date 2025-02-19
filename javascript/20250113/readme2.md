

# 함수


> 중복되는 코드의 재사용성을 높이기 위해서
> 코드의 냉ㅇ의 실행을 목적에 맞게 호출하기 위해거
> 자바스크립트는 코드를 실행했을때 커다란 몪음으오 실행을 하는데
> 전역공간에 작성한 내용을 모드 위에서 부터 밑으로 실행한다
> 코드의 가독성과 재사용성이 용이하다

### 함수 선언


```js

// 선언
[function 예약어] [함수 이름](매개변수) {
    코드의 내용
}
함수 이름은 우리가 정하는것
// 매개병수 또한 우리가 이름을 정의한다.


// 실행 호출
[함수 이름](매개변수);

log("123");

우리의 기능을 만들고 있는것

function message(value) {
    let value = 1
    console.log(value);
}

message("1");

// 함수안에 내가 작성한 매개변수의 이름과 갯수만큼 초기화되고 할당된다 하고 쉽게 이해해보면 좋다.
// 

function message (value, value2) {
    console.log(value + value2);
}
message("1","2");  strings can also be assigned
message("1"); // 하나만 할당하는 경우 value2 = undefined 으로 나옵니다.


console.log(1,2,3,4,5,,"123345"); // console.log() 도 사실 여러개의 매개변수를 받을수 있는 베서드

// 실행할때 작성한 순서오 할당된다.
```


## 함수의 매개변수와 스코프
```js
let a = "함수";

function name(){
    console.log(a);
    name2();
}

// a 라는 매개변수가 있고 전역에 a 라는 매개변수가 있으면
// 식별자의 우선순위 정적인 스코프안에서 자바스크립트 엔진은 식별자를 판단하는데
// 해당 스코프내의 변수를 먼저 가져온다
// 똑같은 변수명이 있어서 상위 스코프의 변수를 거져오지 못하는 현상을 `변수 섀도잉`


function name2() {
    console.log(a);
}
name();


// 자바스크립트는 생성 단개 먼저 하고 실행을 시킨다



- 스코프 체인 어휘적 위치상에 스코프 상위로
```

 

### 함수의 매개변수와 반환값


```js
// return : 값을 반환하고 종료.
// [return 예약어] [반환할 값]

function name(myValue) {
    return "안녕"
}

name();
let a = 1;

a
1 // 오휘적 위치에 1 이하는 값이 호출된다

console.log(a);
let b = a;

name(); // 어휘적위치에 "안녕"

[함수이름](); // 함수의 실행
[함수이름]  // 함수의 이름
console.log(name())

let e = name; // 반환값을 담은게 아니고 함수의 값자체를 할당한것.
e  //  "안녕"  아니고      f(){} O

e();
let f = name(); // "안녕"


function foo() {
    let a = 1;
    function foo2(){
        console.log(b);
        console.log(foo3());
    }
    foo2();
    let b = 2;
}

function foo3(){
    return 4;
}

foo();


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

poo();

```

