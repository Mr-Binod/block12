


# DOM 을 사용해서 CRUD

댓글 구현

## COUNT

0

```js
const display = document.querySelector("#counter");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelect("#decrement");

let num = 0;

const increment = () => {
    num += 1;
    render();
}

const decrement = () => {
    if(num > 0)  // 중괄호 럾으면 유효범위다 바로 밑에줄만 실행 된다
        num -= 1;
        render();
}
// increment // id can be directly called
increment.Btn.onclick = increment
decrement.Btn.onclick = decrement

const render () {
    display.innerHTML = num;

}

```

```html
<div id="counter">0</div>

<button id="increment">increment</button>
<button id="decrement">decrement</button>

```

## 이벤트 handler 함수 작성
> 이벤트 제어 함수를 만들어서 재사용성

```js
// 조건문 ? true : false
// const a = 1 === 2 ? 1 : 2;   // condition if 1 is equal to 2 true then print 1 if false then print 2
const handler = (event) => {
    display.innerHTML = e.target.id === "increment" ? ++num : num > 0 ? --num : num; // 삼항 연산자 "?" sign  // 가독성이 떨어지는 조건문인데 1 뎁스까지는 돤찮다
}
incrementBtn.onclick = handler;

decresementBtn.onclick = handler;
```

## CRUD

> 댓글 구현

1. 댓글 입력 할수 있다 (CREATE)
    - 댓글을 입력창에 입력하고 작성을 누르면 리스트에 댓글이 추가된다
    - 댓글을 성공적으로 추가하면 입력품의 입력내용을 리셋시켜준다

2. 갯글을 리스트로 조회해서 출력해준다 (READ)
    - 댓글을 내용은 `아이디`, `댓글 내용`, `날짜` 로 표현
    - 댓글 리스트는 최신순으로 표현
    - 댓글의 총 갯수를표현
    - 수정 버튼이 존재한다
    - 삭제 버튼이 존재한다

3. 댓글을 수정할수 있다 (UPDATE)
    - 댓글의 리스트에서 내용을 클릭하면 INPUT 요소가 생기고
    - INPUT 에 값을 입력받고
    - 엔터를 누르면 INPUT 의 내용을 수정된게

4. 댓글을 삭체 할수 있다 (DELETE)
    - 해강 리스트에 삭제 버튼을 클릭하면 안내를 한번 내고 삭체
    - 확인을 누르면 삭체
    - 취소를 누르면 취소

### CREATE 단계

객체를 사용해거 사물을 표현 
> 댓글 하난의 내용이 객체로 표현 될수 있다

```js
const name = "장민우"
const content = "안녕하십니까?"

const name = "장민우"
const content = "안녕하십니까?"

const name = "장민우"
const content = "안녕하십니까?"

// 이렇게 하는것보다 객체를 사용해서 해야합니다.
```
```js

const obj = {
    uid : "soon"
    comment : "내용"
    date : "2025-01-21"    
}
obj.uid
obj.comment
obj.date

// 글들이 리스트의 형태 수천개 수만개가 될수 있는 데이터를 관리하는데 좋은 데이터 타입
// 배열을 사용해서 관리하면 수월하다
// 백엔드 에서는 문자열로 변환되어서 데이터의 내용이 전달된다. 문자열

const date = `[{
    uid : "soon"
    comment : "내용"
    date : "2025-01-21"    
}]`

// 데이터 파싱 형변환을 해서

// 배열안에 글글을 담을거니 

const contentList = [
    {
        uid : "soon1"
        comment : "comment 1"
        date : new Date(); 
    },
    {
        uid : "soon1"
        comment : "comment 1"
        date : new Date(); 
    },
    {
        uid : "soon1"
        comment : "comment 1"
        date : new Date(); 
    },
    {
        uid : "soon1"
        comment : "comment 1"
        date : new Date(); 
    },
    {
        uid : "soon1"
        comment : "comment 1"
        date : new Date(); 
    }
    ];

for(let i = 0, i < contentList.length, i++ ) {
    contentList[i].uid === "soon"

    const str = `${contentList[i].uid} 가 ${contentList[i].comment} 를 ${contentList[i].date} 에 작성했음`
}

// date 객체

// javascript 내장되어 있는 생성자]
// 날짜 시간 데이터를 다룰때 제공하는 메서드가 포함되어 있는 객체


console.log(new Date(1000));  
// 컴퓨팅 시스템에서 시간을 추적하는 시스템 유닉스 시간의 시점에서 부터
// 1000 밀리세컨드 시간이 증가된 값
// 메서드에 get 값을 가져오겠다 조회하곘다
// set의 키워드는 값을 수정하겠다



console.log(new Date().getFullYear());
console.log(new Date().getMonth() + 1);  //  0 ~ 1  index  present month is 0 index
console.log(new Date().getDate()); // 일수는 그대로 1 ~ index
console.log(new Date().getDay()); // 일요일부터 0 ~ 6 index
```


```js
const list = [{uid : "soon", comment : "내용", date : "2025"}]

const ul = document.createElement("ul")  // ul 요소를 만들어서 반환
// 요소의 주소를 할당
// 아직은 화면에 보이는 상태가 아니다
// 브라우저의 노드 트리에 추가를 해서 화면에 보이게 만들어 줘야 document 에 보인다

const li = documentElement("li");
const li2 = documentElement("li");
const li3 = documentElement("li");
ul.append(li, li2, li3)   // 괄호안에 있는 요소를 자식요소로 추가
//

li.classList.add("comment-uid"); // 초기화 하는 단뎨
li2.classList.add("comment-content"); // 초기화 하는 단뎨
li3.classList.add("comment-date"); // 초기화 하는 단뎨

// 객체 구조분해 할당
const {uid : myuid, comment, date} = list[i];
// uid 키하고 myuid키 두개 쓸수 있다. 할당 시켜준다

li.innerHTMl = uid;

li.innerHTML = uid;
li2.innerHTML = comment;
li3.innerHTML = date;

// <ul>
//     <li class="comment-uid"></li>
//     <li class="comment-content"></li>
//     <li class="comment-date"></li>
// </ul>

document.body.append(ul);   // 추가 됬고 화면에 보인다 document 안에 append 시켜야 html 에 추가 됩니다.

```


### 실습

3 시부터 페어 코딩
CRUD에서 CR 구현 댓글
말하는 사람 코드는 사람
말하는 사람은 코드에 손대면 안됨