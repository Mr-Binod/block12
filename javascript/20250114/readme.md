


# 생성자   함수, 재귀 함수

###  재귀 함수
> 재귀 함수는 함수의 내영에서 다시 함수 이름으로 함수의 내용안에서 실행되는것이 반복되는 방식
> for 문으로 반복문으로 구현 가능한 로직들을 재귀함수로 재부분 작성이 가능하다
> 재귀 함수를 사용하는 이유는 반복하는 내용의 기능을 여러개로 나눠서 직관적으로 관리할때
> 사용하는 프로그래밍 패턴 중의 하나


1 + 2 / 3 * 4 + 5 = ?

> 재귀를 작성할때 더이상 나줘야할 필요가 없을때가 종료시점
> 문제를 나워서 기능을 작성하는 경우 패턴을 찾아서 활용해야한다.


## 사용하는 예)

## 반복문을 사용해서 만든 로직

```js

// 1 ~ 100 더한 수
let result = 0 
for(let i = 1; i <= 100; i++) {
    result += i;
}
console.log(result);
// 100 까지 더한수

// 연산식을 사용한 예

let n = 100;
console.log((n / 2) * (n + 1));
// 알고리즘 풀면서 외우는것
// 1 ~ 100 까지 더한수

// 재귀 함수를 사용한 예
function sum(n, result) {
    if(n === 101) {
        console.log(result);
        return n;
    }
    sum(n + 1, result + 1);
}
sum(1, 0);


function sum2(n, result) {
    if(n === 101) {
        return result;
    }
    return sum(n + 1, result + n);
}

console.log(sum2(1, 0));
```

> 재귀함수는 잘쓰지 못하면 그냥 반복문으로 돌리는 것보다 못하다 최적화가 안좋다

## 재귀 함수의 목적
> 장점으로 반복문을 많이 사용하는 경우보다 코드의 간결송과 직관성이 증가한다.
> 하지만 단점으로 스택에 하무과 실애이 많이 쌓여서 메모리의 공간니 많이 차지된다 . 속도 성능 저하.


## 피보나치 수열

> 피보나치 수열은 토끼가 초음에 한쌍이 있고
> 한달이 지나면 한쌍의 토끼가 성장
> 그이후 한달이 지나면 성장한 토끼가 새기토끼를 한쌍을 낳는다
> 그이후 한갈리 또 지나면 성장한 토까는 또 새끼 토끼 한싸을 낳고 이전 달의 새끼 한쌍은 성장한다
> 이런식으로 계속 증사하는 수열
> 규칙 토끼는 수명이 무한 죽지않는

```js
function fibo(n) {
    if(n === 1 || n === 2) return1; // 한쌍의 토끼
    rturn fibo(n -1) + fibo(n - 2); // 토끼가 성장하고 한쌍의 새끼토끼를 낳는 값을 구하기 위해서.

}
```

> 수학 공식을 공부할건 이니니까 프로그래머스 백준 등을 풀면서

### 자바스크립트의 실행 시간 복잡도를 한번 확인해보자

> 코드의 실행이 얼마나 걸렸느느지

// 계산기 구현할때 => 사칙연산 처리할때

4 * 3 + 2- 7 + 10 making calculator

// 34 * 65 = 답이 나올수 있는 실습

## 생성자 함수 
> 객체를 생성하기위한 함수
> 객체를 생성의 목표를 가지고 있다
> function 키워드으로 사용해서 생성자 함수를 만드는데 이후에 class
> ES5 까지는 function 키워드로 객체의 생성자 함수를 만들었다
> 만능 function 기능의 작성과 객체의 생성와 여러가지오 사용을 하는 느낌
> ES6 부터 이런한 부분들이 바뀌는 키워드가 많이 추가되었다

> 화살표 함수 ( this 개념), class (객체의 생성을 위해서만 만들어진 예약어), 메서드 축약형

```js
// 생성자 함수
// 하나의 인스턴스
// 공장에서 상품을 만드는 기계같은 느낌
// 자동차 객체 하나 생성

// function 안의 this는 바인딩을 한다는 의미는 바로 위의 객체를 참조한다
// function 에서 this 의 키워드는 동적으로 변한다
// 함수를 호풀한 위치에서 this를 바인딩한다
// 코드상의 this를 작성한 영역에서 객체를 참조하는게 화살표함수

function myCar(color, name) {
    this.color = color;
    this.name = name;
}

myCar("red", "GV60)"); // this 바인딩이 일어나서
//  this가 바인딩 되는 객체는 전역에 코드를 작성했고
// 브라우저 환경에서 실행되는데 전역객체인 window 객체에 키와 값으로 할당된다

const obj = {color : "red", name : "GV60"}
const obj2 = {color : "black", name : "suv"}

// 생성자 함수 사용
// new 예약어  ( 동적할당) 메모이에 새로운 객체를 만들어서 할당한다
// [new 예약어] [생성자 함수 실행]

const obj3 = new myCar("red", "black");

// reutn을 생성한 객체의 


> 하고싶은 사람 8 명
> 함수르 사용해서 계산기를 수현해주세요
> 값을 입력을 받고 다음 연산자르 입력 박소 두번째 값을 입력 받아서 결과를 풀력 하는것

> 함수로
> 돈을 입력하면 잔돈 계산기 100 짜리로는 몃개 1000원 짜리로 는 몆개 

> 페어 코딩 하는 반법
> 코드를 치는 사람은 반박하면 안되 처음에 설계정도는 주석으로 같이 정히하고
> 말하는 사람은 코드 치면 안된다
> 한번 수현 끈나면 다음으로 바꿔서