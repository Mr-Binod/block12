

const getQueryContent = () => {
    // ?index=3&name=2
    // location.search.replace("?") === index=3&name=2
    // location.search replace("?").split("&")=== [index=3, name=2]
    // location.search replace("?")/ssplit("&").map((e) => e.split("=")) === [[index,3], [name,2]]
    // location.search replace("?")/ssplit("&").map((e) => e.split("=")).filter((e) => e[0] === "index") === [[index,3]]
    // [[index,3]] 이 배열을 구조 분해 할당
    // const[index] = [[index,3]]; === [index,3]
    // ":" 객체의 구조분해 할당
    // 배열의 구조분해할당에 사용 X
    // [[]] 이런식으로 사용해야한다
    // const [[index]] =
    // 0 의 인덱스에는 key 1 에는 value 
    // const [[key, value]] = 
    const [searchArr] = location.search.replace("?","").split("&").map((e) => e.split("=")).filter((e) => {
                        return e[0] === "index"})
    const index = parseInt(searchArr[1]);
    const data = JSON.parse(localStorage.getItem("comment"))[index];  // data[index] like
    console.log(data)
    console.log(location)
    return data;
}

const render = (data) => {
    uid.innerHTML = data.uid;
    title.innerHTML = data.title;
    content.innerHTML = data.content;
}
const init = () => {
    // const data = getQueryContent();
    // render(data);
    render(getQueryContent());
}

init();