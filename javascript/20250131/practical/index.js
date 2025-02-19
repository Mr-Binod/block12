
let data = [];

const UpdateContent = document.querySelector(".content");

class Comment {
    constructor(_index, _value, _name, _image) {
        this.index = _index;
        this.value = _value;
        this.name = _name;
        this.image = _image;
        this.switch = false;
    }
}

content_form.onsubmit = (e) => {
    // e.preventDefault();
    const {content_value, content_image, content_name} = e.target;
    // console.dir(content_image)
    // console.dir(content_value)
    // console.dir(content_name)
    // console.dir(e)
  
    console.dir(content_image.files[0].name)
    // 글 생성
    const comment = new Comment(data.length , content_value.value, content_name.value, content_image.files[0].name);
    data.push(comment);
    // data 강제 형변환
    console.log(data.toString());
    const content_JSON = JSON.stringify(data);
    localStorage.setItem("comment", content_JSON);
}

// <!-- <ul>
//     <li>번호</li>
//     <li>내영</li>
//     <li><img>></li>
//     <li>이름</li>
// </data->

const AddUpdate = () => {
    const NewComment = new Comment
}

const render = () => {
    for (let i = 0; i < data.length; i++) {
        // 글 갯수만큼 반복

        if(data.length >= 0) {
            data[i].index = i;
        }
        const ul = document.createElement("ul");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li")
        const li3 = document.createElement("li");
        const li4 = document.createElement("li");
        const image_tag = document.createElement("img");
        const Edit_btn = document.createElement("button");
        const Delete_btn = document.createElement("button");
        const Span = document.createElement("span");
        Edit_btn.classList.add("Edit-btn");
        Edit_btn.innerHTML = "수정";
        Delete_btn.classList.add("Delete-btn");
        Delete_btn.innerHTML = "삭제";
        li3.append(image_tag);
        li1.append(Span , Delete_btn, Edit_btn)
        
        ul.append(li1, li2, li3, li4);

        let {index, value, name, image} = data[i];
        Span.innerHTML = index + 1;
        li2.innerHTML = value;
        li4.innerHTML = name;
        image_tag.src = "/javascript/20250131/comment/image/" + image;
       
        document.querySelector(".content").append(ul);
        
        Delete_btn.onclick = (e) => {
            const flag = confirm("삭제할래?");
            if(flag) {
                data.splice(index, 1);
                
                const DeleteData = JSON.stringify(data)
                localStorage.removeItem("comment");
                localStorage.setItem("comment", DeleteData);
               
                location.reload();
            }
            
            
            else{
                return;
            }

        }

        Edit_btn.onclick = (e) => {
            
            
            const CommentUpdate = document.createElement("form");
            let ListNum = document.createElement("span");
            const CommentValue = document.createElement("input");
            const CommentImg = document.createElement("input");
            const CommentName = document.createElement("textarea");
            const SaveBtn = document.createElement("button");
            
            CommentValue.type = "text";
            CommentImg.type = "file";
            CommentName.type = "text";

            CommentValue.placeholder = "이름 입력해주세요";
            CommentName.placeholder = "정보 입력해주세요";

            CommentUpdate.id = "UpdateForm";
            CommentValue.name = "Update_value";
            CommentImg.name = "Update_img";
            CommentName.name = "Update_name";
            SaveBtn.classList.add("save-btn")

            ListNum.innerHTML = index + 1;
            const EditTarget = e.target.parentNode.parentNode.parentNode;
            SaveBtn.innerHTML = "완료";
           
            console.log("hi", e)
            EditTarget.innerHTML = "";


            CommentUpdate.onsubmit = (e) => {
                // e.preventDefault();
                const {Update_value, Update_img, Update_name} = e.target;
                console.log(Update_value, Update_img, Update_name);
                
                data[index].value = Update_value.value; 
                data[index].image = Update_img.files[0].name;  
                data[index].name = Update_name.value;       
                // const EditUpdate = JSON.stringify(UpdateValue);
                // localStorage.setItem(EditValue[index], EditUpdate);
                console.log(Update_value.value, "hello")
                // UpdateValue = Value;
                localStorage.removeItem("comment");
                const UpdateData =  JSON.stringify(data);
            
                localStorage.setItem("comment", UpdateData);
                
            }
         
               
            CommentUpdate.append(ListNum, CommentValue, CommentImg, CommentName, SaveBtn);
            UpdateContent.append(CommentUpdate);
            
        }
    }
    
}

const init = () => {
    if(localStorage.getItem("comment")) {
        const _data = JSON.parse(localStorage.getItem("comment"));
        data = _data;
        // JSON 문자열로 
        console.log(data)
        console.log(typeof(data))
       
    }
    render();
}

init();