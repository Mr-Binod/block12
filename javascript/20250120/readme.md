
# DOM 의 사용 목적과 문법


BOM : 브라우저의 기능을 사용하기 위한 목적을 가진 객체

DOM : HTML 문사의 기능을 사용하기 위한 목적을 가진 객체 (DOCUMENT, TREE STRUCTURE)

## DOM 객체의 요소 건택

```JS
// 요소의 아이디명으로 선택해서 요소를 할당
// 원하는 노드를 선택해서
// getlelementById 일반 요소에는 포함되어 있지 않다
// id 요소는 메서드로 요소를 호출해도 되고
// html 문서상에 도유한 이름으로 사용하기 떄문에
// javascript에서 동적으로 이름을 사용해서 접근할수 있다
const element = document.getElementById("box");
element === <div id="box"></div>

// id 변수는 바로 그대로 접근할수도 있습니다
console.log(box);
```

```html
<div id="box"></div>

```

### querySelector

```js
// querySelector 아이디만이 아니고 클래스 즉 선택자의 내용을 작성해서 css 선택자
// 요소를 호출할수 있다
// 선택자 이름으로 요소 호출
// 같은 클래서 있는 경우 위에 있는 클래스를 호출하고 끝납니다. 
const element = document.querySelector("div"); // tagname
const element = document.querySelector(".box"); // class
const element = document.querySelector("#wrap"); // id


// 요소가 많은 경우
const element2 = document.querySelectAll(".box");  // 여러 클래스를 접근할때

// box 클래스가지고 있는 요오 유사 배열 nodelist
```

### 요소의 속성값

```js
element.style.color = "blue";
// 인라인 스타일로 추가

```

### 요소의 내용 

```js
element.innerText // 글자의 내용을 작성할떄
element.innerHTML // HTML 요소의 내용을 또는 글자를 작성할꺠

// input과 img 요소 등은
// input 요소의 value type등은 키로 접근이 가능하가
// img 태그도 마찬가지
// 일반적인 요소가 아닌 특수한 요소들은 키로 값을 접근할수 있다

const content = document.querySelector(".content");
content
```

```html
<input class = "content">
```

## 요소의 이벤트 속성

```js
const element = document.querySelector(".content-btn");
// click 이벤트
// onclick이라는 속성으로 정의되어있다
// 함수의 값을 전달했는데
기능을 바로 호출하는게 아니고 대기
// 콜백

element.onlcick = () => {
    console.log("이 내용은 요소를 클릭할꺠 호출된다.")
}
```

```html
<button class = "content-btn">눌러봐</button>
```

### 이벤트를 활용해서 드래그앤 드롭



### 실습 과제

카운터 

버턴 누르면 숫자가 증감하는 카운터
더하기 버튼 누르면 1 증가
빼기 버튼 누르면 1 감소

0 이하로는 감소하면 안된다.

