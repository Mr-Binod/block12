

## javascript 동기 비동기,  javascript 스레드 (thread)

# 동기는 (blocking)
1. 작성한 코드의 순서대로 실행
2. 작업이 끝나야 다음 작업을 실행한다.


``` js 동기적으로 코드를 실행 된다 1, 2, 3
console.log("하나")
console.log("둘")
console.log("셋")

```


## 비동기 (non blocking)

1. 작성한 코드가 순서를 기다리지 않고 실행된다
2. 특정 시간 이후에 코드를 실행시켜야 하는 경우 (타이머를 만든다던지, 네트워크상에서 데이터의 요청과 응답을 처리하는 시간)

화면을 렌더링하는 함수

비동기 함수 영역------------|
데이터를 가져와서 게시글을 보여주는 함수
//데이터를 가져오는데 겅이는 시간이 10초 오래걸리게
게시글을 렝더링하는 함수
|----------------

화면을 렌더링하는 함수


```js
cosole.log("시작")

setTimeout(() => {
    console.log("게시글 데이터를 가져왔음");
    console.log("게시글 화면을 렌더링");
}, 1000)

console.log("메인화면 렌더링")

```
### javascript의 실행 방식 이벤트 루프
> javascrit는 싱글 스레드(single processor)  (working person 1)
> 이벤트 루프의 실행방식을 가지고 비동기 로직의 처리를 가능하게 한다.                                         


### node js (싱글 스레드는 아닙니다.)(single processor)
### 메크로 테스크, 마이크로 테스크
> setTimeout : 메크로 테스크 (macro task)
> promise : 마이크로 테스크  (micro task)

```js 
// setTimeout 는 macro task 코드입니다
const login = (cb) => {
    console.log("로딩 중");
    setTimeout(() => {
        
        cb();
    }, 1000)
}

console.log("마이페이지 렌더링");

login(() => {
    console.log("login 성공");
})  // 함수의 매개변수로 전달됩니다-------------------------

console.log("마이페이지 유저 텝 렌더링");

```

### Promise 객체 (대기, 완료, 실패 객체의 비동기 작업 내용을 알려준다)

> 비동기 작업을 처리할수 있는 내용을 포함하고 있는 객체
> 데이터 요청, 파일 읽기 등
> 데이터를 받고 데이터의 응답 처리가 끝나면 함수를 호출해거 완료 상태로 만든다
> 상태 머신 상태를 관리하는 오브젝트 즉 객체
> 대기, 성공, 실패의 상태를 가질 수 있다.
> 콜백 지옥을 방지할수 있다

### promise 객체 상태
1. pending : 대기 상태 promise 객체를 생성하면 초기 상태다.
2. Fullfilled : 성공 상태
3. Rejected : 실패했다 비동기 작업이 정상적이지 


```js
// Promise 생성자에 전달하는 콜백함구의 매개변수로 첫번째 두번쨰
// 첫번째 매개변수는 성공일떄 호출할 콜백함수 함수를 호출할때 전달하는 매개변수의 값이 성공 결과 값이다
// 두번쨰 매개변수는 실패일떄 호출한 콜백 함수 함수를 호출할떄 전달하는 매개변수의 값이 실패의 경과의 값이다
const a = 1;
let promise = new Promise((res, rej) => {
    if(a === 1) {
        res("성공핶을떄 반환되는 데이터")
    }
    else {
        rej("실패핶을떄 반환되는 데이터")
    }
});

// then or catch 가 호출괴는 시기는 대기 상태가 끝났을떄

// 대기생태가 끝나고 성공의 결과가 호출되었을때
promise.then((result) => {
    `// result === "성공했을떄 반환되는 데이터"`
    // 성공한 데이터를 가지고 작업을 진행하는 코드
    // 게시판의 내영을 만들어주면 된다

})
.catch(error) => {

}

// promise chaining
// 비덩기 작업을 

res.then((result) => {
    return result
}).then((result) => {
    console.log(result);
}).catch((error) => {

})

// chaining(제이닝)  

//
class Promise {
    state = "pending"
    Fullfilled = function(resValue) {
        this.state = "Fulfilled", 
        this.resValue = resValue;
    }
    Rejected = function(rejValue) {
        this.state = "Rejected", 
        this.rejValue = rejValue;
        }
    constructor(cb) {
        this.cb = cb; //(res, rej) => {res("성공")}
    }
    init() {
        try() {
            // even if found error the program still runs
            // we can nest try catch for finding error inside loop or recurring functions
            this.cb(this.Fullfilled, this.Rejected)
        }
        catch(error) {
            console.lgo(error);
        }
        this.cb(this.Fullfilled, this.Rejected)
        //(res, rej) => {res("성공")}
    }
    then(callback) {
        /*
        callback
            (result) => {
            onsole.log(result)
        */
        //panding 끝나면 
        if(this.state === "Fulfilled") {
            callback(this.resValue);
            return this;
        }
        if(callback === undefined) {
            return this;
        }
        return this;
    }
    catch(callback) {
        // padding이 끝나면
        /*
        callback
            (error) => {
                console.log(error)
        */
        if(this.state === "Rejected") {
            callback(this.rejValue);
        }
        if(callback === undefined) {
            return this:
        }
        return this;
    }
}
const promise = new Promise((res, rej) => {res("성공")})
promise.then((result) => {console.log(result)})  
.catch(() => {console.log(error);})      
// 매개변 수에 화살표 함수 전달
// 게시판의 렌더링하는 내용을넣게되면 


```
### 콜백 지옥

```js
callback(() => {
    console.log("안녕");
    callback2(() => {
        console.log("안녕");
        callback3(() => {
            console.log("안녕");
            callback3(() => {
                console.log("안녕");
                callback3(() => {
                    console.log("안녕");
                })
            })
        })
    })
})

```


### ES8 async await

> ES8 에서 탄생한 문법
> PROMISE 의 비동시 처리의 내용을 가독성을 높이기 위해서 만들어졌다.
> async 붙은 함수는 promise를 반환하는 함수가 된다.

```js

// async 붙게되면 promise 를 반환하는 함수가 됩니다.
//const data = await promise(); 대기상태가 끝난후에 결과의 값을 반환해준다.
const dataFetch = async () => {
    // 데이터가 정상적으로 박아졌을때
    // await 는 promise 의 내용이 정성적으로 처리될때까지 기다린다
    await [여기 작성한 promise] // 대기상태가 끝날떄까지 대기 
    const data = await promise();
}
const dataFetch = async function() => {

}

async function dataFetch () {

}

```

### fetch
> api 의 내용을 요청할수 있는 메서드
> api 는 요청의 주소 url 내가 요청하는 엔드포인트의 주소를 매개변수로 전갈하면 
> json() 메서드 호출해서 사용 JSON parser JSON 객체로 변환

### 날씨 정보 가져와서 페이지에 보겨주자