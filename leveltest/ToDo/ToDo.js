
let Data = [];
Todoform.onsubmit = (e) => {
    e.preventDefault();
    const Content = e.target.content.value;
    const index = Data.length;
    console.log(Content)
    Data.push({index : index, Content : Content});
    localStorage.setItem("comment", JSON.stringify(Data));
    console.log(typeof(Data))
    render(Data)
}


const render = (Data) => {
    bodycontent.innerHTML = "";
    for (let i = 0; i < Data.length; i++) {
       
    const Ul = document.createElement('ul')
    const Check = document.createElement("input");
    const Inputcontent = document.createElement("li");
    const Delete = document.createElement("button")
    const Content = Data[i].Content;
    Inputcontent.innerHTML = Content;
    Delete.classList.add("Deletecontent");
    Check.type = "checkbox";
    Delete.innerHTML = "삭제";
   
    Ul.append(Check, Inputcontent, Delete);
    bodycontent.append(Ul)


    Delete.onclick = (e) => {
        const {index} = Data[i];
        console.log(index)
        Data.splice(index, 1);
        for (let I = 0; I < Data.length; I++) {

            Data[I].index = I;
        }
        localStorage.setItem("comment", JSON.stringify(Data));
        location.reload();


    }
    }
}




const init = () => {
    const _Data = JSON.parse(localStorage.getItem("comment")) || [];
    Data = _Data
    render(Data)
}


init()