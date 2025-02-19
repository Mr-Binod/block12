

const user = {uid : "moon"}
const commentmain = document.querySelector("#main");
const commentList = document.querySelector("#content-frm");
const commentNlist = document.querySelector("#new-list");

const state = [];

class Call {
    constructor(content) {
        this.uid = user.uid; 
        this.content = content;
        this.update = false;
    }
}

const addState = (value) => {
    if(value.trim() === "") return;
    const _Call = new Call(value.trim());
    state.push(_Call);
}

const createRow = (index) => {
    const item = state[index];
    console.log(item)
    const createUd = document.createElement("ul");
    const createId = document.createElement("li");
    const createContent = getContentBox(item.update, item.content);
    createUd.classList.add("new-ul")
    createId.classList.add("new-id")
    createUd.dataset.index = index;
    createId.innerHTML = item.uid;
    console.log(state[index]);
    createUd.append(createId, createContent)
    return createUd;
}

const drawing = () => {
    commentNlist.innerHTML = "";
    for (let i = 0; i < state.length; i++) {
        const row = createRow(i); 
        commentNlist.append(row);       
    }
}

const getContentBox = (signal, content) => {
    // !false = true
    // !true = false
    return !signal ? createContentWrap(content) : createUpdateBox(content);
}

const createContentWrap = (content) => {
    const editContent = document.createElement("li");
    const eDit = document.createElement("span") ;
    eDit.innerHTML = content;
    eDit.onclick = clickHandler;
    eDit.classList.add("edit-btn");
    editContent.append(eDit);
    return editContent
}

const createUpdateBox = (content) => {
    const updateContent = document.createElement("li");
    const updateTextarea = document.createElement("textarea");

    // updateTextarea.value = content;
    updateTextarea.onkeyup = (e) => {
        const {index} = e.target.parentNode.parentNode.dataset;
        console.log(e);
        if(e.keyCode !== 13)
            return;

        state[index].content = e.target.value;
        state[index].update = !state[index].update;
        drawing();
    }
    updateContent.append(updateTextarea);
    return updateContent;
}

const clickHandler = (e) => {
    const eDitnode = e.target.parentNode.parentNode;
    const {index} = eDitnode.dataset;
    if (e.target.className === "edit-btn") {
        state[index].update = !state[index].update;
        drawing();
    }
}



const submitHandler = (e) => {
    e.preventDefault();
    const {content} = e.target;
    const {value} = e.target.content;
    addState(value);
    
    drawing();
    content.value = "";
    console.log(state);
    }

commentmain.onsubmit = submitHandler;



// 
// 1. health
// 2. relationships
// 3. healthy food n water
// 4. money
// 5. thoughts

// goals
// 1 complete course
// 2 trading
// 3 family


// 6 mnth live

// 1 vacation 
// 2 family spending time
// 3 relax

// millionnaire

// 1 invest, realestate, try to open company buy gifts for my families

// trying to do n doing but not afraid till new Promise((resolve, reject) => {
    
// love, myself conciousness, my getComputedStyle, life, beautiful things

// my own company


