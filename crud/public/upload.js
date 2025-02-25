
let Data = JSON.parse(localStorage.getItem("comment")) || [];
const uid = "soon";
const date = 20250225;


class Content{
    constructor(index, uid, date, subject, details) {
        this.index = index;
        this.uid = uid;
        this.date = new Date;
        this.subject = subject;
        this.details = details;
    }
    getToday(text) {
        const date = this.date;
        let m = date.getMonth() + 1;
        let d = date.getDay();
        return[date.getFullYear(), (m > 9 ? "" : 0) + m, (d > 9 ? "" : 0) + d].join(text);
    }
}

Home.onclick = () => {
    location.href = "./main.html";
}
UploadWrap.onsubmit = (e) => {
    e.preventDefault();
    const {Inputsubject, Inputdetails} = e.target;
    if(Inputsubject.value.trim() === "" || Inputdetails.value.trim() === "") {
        alert("제목이랑 내용을 작성해주에요.")    
        return;
    }
    
    const updatedata = new Content(Data.length, uid, date, Inputsubject.value, Inputdetails.value);
    Data.push(updatedata);
    const newdata = JSON.stringify(Data);
    localStorage.setItem("comment", newdata);

    alert("저장 황료 되었습니다.")
    // location.href = "./main.html";
 
}

Cancel.onclick = () => {
    location.href = "./main.html";
}

const init = () => {
    const getdata = localStorage.getItem("comment");
    Data = JSON.parse(getdata) || [];
    console.log(Data)
}

init();
console.log(Data);