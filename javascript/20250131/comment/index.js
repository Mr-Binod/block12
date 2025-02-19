
let data = [];



class Comment {
    constructor(_index, _value, _name, _image) {
        this.index = _index;
        this.value = _value;
        this.name = _name;
        this.image = _image;
    }
}
// 리터를 방시 클랏 방식으로는 상속을 가질수 있다

content_form.onsubmit = (e) => {
    e.preventDefault();
    const {content_value, content_image, content_name} = e.target;
    console.dir(content_image)
    console.dir(content_value)
    console.dir(content_name)
    // image 같은 파일은 input 에 파일의 내용을 가지고 있는 객체에 포함된다
    // 이후에 바이너리 데이터로 전송
    // 대용량 영상 처리를 백엔드

    console.dir(content_image.files[0].name)
    // 글 생성
    const comment = new Comment(data.length + 1, content_value.value, content_name.value, content_image.files[0].name);
    console.log(comment)
    data.push(comment);
    // data 강제 형변환
    console.log(data.toString());
    // 문자열 변경을 하는데 JSON 문자열로 변경
    // 로컬에 데이터를 저장

    // javscript object notation : 요청과 응답간에 경량 데이터 형식을 만등것.
    /* json 의 문법
        {"name" : "soon"}
    */
    // 내장되어 있는 원형 객체를 사용해서 변경
    // const str = JSON.stringify(data); // 반환값이 string json 문자열
    // // 주고 받은 이후에 JSON 문자열을 사용하기 위해서
    // const obj = JSON.parse(str);

    // console.log(str, obj)
    // const index = str.indexOf("index");
    // index[0].name

    const content_JSON = JSON.stringify(data);
    localStorage.setItem("comment", content_JSON);
}

console.log(data);

// <!-- <ul>
//     <li>번호</li>
//     <li>내영</li>
//     <li><img>></li>
//     <li>이름</li>
// </data->
const render = () => {
    for (let i = 0; i < data.length; i++) {
        // 글 갯수만큼 반복
        const ul = document.createElement("ul");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        const li4 = document.createElement("li");
        const image_tag = document.createElement("img");
        ul.append(li1, li2, li3, li4);
        li3.append(image_tag);
        
        const {index, value, name, image} = data[i];
        li1.innerHTML = index;
        li2.innerHTML = value;
        li4.innerHTML = name;
        image_tag.src = "./image/" + image;

        document.querySelector(".content").append(ul);
    }
}

const init = () => {
    if(localStorage.getItem("comment")) {
        const _data = JSON.parse(localStorage.getItem("comment"));
        data = _data;
        // JSON 문자열로 
    }
    render();
}




init();