

# 클로저, 1 급 객체

- 자바스크립트에서는 함수가 1 급 객체이기깨문에 값으로 사용가능

> 함수가 선언될떄의 어휘적 위치를 기억하고 해당 환경의 변수 등을 접근할수 있는 함수
> 자바스크립트에서 클로저의 개념이 가능한 이유 function 자비스크립트의 함수는 1 급 객체이기 떄문이다
> 함수형 프로그해밍을 한수 있게 지눵한다. (자바스크립트)

```js
// 2~3 급 체한이 있음
if, for 2, 3 급 함수
const a = if(1 === 1) {return true} // 값 반환 불가능
const b = for(i=0, i<a.length, i++){return i}// 값 반환 불가능
// 1 급 객체 제한이 없는것
const c = function () {return 1}; 

const time = (time, text) => {
    let a = 1;
    setTimeout(() => {
        console.log(a);
        console.log(text);
    }, time)
    const foo = () => {
        a++;
        console.log(a)
    }
    // foo();
    return foo
}
const foo2 = time(); // 함수의 값을 할당
foo2(); 2
foo2(); 3
foo2(); 4
foo2(); 5
// 참조하고 있는 값이 해제되지 않는다
// 데이트를 은닉
// 한수 외부에서 참조해거 수정하는 내용을 방지 할수 있다
foo2 = null; // 해제시킬때


// C++ 포인터
// 포인터 주소의 개념을 배우지 못하는 이유가 javascript 에서 포인터의 개념이 없기꺠문에
```

## 클로저의 특징

1. 함수내에서 선언한 함수가 상위 스코프의 변수를 참조할수 있다
2. 함수의 실행이 종료되어도 참조하고 있는 스코프의 변수는 해제되지 않는다

## 목적 

1. 데이터의 구조화(캡슐화) : 외부에서 값을 참조 흑은 수정할수 없게 할수 있다
2. 함수형 프로그래밍 지원 : 함수의 내부의 함수가 참조하는 변수를 가지고 반환받은 함수로 값을 참조할수 있다

### 1 급 객체
> 프로그래밍에서 1 급 객체는 값처럼 사용할수 있는 제한이 없는 객체
> 자바스크립트에서는 함수도 값이다.
- 변수처럼 자유롭게 사용할수 있는 객체(인자, 전달 가능, 반환도 가능, 한당도 가능)
- C 언어에서는 함수를 변수처럼 저장 불가능 (함수 포인터를 사용한함)
- 자바스크립트에서는 함수가 1 급 객체이기깨문에 값으로 사용가능
- 1급 객체는 자유롭게 사용가능 한 개체 2 급과 3 급은 사용에 체한
- 1 급 객체의 조류는 함수, 숫자, 문자열, 객체, 배열, 클래스, 프로미스 등
- 1 급 객체라는 이름으로 부르는 이유는 특권을 가졌다 라는 표현

### 1급 객체의 조건 내용
- 다른 함수의 매개변수로 전달해서 사용할수 있다.
- 다른 함수의 return 반환값으로 사용할수 있다.
- 벼수(배열, 객체, 등등) 에 할당할수 있는가? 

> 자바스크립트의 함수는 1급 객체

```js
const a = () => {}
[a]  {method : a}  배열이나 키로 할당할수 있다

console.log(a)
a(() => {console.log(3)})

```

### 클로저 내용

> 자바스크립트의 클로저 
> 함수안에 함수가 선언된 어휘적( 렉시컬 ) 환경
> rhdtlranstj zmffhwj `함수와 함수가 선언괸 어휘적(렉시컬) 환경의 조합을 말한다. 이 환경은 클로저가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수로 구성된다.`

## 문법
```js

const a = 0;
function b() {
    const index = 0;
    console.log(a)
    return function c() {
        consolr.log(index);
        function d () {
            let _b = 0;
            console.log(index)
        }
    }
    function e(){
    console.log(_b) // 참조할수가 없습니다.
    }
}

const d = b();

```
> 작성한 함수 위치가 어디냐? 내가 직접 함수의 코드를 작성한 위치가 어디냐에 따라 클로저가 될수있고 될수 없을수 있는것

> 선언된 위치에서 상위 스코프를 참조한다 = 렉시컬 스코프
> 렉시컬 스코프 체인 => 선언된 위치에서 상위 스코프의 변수를 참조한다.

> javascript의 함수가 실행 될때 실행 컨텍스트를 만들고
> 콜스텍에 함수의 실행이 쌓이도 환경 레코드와 외부 아우터를 가지고 있다.
> 함수의 내부에서 함수가 선언되고 내부 함수에서 외부 함수의 변수를 참조하는 경우
> 자바스크립트 함수가 호출되고 외부 함수의 변수를 내부 함수가 참조하고 있는 경우 함수를 반환해서
사용하면 함수가 종료되어도 외부 함수의 변수의 값이 해제 되지 않는다

### 렉시컬 환경

1. 렉시컬 임벨리먼트
> 코드가 실해오디는 컴텍스트

2. 환경 레코드 
> 코드의 THIS DML 값과 선언된 변수와 함수를 기록하는 공간
> 코드의 평가 단게 깃별자의 바인딩을 기록하는 곳

3. 외부 환경 참조(아우터)

> 렉시컬 환경에서 괴부 렉시컬 환경을 참조
> 한단뎨 위의 상의 스코프를 참조한다

### 렉시컬 스코프
> 식별자의 스코픅가 연결된 것을 스코프 체인이라고 한다.
> 코드를 작성한 구문이 작성한 그대로 스코프를 갖는 특징을 렉시컬 스코프라고 한다
> 어휘적 스코프, 어휘적 스코프 체인

### 클로저 함수와 클로저 함수가 아닌것

```js
// 클로저 함수
function counter() {
    let index = 0;

    return function increment() {
        index++;
        cosole.log(index);
    }
}
debugger
const increment = counter();
debugger
increment();
debugger
// 스코프의 내용을 확인하면 클로저 스코프가 추가된것을 확인할수 있다. 그러면 클로저 함수


// 클로저 함수가 아는 경우 어휘적 위치에 내부 함수가 참조하는 외부 함수의 변수가 없다
// 반환되는 함수고 없다
function counter() { 
    let index;
    index++;
    console.log(index);

}
debugger
const increment2 = counter
debugger
const increment = counter();
debugger

// 클로저 함수가 아닌경우
let index = 0;
function counter() {
    function increment() {
        index++;
        console.log(index);
    }
}

debugger
const increment = counter();
debugger
increment()
debugger


// 클로저가 있음 매개변수를 내부 함수가 참조하고 있다

function counter(){
    let index;
    return function increment() {
        index++;
        console.log(index);
    }
}
debugger
const increment = counter();
debugger
increment();
debugger

{a : 1, b : 2}

function () {
    let a = 1; // 이 값은 외부에서 참조할수 없는 값
    let b = 2;
    return function increment () {
        // 클로저 함수로마 접근이 가능하다
        // 값의 은닉
        // 캡슐화
        a++; // a 라는 값을 참조할수있는 함수는 increment 라는 클로저 함숩밖에 없는것

    }
}

function shop () {

}
// 상점의 변수는 클로저 함수로만 접근해서 변경할수 있도록
// shop 라는 함수의 내용만 수정하면 된다 상점 기능의 수정이 있을경우
```

## 클로저의 목적(클로저는 모듈 패턴)
> javascript의 코드를 구조화 재사용 가능한 단위
> 함수형 프로그래밍으오 작업할수 있다
> 불필요한 전역 변수를 만들
> 재사용성도 높고 유지보수성
> 상태 관리와 캡슐화 (개인 변수)

### 카운터
```js
const createCounter = () => {
    let index = 0;
    const increment = () => {
        index++;
        return index;
    }
    const decrement = () => {
        index--;
        return index
    }
    // 배열이나 객체로 return
    return[increment, decrement]

    // 객체의 키를 할당하는 값을 참조하는 변수명과 같게 할것이다
    // 축약 (줄일수 있다)
    return{increment : increment, decrement: decrement}
    return{increment, decrement}
}

const obj = createCounter();
obj.increment();
obj.decrement();

const {increment, decrement} = createCounter();

// 모달 팝업
// 팝업 열렦다 꺼쪘다 하는 기능을 관리

```

### 이후에 디자인 패턴
> 디자인 패턴 수업을 들어도 맙득을 못함
> 선행 되어야하는 부분 객체지향 프로그해밍의 이해도가 생디도
> class 문법에 익숙해져야함
> 구현능력이 생겨야한다.(구현은 다른 영역 수현할수 있다는것이 객체지향 프로그래밍을 해야만 구현할수 있는것은 아니다.)
> 사람들이 많이 사용하는 개발 밥법이 디자인 패턴.

> 구현 능력

### 실습
> 게시판 로컬스토리지 CRUD 구현 하기 
> 변호 제목 내용 작성자 이름

### 심화과정
> 글을 클릭하면 팝업이 뜨고 안에 글의 내용이 보이는것
> 패이지 전환은  X