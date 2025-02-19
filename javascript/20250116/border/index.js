

console.log(document.querySelector(".border"));


//innerHTML : 태그의 형태를 문자로 작성하면 브라우저가 해석해서 요소로 생성한다

// headers.innerHTML += "<div>안녕하세요</div>"
header.innerHTML += `
<div>
    안녕하세요
    <div>내 제목</div>
</div>`


const border = document.querySelector(".border");

// 글이 생성되는 기능을

/*
<li>
    <span>번호</span>
    <span>체목</span>
    <span>내용</span>
</li>
*/
const contentArr = [];
const createContent = (index, title,content) => {
    let _li = document.createElement("li");
    const _span01 = document.createElement("span");
    const _span02 = document.createElement("span");
    const _span03 = document.createElement("span");
    // 메모리상에 생성되고 변수에 주소가 할당만 되어있다.

    _li.append(_span01, _span02, _span03);
    _span01.innerHTML = index;
    // input요소는 value라는 속성을 가지고 있고 value 에는 우리가 입력한 값이 담긴다
    _span02.innerHTML = title;
    _span03.innerHTML = content;

    border.append(_li);
    
}
const addContent = () => {
    const content = {
        index : contentArr.length + 1,
        title : title_input.value,
        content : content_input.value
    }
    console.log(content)
    contentArr.push(content);
    console.log(contentArr);
    render();
}

const render = () => {
    // 화면에 추가한 글의 내용을 모여주는 함수
    border.innerHTML = ` <li>
                <span>번호</span>
                <span>체목</span>
                <span>내용</span>
            </li>
        `
        // 초기화
    // 다시 화면을 렌더링하기 전에 게시글을 생성할때 초기화를 한번 해준다.
    contentArr.length
    for (let i = 0; i < contentArr.length; i++) {
        // 참조 타입은 구보분해 할당
        // 객체안에 있는 키의 이름으로 할당한다.
        // contentArr 객체의 안에 있는 키의 이름이 동일
        // 객체의 구조 분해 할당
        const {index : num, title, content} = contentArr[i];
         
        // index : num  index으로 쓸수도 있고 키의 값을 할당하고 num 이라는 변수에 할당해거 
        createContent(num/* or index*/, title, content);        


    }
}

// create.onclick = createContent;

create.onclick = addContent;