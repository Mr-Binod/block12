


let Data = JSON.parse(localStorage.getItem("comment")) || [];
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


        uploadcontent.classList.add("UContent");
        uploadsubject.classList.add("USubject");
        uploaddetails.classList.add("UDetails");
        uploaduid.classList.add("UUid");
        uploaddate.classList.add("UDate");

        
        uploaduid.innerHTML = Data[i].uid;
        uploaddate.innerHTML = Data[i].date;
        uploadsubject.innerHTML = Data[i].subject;
        uploaddetails.innerHTML = Data[i].details;
        uploadindex.innerHTML = (index * pagenum +1) + i ;
        uploadcontent.append(uploadindex, uploaduid,  uploadsubject,  uploaddetails, uploaddate);
        contenT.append(uploadcontent);
        uploadcontent.onclick = () => {
            console.log("clicked")
            location.href = `../views/details.html?index=${(index * pagenum) + i}`;
        }
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

searchsubject.onkeyup = (e) => {
    const Searchbtn = document.querySelector(".fa");
    let searchArr = [...Data].filter((el) => el.subject.startsWith(e.target.value));
    searchArr = searchArr.splice(0, 10); 
    if(e.keyCode === 13) {
        console.log("enter")
        render(searchArr, 0);
    }
    Searchbtn.onclick = () => {
        render(searchArr, 0);    
        
    }
}
 


const init = () => {
    Data = JSON.parse(localStorage.getItem("comment")) || [];
    paginationcontent(0);
    createpagination();
    // render(Data)

}
init()
console.log(Data)


let index = 0;
let start;
let {length} = document.querySelectorAll(".swiper");
let swiper = document.querySelector(".swiper")
imgcontent.onmousedown = (e) => {
    e.stopPropagation();
    start = e.clientX;
    console.dir(e, e.stopPropagation())
    console.log(start, "start")
}
imgcontent.onmouseup = (e) => {
    console.log("hi")
    if(start > e.clientX) {
        if(length -1 > index) {
            index++;
            console.log(index, 'onmouse')
            swipeMove();
        }
    }
    else {
        if(index > 0)
            index--;
            swipeMove();
    }
}

const swipeMove = () => {
    let swiperWidth = parseInt(getComputedStyle(swiper).width);
    console.log("width", swiperWidth, index, "index")
    imgul.style.left = `${-(index * swiperWidth)}px`;
}

const initialMove = () => {
    index = 1;
    imgcontent.style.transition = "initial";
    swipeMove();
}

const finalMove = () => {
    index = 3;
    imgcontent.style.transition = "initial";
    swipeMove();
}

imgcontent.ontransitionend = () => {
    if((length -1) === index){     
        initialMove();
        setTimeout(() => {
            imgul.style.transition = '1s';
        },100)
    }
    if(length - 4  === index) {
        
        finalMove();
        setTimeout(() => {
            imgul.style.transition = `1s`;
        }, 100);
    }
} 

next.onclick = () => {
    if(index < length - 1){
        index++;
        console.log("next")
        swipeMove();
    }
    else {
        initialMove();
    }
}
prev.onclick = () => {
    if(index > 0){
        index--;
        console.log("prev")
        swipeMove();
    }
    else {
        finalMove();
    }
}


window.onscroll = () => {
    const scroll = window.scrollY;
    if(scroll > 50) {
        console.log(scroll)
        scrollwrap.classList.add("isactive")
        console.log("hi")
    }
    else {
        scrollwrap.classList.remove("isactive")
    }
}



