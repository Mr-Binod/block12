

구조 : structure
영역 : area
역할할 : role
조정 : correction, adjust
TREE 구조 : tree data structure
자료 구조 : data structure
annotation
nest
library
framework
api 

설계  : design
개발  : develope
유지보수  : maintenance
데이트 타이프프
원시 타입 : string, number,bool,null,undefined
참조 타입 : object, array, map, set 
논리 연산자 : bool type
객체 : object
배열 : array

javascript  (ECMA   ES5 ES6 ... ES20)

조건문 : conditional statement
예약어 : variable name
연산자 : + - / % * 입니다
변수 선언을 시킬때 : value declaration 
분석 : parsing 
변수 : variable ( myName, Number)
할당 : assign
값 : value
선언 : declaration 
함수 범위 : function scope
유효 범위 : effective range(scope)  
불변성 : constancy 
반환  : return
반전 : inverse opposite
중감 연산자 : double signs
메서드 : method
조기화 : reset
자료형 : data type
구구단 : multiplicaion
반복문 : repitition 문 
객체 : object
속성 : property
참조 : refrence
해석하다: translate
충족할떄 : satisfy or meet the requirements
영역 : area

<!-- -----------------------javascript------------------- -->


 <!-- (원시 타입 종류), TDZ, 호이스팅 (let, var 차이 ) -->

<!-- //연선자의 반환 데이트 타입 -->

<!-- // 수학 배울때 콥셈 나누기 먼저 하고 더하기 빼기 -->


TDZ (Temporal Dead Zone) :  if we declare a variable but didnt assign a value in this case
                            `var a;`   `var` will declare `a` type as undefined
                            `let a;`   `let` will not declare `a` type 
                            so since the var is defined as undefined type it cant stay in TDZ(TEMPORARY DEAD ZONE).
                            BUT let is not declared as any of the type so until its declared it will stay in the TDZ(TEMPORARY DEAD ZONE).


호이스팅  :  호이스팅은 변수에 값을 선언을 시키기 전에 변수를 호출 시키는  방식입니다. 우리가 var은 호이스팅 할수있는데요 그런데데 let 이나 const 호이스팅 할 경우 호이스팅 에러가 발생합니다. 그거는 var의 변수를 선언을 안시켜도 기본적으로로 undefined 으로 나오는데 하지만 let 이나 const의 기본적은 자료형은 없고 TDZ 발생하기기 떄문에 에러가 발생합니다.


<!-- -------------------20250110 javascript---------- -->

매개병수 : function parameter   // function(매개병수) {}
논리 연산자 : bool operator
중괄호 : (middle or curly bracket)
전역 스코프 : global scope
지역 스코프 : local scope
특징 : characterstics
호출출 : call the functions or variable
변수 : variable name 
참조하다 : calling, referring
반환 : return
중복 연산자 : repitition sign
생성 단개 먼저 하고 실행을 시킨다 : creating and storing data 
first then processing
- 스코프 체인 어휘적 위치상에 스코프 상위로
어휘적위치에 : 
`function name(myValue) {
    return "안녕"
}
name(); // 어휘적위치에 "안녕"`

``` ### 참조 타입의 싶은 복사 얕은 복사 ```
- 얕은 복사 : 값을 복사흐는 방식에서 참조타입의 주소를 복사하는 방식
- 깊은 복사 : 값을 복사흐는 방식에서 참조타입의 값을 복사하는 방식



<!--------------------------------20250114------------------------------------------>

// 메모이제이션 시법 ****  // memo

함수 : function   // function a (){}
생성자 함수 : constructor function
> 하나의 인스턴스
> 공장에서 상품을 만드는 기계같은 느낌
> 자동차 객체 하나 생성
재귀 함수 : recursive function
> 자귀 함수는 함수의 내영에서 다시 함수 이름으로 함수의 내용안에서 실행되는것이 반복되는 방식
직관적 : intuitive
기능 : features
경우 : case
간결송 : simplicity
직관성 : Intuitiveness (instinctive)
증가 : evidence
저하 : decline
성능 : perfomance
성장 : growth
상속 : succession
사물 : things


<!-- ----------------------20250115-------------------------- -->

bind : bind is a process of 
재귀 : recursion (calling )
생성자 : constructor
화살표 : arrow sign function 
평가날 : evaluation day
통가점 : pass marks
생성자 : constructor
평가날 : evaluation day
통과점 : pass marks
해석 : interpretation
동적 : dynamic
형태 : form
상태 : situation
성능 : perfomance
저하 : lowering

use of `this` : `this` refer to the object referred to its class or function
bind : bind is a process of 
생성자 : constructor
동적 : dynamic
조작 : manipulation
제어 : control

## 함수의 다양한 사용
- 일반 함수 : normal function
- 생성자 함수 : constructor function // construction foo() {}
- 객체의 메서드로 사용 : let a = {method : foo}
- 화살표 함수   const bar = () => {}

함수 안에 있는 객체 전체를 `this`으로 표현한다 만약 함수에 객체 없는 경우 windows 에 있는 전역 객체를 표현한다.




<!-- -----------------------20250124---------------- -->

사각면 : all four directions
수치 : measurement
상대 위치 : relative position
절대 위치 : 완전 absolute

//  -------------------20250131

민감 : sensitive
응갑 : gaps
구현 : make

// --------------20250205---------------------

복구  : recovery
주석  : annotation
가독성  : readability
병합 : merge
분기 : branch

------------------------20251901-----------------------

형변환해서 : transform into a shape
비율적이기 : 
성능광 : perfomance
확장성을 : scaleability
독립된 파일 : independent files

-----------------NODE----20250219----------------

응용 : application
우세했 : dominate
통신 : communication
이진수 : binary
도달 : arrival
전송 : transfer
점유 : occupied
일괄 : consistent
표준 : standard
상호작용 : interacting
논리적인 연결 : ligical connection
응답 : response
HPPT : hyper text transfer protocol
TCP : transmission control protocol
UDP : user datagram protocol
IP : internet protocol
요약 : summerise
계층 : layer