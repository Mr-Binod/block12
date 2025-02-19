



console.log(document.querySelector(".border"))

const border = document.querySelector(".content1");
const border1 = document.querySelector(".header")
const contentArr = [];
const createContent = (index, title, content) => {
    let _li = document.createElement("li");
    const _span01 = document.createElement("span");
    const _span02 = document.createElement("span");
    const _span03 = document.createElement("span");

    _li.append(_span01, _span02, _span03);
    _span01.innerHTML = index;
    _span02.innerHTML = title;
    _span03.innerHTML = content;

    border.append(_li);
}

const addContent = () => {
    const Content = {
        index : contentArr.length + 1,
        title : title_input.value,
        content : content_input.value
    }
    contentArr.push(Content);
    render();
}
const render = () => {
    border.innerHTML = `
        <li>                     
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </li>
    `
    for (let i = 0; i < contentArr.length; i++) {
        const {index, title, content} = contentArr[i];
        createContent(index, title, content);
    
    }
}


create.onclick = addContent;