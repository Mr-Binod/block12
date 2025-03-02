


let Data = JSON.parse(localStorage.getItem("comment")) || [];

// http://127.0.0.1:5501/crud/views/details.html?index=1

const getQuery = () => {
    const [Querysearch] = location.search.replace("?", "").split("&").map((e) =>
    e.split("=")).filter((e) => {return e[0] === "index"});
    const index = parseInt(Querysearch[1])
    const data = Data[index];
    return data;
    console.log(Querysearch, index, data)
}

const render = () => {
    const {index, uid, date, subject, details } = getQuery();
    console.log((details));
    detailS.innerHTML = details;
    uiD.innerHTML = uid;
    datE.innerHTML = date;
    subjecT.innerHTML = subject;
    uindeX.innerHTML = (index + 1);
    deletE.onclick = () => {
        Popcontent.innerHTML = "";
        console.log("clicked");
        const detailswrap1 = document.querySelector(".detailswrap1")
        const Popup = document.createElement("div");
        const comment = document.createElement("div");
        const comment1 = document.createElement("div");
        const confirm = document.createElement("button");
        const cancel = document.createElement("button");

        Popup.id = "Popup";
        comment.classList.add("commenT");
        comment1.classList.add("commenT1");
        confirm.id = "confirM";
        cancel.id = "canceL";

        comment.innerHTML = "삭제하실래요??";
        confirm.innerHTML = "Confirm";
        cancel.innerHTML = "Cancel";
        comment1.append(cancel, confirm)
        Popup.append(comment, comment1);
        Popcontent.append(Popup);
     
        const setOpen = (DetailsWrap) => {
            if(DetailsWrap.classList.contains("isactive")) {
                
                DetailsWrap.classList.remove("isactive");
            }
            else {
                DetailsWrap.classList.add("isactive");
            }
            
        }
        setOpen(DetailsWrap);
        confirm.onclick = () => {
            
            Data.splice(index, 1);
            const JSONData = JSON.stringify(Data);
            localStorage.setItem("comment", JSONData);
            location.href = "../views/main.html";
            for (let i = 0; i < Data.length; i++) {
                Data[i].index = i;    
                const JSONData = JSON.stringify(Data);
                localStorage.setItem("comment", JSONData);
              
            }
            setOpen(DetailsWrap);
        }
        cancel.onclick = () => {
            setOpen(DetailsWrap);
            return;
        }
    }
    ediT.onclick = () => {
        location.href = `../views/edit.html?index=${index}`;
    }
}

render();

Upload.onclick = () => {
    location.href = "../views/upload.html";
}

Home.onclick = () => {
    location.href = "../views/main.html";

}
bacK.onclick = () => {
    location.href = "../views/main.html";

}