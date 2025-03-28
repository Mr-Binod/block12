


# NodeJS

> 자바 스크립트 런타임 환경을 제공한다. (자바스크립트 기반)
> 브라우저와 다른 런타임 환경
> 여러 os 에서 실행이 가능하다 원도우 맥 리눅스
> 2009 년에 nodejs 가 출시 npm
> 지속적으로 업데이트를 하고 있고 탄생하고 2년귀에 떄형 플랫품에서 사용하기 시작하ㅏ면서 인기를 끌게 굄
> 20 년도 쯤에 github npm 을 인수 등
> nodejs를 사용하는 기업이 많이 증가했다
> 서버 구축에 정말 많이 사용되는 마이크로 서비스 아키텍처를 설계하는데 중요한 역활을 하는 엔진

## nodejs 등장
> 자바스크립트로 서버 로직 즉 서버측 활용이 가능한 시작은 nodejs (javascript v8 engine)

## nodejs의 인기
> nodejs는 싱글 스레드 (멀티 스레드)  (libuv)  자바스크립트르 활용한 서버측 로직을 작성하기 위해거 비동기 이벤트
기반 아키텍처를 사용 성능이 좋고 확장성을 제공한다.  (일한 사람이 여러명) 

## nodejs가 서버?
>nodejs는 자체가 서버가 아니고 웹서버를 구축할수 있는 로직을 작송할수있게하는 엔진
> javascript를 배워서 javascript로 서버로직 코드를 작성할수 있다.
> npm (node package manager) : 개발자들이 본인의 소스코드를 공유할수 있는 패키지 저장소
> 방대한 오픈 소스 상태계를 구출하기 위해서 개발자들이 편하게 개발을 할수 있도록 개발 생산겅을 
향상시키는 목적 가지고 있다. 
> npm 에서 직접 라이브러리 만들수 있고 update 할수 있고 공유도 할수 있습니다

## node js javascritp v8 engine
> 크롬에서 개발한 javascript v8 engine으로 서버측 자바스크립트 런타임 환경
> 브라우저와 런타임 환경이 다르다
> 여기서 `빌드` 가 괴었다는 것은 구굴에서 개발한 v8 엔진을 사용해서 코드를 컴파일러를 통해 실행 파일로 변화하는 작업

## node js 의 블로킹 논블로킹

> nodejs 에서 `비동기 I/O (input/output)` 작업을 진행할떄 또 다른 작업을 할수 있도록 제공한다 리버브 "libuv" (nodejs의 장점)
> I/O 작업이 완료될떄까지 기다리면서 다른 코드도 실행을 할수 있다
> input/output : 파일 시스템 (브라우저에서는 파일을 조작할수 없다) 네트워크 디스크 등 데이터를 읽거나 쓰거나 하는 작업은 무거운 작업인데 
nodejs 는 이러한 작업의 속도가 빠르다.

> 논블로킹는 I/O 작업을 할때 다른 코드의 내용을 실행할수 있도록 해준다
> nodejs 는 모든 I/O 작업을 비동기적으로 실행하고 블로킹 하지 않는다

## nodejs 이벤트 기반의 아키텍처
> 이벤트 기반의 츠로그래밍ㅇ느 이벤트가 발생하면 콜백 함수를 실행하는 박식
> 자바스크립트로 이벤트 기반의 프록스해밍을 선택한 이유 비동기 처리가 가능하고 좋은 성능광 확장성을 가직수 있기때문에.

### 이벤트 기반
> 이벤트가 실행되면 이벤트로 등록한 함수 즉 작업을 수행한다
> `이벤트 리스너 (eventlistener) 콜백함수를 등록한다.`

## nodejs의 이벤트 루프
> nodejs 싱글 스레드 기반의 비동기 처리 모델을 사용한다. 내부적으로는 멀티 스레드와 같이 동작한다.

### 브라우저의 이벤트 등작 방식
<!-- setimeout -->
> 실행  컨텍스트 -> web api -> 테스크 큐 -> 콜스텍 내용 X -> 이벤트 루프 ->  실행

```js
setTimeout(()=>{  //wep api 에 대기하다가
    console.log("1초 됬다.")
},1000)
console.log("시작")
```

### nodejs의 이벤트 루프의 동작 방식
> 비동기 작업에 콜백함수를 등록하고 완료된 작업을 실행하는 역활

1. Timer 확인한다 : setTimeout 같은 함수의 실행 시간을 감지 비동기 작업이 처리가 되었는지
2. I/O 이벤트의 처리 : 파일을 읽거나 네트워크에 요청이 완료되었는지 확인한뒤에 완료가 되면 콜백 함수를 실행한다.
    (poll 단계에서 대기중인 콜백 (I/O) 를 실행된다 이벤트 루프가 I/O 작업이 완료 되지않으면 콜백은 대기상태)
    (비동기 I/O 작업이 완료되면 I/O 콜백 큐에 추가되고 콜스택이 모두 비워지면 실행된다)
3. idle/prepare : 내부적으로 사용하는 단계이고 개발자가 직접 제어는 하지 않는다.
    poll 단계는 이벤트 루프의 핵심 단계 비동기 I/O 작업이 완료돠면 I/O 콜백 큐에서 확인하고 콜백을 처리한다.
    대기중인 콜백이 없는지를 확인하는 단계 비동기 작업이 완료되면 콜백을 호출해서 알려준다
    대기중인 이벤트가 없으면 이벤트가 발생할때까지 기다린다.
4. Pending, Callback : 일부 시스텀에 관련 콜백의 내용이 실행되는 단계
    우리가 등록하는 콜백의 내용을 호출하는 단계 setImmediate가 poll 단계가 끝나면 바로 실행이 되는데
    setImmediate 가 등록한 콜백을 바로 호출한다
5. Immediate 콜백에 처리 : setImmediate에 예약된 콜백들이 실행된다.

6. close event : event 닫는 이벤트를 처리한다.
    리소스의 내용이 닫힐깨 실핸되는 콜백 함수를 호출된다.


### nodejs 스레드
#### 스레드
> 내부적으로 실행되는 작은 작업의 단위 
> 일반적으로 프로그램을 여러개의 스레드를 사용해서 병렬로 작업을 처리할수 있다 (멀티 스레드)

### nodejs 의 워커 스레드
> nodejs 가 기본적으로 단이 스레드이기 떄문에 
> nodejs 10 브전 이후에 생성된 워커 스레드 worker_threads  모듈을 사용해서 멀티스레드 환경을 제공한다.
> 단일 스레드라서 CPU 가 작업을 너무 집중시켜서 사용하게 되면 이벤트 루프가 터짐
> worker_threads 를 사용해서 여러개의 스레드에서 무거운 작업을 나눠서 작업한다

### 워커 스레드와 libuv
> nodejs 의 메인 스레드가 단일 스레드가 libuv 는 C++ 로 구현된 라이브러리이고 이 라이브러리가 하는 일이 
> 여러개의 백그라운다 스레드를 생성하는 역활 
> 워크 스레드들은 각각 이벤트 루프 처리를 할수 있다.
> worker_threads 는 독립된 코드의 실행이 가능하고 실행컨텍스트가 생성
> 백그라운드의 시레드 방식은 libuv 가 I/O 작업 처리를 하기 위해거 기본적으로 4 개의 백그라운드 스레드를 생성한다

#### 백그라운드
> 핸드폰에서 노래를 들고 다른 앱을 사용하는 것처럼
> 백그라운드에서 동작한다 실행되는 프로세스에 올라가있는 프로그램이 사용자가 조작을 하지 않아고 동작을 하고 있다라는 뜻

### nodejs 설치


### nodejs 문법
> nodejs 레포 모드
> nodejs 에서 제공하는 인터페이스

```sh

# 레포 모드 진입
# Repl  
# 일기 -> 해석(실행) - 출력 = 반복
# 대기상태에서 이벤트를 기다린다

node

# nodejs의 전역 객체는 global 객체
# console.log() 의 메서드도 global 객체에 포함되어 있다
# 브라우저의 WINDOW 객체에 포함되어있는 메서드와 동일하게   보면 안되지만
# 비슷한 동적을 하고 이름이 같은 메서드가 있는것
# 런타임 환경이 다르기 때문에
# 브라우저에서도 자바스크립트를 해석하고 실행환경을 제공한것
# NODEJS 에서도 자바스크립트를 해석하고 실행환겅을 제공한다

# ctrl + c (레포 모드 종료)

```
```js
// 각각의 파일을 모듈화 해서 사용한다
// 기능을 하나의 묶음으로 표현했다고 보면 
// 프로그햄을 개발할때 작은 단위
// 모듈화 각각의 파일을 단위로 구분하고 파일의 내용에 필요한 공통된 기능들이 포함되어 있는것

// 로또라는 기능을 모듈화 했다
// 로또의 모든 기능과 사용되는 변수를 하나의 파일로 내보내서 모듈화 시켰다
// `모듈화`

const blockClass = [
    {
        name : "soon",
        age :21,
        comment() {  //  functiond을 사용하면 불필요한 생성자의 내용까지 포함되기 떄문에
            console.log("안녕")
        }
    }
    {
        name : "kim",
        age : 30,
        comment() {
            console.log(`안녕 ${this.name} 이야`)
        }
    }
]

module.exports = blockClass;

```


### 오늘은 중요한 부분 모듈와 nodejs의 스코프

### nodejs 모듈 레포

```js
(
    function(exports, require, module, filename, .....){
        // 우리가 작성하는ㄴ 코드들이 이 영역에 포함된다.
        // 레퍼 때문에 각각의 파일들이 독립된 환경에서 실행된다
        // module 은 현재 모듈 자체 
        // exports module에서 내보내는 객체 최초에 빈객체
        // 객체 안에서 this 전역 객체를 가르키는게 아니라 exports 를 가르킨다.

        // 모듈 스코프 - 각각의 독립된 파일들이 독립된 모듈로 실행된다
        // 다른 파일에서 선언한 함수, 변수 참조할수 없다
        // require 모듈을 사용해서 다른 파일에 있는 값을 가져와서 사용할수 있다.
        // 함수 스코프에 this는 전역 객체를 가르키게 된다 : this 는 global로 가르키게 된다.

        // module.exports === exports
        // exports
        // module.exports 새로운 객체를 할당할때
        // exports 는 키를 생성해서 할당할때
    }
)
```

### 모듈 A 모듈 B 모듈 C 이렇게 세가지의 모듈을 가지고

> A 의 모듈에 B 의 모듈을 가져오고 B 의 모듈의 C 의 모듈을 가져올것

> C 의 모듈에서는 name 이라는 변수를 내보내고
> B 의 모듈에는 age 는 변수를 내보내고
> A 의 모듈에서는 name age 를 출력

### 심화 과정은

> 카운터 더하기 기능의 모듈, 뺴기 기능의 모듈을 가져와서 겨산기 모듈에 가져와서 숫자를 더하고 빼고를 호출할수 있는 모듈