


// 댓글의 형태가 객체
// 생성자 함수
/*
    {
        uid : ""
        content : ""
        date : ""
    }
*/ 
const user = {uid : "soon"}
const commentFrm = document.querySelector("#comment-frm")
class Comment {
    constructor(content) {
        this.uid = user.uid;
        this.content = content;                                           
        this.date = new Date();
    }
    // 값을 조회하겠다
    getToday(text) {
        // 2025-01-21 | 2025/01/25
        // 날짜의 문자열 형태를 커스텀 하는 내용이 자주 사용되니 메서드로 만들어두자
        const date = this.date;
        let m = date.getMonth() + 1;
        let d = date.getDate();
        // 배열 메서드  join
        [date.getFullYear(), (m > 9 ? "" : "0") + m, (d > 9 ? "" : "0") + d].join(text); // text 매게변수를 가지고 반환한다
        // join 의 반환값이 string 문자열로 형번환
        // , 요소의 구분 부분의 텍스트를 넣어준다 하나의 문자열로
        // [1, 2, 3].join("") === "123"
        // [1, 2, 3].join("*") === "1*2*3"
        // (text === "/") === 2025/01/21
        return [date.getFullYear(), (m > 9 ? "" : "0") + m, (d > 9 ? "" : "0") + d].join(text)
    }
}
// 글을 작성했을때 객체 생성이 일어나는데
// 생성자함수가 호출된다.
// 총 글을 작성했을때 객체 생성이 일어나는데 
// 생성자함수가 호출된다
// 전체 글을 담을 배열
const state = [];
// 총 글의 갯수를 확인
const setTotalRecord = () => {
    const span = document.querySelector("h4>span");
    span.innerHTML = state.length;
}
// 배열에 글 추가
const addState = (value) => {
    const instance = new Comment(value);
    state.push(instance);
    setTotalRecord();
}
// 게시글 하나 생성하는 함수
const createRow = (index) => {
    // 배열에 추가된 글의 인덱스 번호를 사용하기 위해
    const item = state[index];
    const commentRow = document.createElement("ul");
    const commentId = document.createElement("li");
    const commentContent = document.createElement("li");
    const commentDate = document.createElement("li");
    commentRow.classList.add("comment-row");
    // data-index = "3"
    commentRow.dataset.index = index; // 수정이나 삭제부분 사용할때 index 를 요소에 기록
    // 스타일 작성하는것 class
    // 개발자가 요소에 속성의 값이 필요할때
    // 민갑한 정보는 담으면 안된다.
    commentId.classList.add("comment-id");
    commentId.innerHTML = item.uid;
    commentContent.innerHTML = item.content;
    commentDate.classList.add("comment-date");
    commentDate.innerHTML = item.getToday("-");
    commentRow.append(commentId, commentContent, commentDate);
    return commentRow;
}

const commentList = document.querySelector(".comment-list");
const drawing = () => {
    commentList.innerHTML = "";
    for (let i = 0; i < state.length; i++) {
        const row = createRow(i);
        commentList.append(row); 
    }
}
// create 
const submitHandler = (e) => {
    e.preventDefault();   // submit 요청을 막는다 .새로고침이 일어나지 않는다.
    // 기본적인 form의 요청
    const {content} = e.target;   // input 요소의 name = content로 작성했기때문에 값을 가져올수 있다.
    // content : content 라는 이름의 속성을 가지고 있는 input 요소 자체
    const {value} = content;
    console.log(value);
    addState(value);
    drawing();  // 화면에 요소를 그리는 작업
    console.log(value);
    content.value = ""; 
}
commentFrm.onsubmit = submitHandler;

// Content =  e.target.content;
// Value = content.value;

