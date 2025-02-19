

## DOM, document object model,  BOM

> javascript 로 html을 동적으로 조작 하는 기능을 `브라우저` 에서 구현한 모델

- DOM : document object model (browser object)
- BOM : browser object model  (window object)

```html
<div>

</div>
```

```js

window.console.log("123);

console.log(document);
document
document.body
document.getElementById("header");  // id
```
```html
<body>
    <div id = "header">타이틀</div>
</body>
    const _header = document.getElementById("header");
    console.log(_header)
<body>
    <div id = "header">타이틀</div>
</body>
console.log("header");
```
```js
// DOM === html 문서 전체의 내용 
// document 는 문서 전체의 내용을 가지고 있고 그안의 태그 요소들을 선택해거 제어 할수 있다.
// DOM 트리의 구조에서 자식에서 자식요소를 선택할수 있다.
// body의 내용은 document의 객체 안에 포함괴어있는데 body의 내용만 가지고 올수 있다.
// class나 id를 사용해서 body의 안의 원하는 요소를 가져올수 있다

// 자비스크립트에서 id 값은 변수처름

<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
<div class="box">4</div>

// querySelector(css 선택자 내용을 작성해서 요소를 선택할수 있다
// 맨위부터 찾다가 찾으면 종류)
document.querySelector(.box);  // id 나 클래서를 참조할때 많이 사용합니다.

console.log(box);

const boxArr = document.querySelectorAll(".box");
console.log(boxArr);
// node list 형태 배열과 유사 그래서 유가 배열이라고 부른다.
```

### 요소 생성 (createElement)
> 자바스크립트에서 동적으로 html dom 요소를 생성하기 위해거 createElement 메서드를 활용해서 요소를 생성할수 있다.

> 동적으로 요소를 생성해햐한다
> 요소의 내용을 태그의 형태로 전달을 해주고 브라우저가 읽어서 해석하는 과정에서 요소로 만들어 준다.

```js
요소를 생성하는 형태는

let el = document.createElement("div"); // 원하는 태그 이름 쓰면 됩니다

//node div 요소
// 변수에 할당이 되고 바로 보고있는 브라우저 화면에는 보이지 않는다

// 원하는 요소의 자식으로 추가해서 위치 영역을 알여준다.

box.append(el)
// append : 요소의 자식으로 추가
// node list 에 포함이 되고
// 요소가 눈에 보이게 된다

// 요소의 내용을 차가해서 자식으로 추가
let el = document.createElement("div");
// 빈 div 생성된다

// 내용을 추가해서
el.innerHTML = "본문 내용"

// 문자 text 만 작성하겠다
el.innerTEXT = "요소 제외하고 문자만 작성하겠다."

// 노드 객체
el.classList += "box2"
// classList 클래스의 문자열을 제공한다
// "box box2 box3"

```



> 또같이 게시글 직접 만들어보기 디자인도 스타일도 게시판

### CRUD (CREATE READ UPDATE DELETE)

1. 뎃글을 입력할수 있다 (CREATE)
- 뎃글의 입력품에 입력하고 버튼을 누르면 글이 입력되서 저장
- 입력창은 초기화 과어야한다

2. 댓글의 리스트로 조회해서 출룍 (READ)
- 겟글의 리스트로 조회해서 리스트의 횽태로 요소를 생성
- 총 댓글 갯수나 수정 삭제 버튼도 생성
-  갯글 아이디 날짜 내용
- 리스트를 정렬하는 방식 최신순 과거순 조회수순

3. 댓글을 수정할수 있다(UPDATE)
- 수정할 댓글을 클릭하면 수정에 필요한 내용을 입력하는 입력품이 생기고
- 값을 입력하고 확인 버튼을 눌러서 정보를 수정

4. 댓글을 삭제 (DELETE)
- 해강 리스트의 삭제 버튼을 누르면 글을 삭제

CREATE를 작업하면 READ 와 연관이 싶다
데이터 정상적으로 저장괴는지 확인을 하면 데이터가 정상적으로 추가되는지
UD 마지막으로 수정돠 가제를 하면서 READ 로 확인

내일 우리 평가 날 평가 6시 까지
60 점 미만은 재시험

스택과 큐
실행컨택스트 내용을 글로 적어서 제출

평가를 빨리 끝내면
프로젝트 끝난날 회식

8 개월

다음주 중에 목교일 금요일

