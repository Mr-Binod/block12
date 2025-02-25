


let Data = [];
const uid = "soon";


const date = 20250225;

Upload.onclick = () => {
    location.href = "./upload.html";
}
Home.onclick = () => {
    location.href = "./main.html";
}
const render = (Data, index) => {
    contenT.innerHTML = "";
    for(let i = 0; i < Data.length; i++) {
        const uploadcontent = document.createElement("ul");
        const uploadindex = document.createElement("li");
        const uploaduid = document.createElement("li");
        const uploaddate = document.createElement("li");
        const uploadsubject = document.createElement("li");
        const uploaddetails = document.createElement("li");

        uploadcontent.id = "UContent";
        uploadsubject.classList.add("USubject");
        uploaddetails.classList.add("UDetails");
        uploaduid.classList.add("UUid");
        uploaddate.classList.add("UData");

        uploaduid.innerHTML = Data[i].uid;
        uploaddate.innerHTML = Data[i].date;
        uploadsubject.innerHTML = Data[i].subject;
        uploaddetails.innerHTML = Data[i].details;
        uploadindex.innerHTML = (index * pagenum +1) + i ;
        uploadcontent.append(uploadindex, uploaduid,  uploadsubject,  uploaddetails, uploaddate);
        contenT.append(uploadcontent);
    }
}
const pagenum = 10;
let pageindex = 1;

const createpagination = () => {
    const total = Data.length;
    const pages = Math.floor(total) / pagenum;
    for (let i = 0; i < pages; i++) {
        const span1 = document.createElement("span");
        span1.innerHTML = i + 1;
        span1.onclick = () => {
            pageindex = i + 1; 
            paginationcontent(i);
        }
        pagination.append(span1);
    }
}

const paginationcontent = (i) => {
    const pagingArr = [...Data].splice((i) * pagenum, pagenum);
    console.log(pagingArr)
    render(pagingArr, i);
}

const init = () => {
    Data = JSON.parse(localStorage.getItem("comment")) || [];
    paginationcontent(0);
    createpagination();

}
init()
console.log(Data)