


let Data = JSON.parse(localStorage.getItem("comment")) || [];




const getQuery = () => {
    const [Querysearch] = location.search.replace("?", "").split("&").map((e) => 
    e.split("=")).filter((e) => {
        return e[0] === "index";
    })
    const index = parseInt(Querysearch[1]);
    const data = Data[index];
    console.log(data)
    return data;
}
let {index, uid, date, subject, details} = getQuery();
pagenum.innerHTML = index + 1;
Subject1.value = subject;
Details1.value = details;
Uid1.innerHTML = `${uid}`;
Date1.innerHTML = `${date}`
UploadWrap1.onsubmit = (e) => {
    e.preventDefault();
    let {Inputsubject1, Inputdetails1} = e.target;
    if(Inputsubject1.value.trim() === "" || Inputdetails1.value.trim() === "") {
        alert("제목하고 내용을 작성해주세요..")
        return;
    }

    
    
    Data[index].subject = Inputsubject1.value;
    Data[index].details = Inputdetails1.value;
    const JSONData = JSON.stringify(Data);
    localStorage.setItem("comment", JSONData);
    console.log("data set on local storage");
    alert("저장되었습니다.");
    location.href = "../views/main.html";
}

Home.onclick = () => {
    location.href = "../views/main.html";
}
Cancel1.onclick = () => {
    location.href = "../views/main.html";
}

Upload.onclick = () => {
    location.href = "../views/upload.html";
}