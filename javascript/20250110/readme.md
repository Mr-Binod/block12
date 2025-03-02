# 논리 연산자, 스코프, 조건문, 반복문, 객체의 특징과 값의 호출

## 논리 연산자 

> 반환하는 데이터 타입은 bool
> 두가지의 값을 확인해거 true false 반환한다.

## 논리연산자의 종류
-  ||  OR   연산자  : 둘중에 하나라도 참이하면 true 둘다 false 라면 false

```js
[false || true] === true  //  
// -> true

(3 < 4) || (1 > 3) === true

[false || false]  === false  // 둘다 false 라면 false

```

-  &&  AND  연산자  :  둘중에 하나라도 false 라면 둘다  false  //  둘다 true 라면 true 반환한다

``` js
[false && true] === false // 둘중에 하나라도 false 라면 false 반환한다


[false && false] === false

[true && true] === true  // 둘다 true 하면 true 
[1<= 1 && 3 !== "3"] === true

```

## scope 스코프
```
//전연스코프는 프로그램을 종료하는 시점까지 메모리에 유지된다

// 전역 스코프의 변수는 어느곳에든 참조가 가능하다.
// 전역에서 변수를 너무많이 사용하면 협업할때 무리가 있거 프래그래밍의 객체지향적 사고와 상반된다

// 유저의 정보 같은거는 중요한것만 전연 스코프으로 사용합니다

> 전역 스코프 (global scope)

> 지역 스코프 간에 참조가 불가능합니다

```js
let a = 10;
```

> 지역 스코프 

```js
if {  // 블록 스코프 중괄호(middle or curly bracket)
    let a = 10;  블록 스코프의 내용이 끝남과 동시에 해제
}
console.log(a);

// {} : 중괄호열고 닫고의 상위위 영역이 블록 스코프
if(true){
    let a = 10;
    console.log(a);
}


## 조건문



// 상태의 조건 관리르 할때 
// 달라는 상태
// 걷는 상태
// 서있는 상태

const RUN = "RUN";
const STATE = "STATE";
const WORK = "WORK";

let meState = "";

if(meState === RUN) {
}
else if(meState === STATE){
}

// 적은 조건을 다룰때는 if 조건이 좀더 가독성이 좋지만

[switch 예약어](조건식) {
    case 문  // (조건갑으로 비교할 조건식) 문 :
        코드 내용
    default
}

// 성격 유형 테스트 검사지 페이지

let myValue = 1;
switch(myValue) {
    case 1 :
        console.log("value가 1 이야");
    break; // break 코드의 충단 시킨다
}

const RUN = "RUN";
const STATE = "STATE";
const WORK = "WORK";

let myState = "RUN";
switch(){
    case RUN :
        break;
    case STATE :
        break;
    case WORK :
        break;
}

// 괄호에 전달한 값을 case 문마다 검사를 진행한다 맞응 값의 case 문의 안에있는 코드를 실행한다.

// if 문 보다 직관적으로 조건문의 형태를 보여줄수 있다.

### 반복문 

``` 
```js
// while
// 내가 확신하는 코드영역에서만  사용하자 디버깅 이후에
// 브라우저 펑
// 코드의 중단점을 잘 선정해주지 않면 무한루프가 돌아서 
// 운영하고 있는 페이지가 터지면
// 중단점이 없으면 무한 루프


[while 예약어] ( 조건식){
    코드 영역
}


let count = 0;
while (true){
    if(count > 10){
        break;  // 코드의 중단점 밑의 코드느느 실핸되지 않는다
    }
    count++;
}

// while 안에 지역 하면 반복됩니다..
while (true){
    let count = 0;
    if(count > 10){
        break;  // 코드의 중단점 밑의 코드느느 실핸되지 않는다
    }
    count++;
}



```

### 객체의 특징과 값의 호출 

> 객체의 4 가지 특징
> 환벽히 마스터한사람은 없다 이해도를 계속 높여하는것.
> 해외의 외국원분들은 우리는 표현방식이 다르기때문에

> 눈으로 볼수 있는 사물의 단위
> 객체의 표현을 프로그래밍 적으로 표현
> 객체라는 것은 프로그래밍에서 기능을 만들때 객체들의 상호작용 제작된다

- 추상화  
- 상속    
- 다형성
- 캡슐화


### 객체의 표현 방식

1. 객체 리터럴
2. function 생성 방식
3. class 생성 방식

{} : 객체 리터럴 구문

### 데이터의 타입 참조 타입

> 원시타입과 다르다
> array, object, function, map, set 
> 주소를 참조하는 타입


### 객체의 문법
```js
// 리터럴 방식
const user = {name : "soon", age : 20, city : "서울"};

let soon_name = "soon";
let soon_age = 20;

// tip 은 객체를 언제 만들어야하느냐 실제로 존재하는 사물이나 개념을 가지고 구상해서 만들때 사물의 단뉘를 표현할때

// 자동차 판매 사이트를 만들고 있는데 객체

const computer = {name : "asus2", model : 14, color : "black", sell : false, price : 100}

//표기법-------------------------------------------------------------------------
// 값의 호출
computer.name === "asus2"
computer.color === "black"

// 이런경우는 키를 추가할수 있다

computer.name2 = 123;  // 없는 키를 선택하고 할당당을 시킬수 있다 

computer.name = "soon"; 이름이 바꿔진다

// 대괄호 표기법
computer.name === computer["name"]


// 하나의 사물을 표현할때 여러가지의 데이터를 하나의 단위로 객체단위로 사용하디 위해서

// 생성자 방식은 ??? function class 배울때 new


// 변수는 명에 있는 주소가 객체를 만들고 객체는 객체는 본인 가지고 잇는데이트 전체를 가루키고있다

```

### 실습 과제

> 가위바위보 게임을 하나 만들어 보자

- 요구사항 1 : 플래이어가 가위 혹은 바위 혹은 보를 입력받을수 있다.
- 요구사항 2 : 컴퓨터는 가위 바위보 랜덤하게 본인니 선택할수 있다 (0 1 2 )
- 요구사항 3 : 무승부도 있습니다
- 요구사항 4 : 입력받은 값이 잘못괸경유 다시 입력받으세요 계속
- 요구사항 5 : 논리 연산자 ||, && 둘중 하나 활용하세요