


// 데이터 베이스의 유저정보
// 로그인 상태는 쿠키의 값이 있으면 깂으 있으면 로그인 상태다
// 쿠키 값을 가지고 유저정보 검증
// 쿠키도 결국 브라우저에 저장되는 문자열의 형태

const user = {uid : "soon"}
const PAGENUM = 5;
let pageIndex = 1;

console.log(localStorage.getItem("comment"));
const localStorageValue = JSON.parse(localStorage.getItem("comment"));
// 값으 있으면 가져오소 없으면 조기화
const arr = localStorageValue || [];
// | : 값이 있는지 검사를 해서 있으면 localStorageValue 아니면 [] 반환한다
//  || : 값이 있으면 그 값을 반환
class Comment {
    constructor(title, content) {
        this.uid = user.uid;
        this.title = title;
        this.content = content;
    }
}

const addComment = (title, content) => {
    if(title.trim() === "" || content.trim() === "") return;
    const instance = new Comment(title.trim(), content.trim());
    arr.push(instance);
    localStorage.setItem("comment", JSON.stringify(arr))
}
// 요소르 생성하는 함수
// 객체 전달하고 search
const createContent =(index, search) => {
    if(search){

        item = search[index];
    }
    else 
    item = search[index] | arr[index];
    const ul = document.createElement("ul");
    const li_uid = document.createElement("li");
    const li_title = document.createElement("li");
    const li_content = document.createElement("li");
    /*
        ul 
            li
            li
            li
        ul
    */
    
    ul.append(li_uid, li_title, li_content);
    const {uid, title, content} =item;
    li_uid.innerHTML = uid;
    li_title.innerHTML = title;
    li_content.innerHTML = content;
    ul.onclick = () => {
        // pageIndex * PAGENUM
        // index = 0 :
        // index = 1 :
        // index = 2 :
        // index = 3 :
        // index = 4 :
        location.href = `../detail/index.html?index=${index + (pageIndex -1) * PAGENUM}`;
        console.log(location)
    }
    content_wrap.append(ul);
}
const render = (arr, search = true) => {
    content_wrap.innerHTML = "";
    arr.forEach((el, index) => {
         // e is for item and index
        if(search){
            createContent(index, arr);
        }
        else {
            createContent(index);
        }
    });
}

render(arr);
form_wrap.onsubmit = (e) => {
    e.preventDefault();
    const {title, content} = e.target;
    addComment(title.value, content.value);
    console.log(arr);
    title.value = "";
    content.value = "";
    render(arr);
}
// onkey down 은 value 값이 할당되기전에 콜백함수가 호출된다
search_input.onkeyup = (e) => {
    console.log(e.target.value);
    const arrTemp = [...arr];  // spread 연산자
    // "".startsWith() 문자열이 매개변수로 전달한 문자열로 시작되는지 확인
    const searchArr = arrTemp.filter((el) => el.title.startsWith(e.target.value))
    render(searchArr, true);
}

const paginationCreate = () => {
    const total = arr.length;
    const pages = Math.floor(total + PAGENUM -1) / PAGENUM;
    console.log(pages);
    console.log(total);
    for (let i = 0; i < pages; i++) {
        const span = document.createElement("span");
        span.innerHTML = i + 1;
        span.onclick = () => {
            pageIndex = i + 1;
            paginationContent(pageIndex)
        }
        pagination.append(span);
    }
}

const paginationContent = (index) => {
    // 현제 페이지 인덱스 - 1 * 페이지의 글 갯수 
    let pagingContent = [...arr].splice((index -1) * PAGENUM, PAGENUM);
    console.log(pagingContent);
    render(pagingContent, true)
}
paginationCreate();
paginationContent(pageIndex);

// 쿠키의 내용은 열번 호출될수 있다
// 재사용성을 위해서 기능으로 만들자

// 만료 시간 지정안한 쿠키는 세션으로 만료시간이 지정되소 세션느 브라우저르르 종료하면 사라진다
// 크키의 삭제는 만료시간으 과거의 값으로 덮어씌우면 쿠키가 삭제된다

// if we set pasttime cookie will expire like 5 min before now then cookie will expire 
const setCookie = (key, value, time) => {
    let date = new Date();
    date.setTime(date.getTime() + time * 24 * 60 * 60 * 1000);
    console.log(date.toUTCString())
    document.cookie = `${key}=${value}; expires=${date.toUTCString()}; path=/;`
}

const getCookie = (key) => {
    console.log(document.cookie)
    let result;
    // 쿠키의 값이 여러개일떄  ; 으로 구분
    let arr = document.cookie.trim().split(";")
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trim().split('=');
        if(key === arr[i][0]) {
            result = arr[i][1];
        }
    }
    console.log(arr)
    console.log(result)
    return result;
}

if(getCookie("login")) {
    login_user.innerHTML = getCookie('login');
    user.uid = getCookie("login");
    console.log("내가 보임")
}

getCookie("login");
const deleteCookie = (key) => {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`   // templete literal
}
login_btn.onclick = () => {
    
    setCookie("login", login_input.value, 1);
    // setCookie("login2", login_input.value, 1);
    location.reload();
}

// 쿠키의 값이 있으면 로그인이 유지되는 상태가
logout_btn.onclick = () => {
    deleteCookie("login");
    location.reload();
}