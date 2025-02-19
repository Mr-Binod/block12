


// 댓글의 형태가 객체
// 생성자 함수
/*
    {
        uid : ""
        content : ""
        date : ""
    }
*/ 
const user = {uid : "soon"};



const commentFrm = document.querySelector("#comment-frm");
const commentList = document.querySelector(".comment-list");

// 객체를 생성하기 위해서 CLASS 만들었다



const state = [];

class Comment {
    constructor(content) {
        this.uid = user.uid;
        this.content = content;                                           
        this.date = new Date();
        this.update = false;
        console.dir(state)
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


// 총 글의 갯수를 확인
const setTotalRecord = () => {
    const span = document.querySelector("h4>span");
    span.innerHTML = state.length;
}
// 배열에 글 추가
const addState = (value) => {
    // 문자열 광련된 내용
    // 댓글입력에 관련된 수정 메서드
    // trim : 띄어쓰기를 없애진다
    // "              안녕
    if(value.trim() === "") return;
    const instance = new Comment(value.trim());
    state.push(instance);
    setTotalRecord();
}




// 게시글 하나 생성하는 함수
const createRow = (index) => {
    // 배열에 추가된 글의 인덱스 번호를 사용하기 위해
    const item = state[index];
    const commentRow = document.createElement("ul");
    const commentId = document.createElement("li");
    const commentContent = getContentBox(item.update, item.content);
    const commentDate = document.createElement("li");
    commentRow.classList.add("comment-row");
    // data-index = "3"
    commentRow.dataset.index = index; // 수정이나 삭제부분 사용할때 index 를 요소에 기록
    // 스타일 작성하는것 class
    // 개발자가 요소에 속성의 값이 필요할때
    // 민갑한 정보는 담으면 안된다.
    commentId.classList.add("comment-id");
    commentId.innerHTML = item.uid;
    // 함수를 사용해서 content에 수정을 일너나는중인지
    commentDate.classList.add("comment-date");
    commentDate.innerHTML = item.getToday("-");
    commentRow.append(commentId, commentContent, commentDate);
    return commentRow;
}

const drawing = () => {
    commentList.innerHTML = "";
    for (let i = 0; i < state.length; i++) {
        const row = createRow(i);
        commentList.append(row); 
    }
}


const createContentWrap = (content) => {
    const commentContent = document.createElement("li");
    // 요소를 반환
    // 글 요소와 삭제 버튼의 요소
    const comment = document.createElement("span");
    const commentDeleteBtn = document.createElement("span");
    comment.innerHTML = content
    comment.onclick = clickHandler;
    comment.classList.add("comment-update-btn");

    commentDeleteBtn.classList.add("comment-delete-btn");
    commentDeleteBtn.onclick = clickHandler;
    commentContent.append(comment, commentDeleteBtn);

    /*
    <li>
        <span>내용
        <span>삭제 버튼
    </li>
     */

    return commentContent
}
// 수정중일떄 요소 생성
const createUpdateBoc = (content) => {
    const commentContent = document.createElement("li");
    const commentUpdateInput = document.createElement("input");
    const commentDeleteBtn = document.createElement("span");

    commentUpdateInput.classList.add("comment-update-input");
    // input 에서 enter키 누르면 수정중 종료 시키면서 글을 다시 리렌더링
    // onkeyup : 키를 눌렀다가 떘을때
    // onkeydown : 키를 누르자마자
    commentUpdateInput.value = content;
    commentDeleteBtn.classList.add("comment-update-cancel")
    commentUpdateInput.onkeyup = (e) => {
        const {index} = e.target.parentNode.parentNode.dataset;
        console.log(e);
        // 엔터를 누르면 수정이 될수있게
        if(e.keyCode !== 13) //enter key code 13
            return;
        // enter 눌렀을떄만 코드 실행 밑으로
        state[index].content = e.target.value;
        state[index].update = !state[index].update;
        drawing();
    }
    commentDeleteBtn.onclick = (e) => {
        const {index} = e.target.parentNode.parentNode.dataset;
        const flag = confirm("수정된 내용은 저장되지 않습니다.");
        if(!flag) return;
        state[index].update = !state[index].update;
        drawing();
    }
    commentContent.append(commentUpdateInput, commentDeleteBtn);
    return commentContent;
}



// 삭제와 수정을 둘다 처리할 핸들러 함수 ----------------------------------------
const clickHandler = (e) => {
    // parentNode 요소의 부모요소 호출
    const contentNode = e.target.parentNode.parentNode;
    const {index} = contentNode.dataset;
    
    if(e.target.className === "comment-update-btn") {
        // dataset의 값으로 요소의 인덱스를 찾아서
        // 반대의 bool 값을 누를떄마다 할당
        state[index].update = !state[index].update;
        console.log(state[index].update)
        // const content = e.target.innerHTML;
        drawing();
    }
    //  요소를 판단하기 위해서 data-index index 판단하기 위해서
    else {
        // 삭제 버튼 경우
        // confirm
        const flag = confirm("삭제할래?");
        // 시스템 팝업 쓰지말고 직접 모달창 만들어서
        if(flag) {
            state.splice(index, 1);
            setTotalRecord();
            drawing();
        }
    }
}

// content 영역을 나눌 함수
const getContentBox = (flag, content) => {
    // flag true나 false 값을 받아서
    //  true면 수정중
    // false 일반 글

    // !false === true
    // !true === false
    return !flag ? createContentWrap(content) : createUpdateBoc(content)
}



// 수정중이 아닐때  


// create 
const submitHandler = (e) => {
    e.preventDefault();   // submit 요청을 막는다 .새로고침이 일어나지 않는다.
    // 기본적인 form의 요청
    const {content} = e.target;   // input 요소의 name = content로 작성했기때문에 값을 가져올수 있다.
    // content : content 라는 이름의 속성을 가지고 있는 input 요소 자체
    const {value} = content;
    // {value} 는 객체의 키이고 = content은 값 입니다
    addState(value);
    drawing();  // 화면에 요소를 그리는 작업
    console.log(e)
    console.dir(content)
    console.dir(value)
    console.dir(e.target.content.value)
    content.value = ""; 
}

commentFrm.onsubmit = submitHandler;


// function onsubmitEvent() {
//     const evnet = {}
//     submitHandler(evnet);
// }

// Content =  e.target.content;
// Value = content.value;


// 상태 머신
