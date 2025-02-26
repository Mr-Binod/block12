
let Data = JSON.parse(localStorage.getItem("comment")) || [];
// const uid = "soon";



class Content{
    constructor(index, uid, subject, details) {
        this.index = index;
        this.uid = uid;
        this.date = this.getToday();
        this.subject = subject;
        this.details = details;
    }
    getToday() {
        const date = new Date();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        console.log(date, m, d)
        return[date.getFullYear(), (m > 9 ? "" : 0) + m, (d > 9 ? "" : 0) + d].join("/");
    }
}

const GetToday = () => {
    const date = new Date();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    console.log(date, m, d)
    return[date.getFullYear(), (m > 9 ? "" : 0) + m, (d > 9 ? "" : 0) + d].join("/");
}

DatE.innerHTML = `${GetToday()}`;
Home.onclick = () => {
    location.href = "./main.html";
}
UploadWrap.onsubmit = (e) => {
    e.preventDefault();
    const {Inputsubject, Inputdetails, Userid} = e.target;
    if(Inputsubject.value.trim() === "" || Inputdetails.value.trim() === "" || Userid.value.trim() =="") {
        alert("제목이랑 내용을 작성해주에요.")    
        return;
    }
    const updatedata = new Content(Data.length, Userid.value, Inputsubject.value, Inputdetails.value, );
    // const itemdate = updatedata.getToday("/");
    Data.push(updatedata);
    const newdata = JSON.stringify(Data);
    localStorage.setItem("comment", newdata);

    // alert("저장 황료 되었습니다.")
    location.href = "./main.html";
 
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