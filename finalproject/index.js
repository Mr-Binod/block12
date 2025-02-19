





let data = [{index : 0, name : "hi", password : "1234", phonenum : "1234", email : "email@gmail.com"}];

class userDetails {
    constructor (Index, Name, Password, Phonenum, Email) {
        console.log(data.length)
        this.index = Index;
        this.name = Name;
        this.password = Password;
        this.phonenum = Phonenum;
        this.email = Email;
    }
}
let uId = document.querySelector(".signup-uid");
let uPw = document.querySelector(".signup-upw");
let phoneNum = document.querySelector(".signup-phnum");
let signupEmail = document.querySelector(".signup-email");
const signupPage = document.querySelector(".layer_input1");
signupPage.onsubmit = (e) => {
    e.preventDefault();
    const {uid1, upw1, uph, uemail} = e.target;
    const _data = {uid1, upw1, uph, uemail}
    const userData = new userDetails (data.length, uid1.value, upw1.value, uph.value, uemail.value);
    for (let i = 0; i < data.length; i++) {

        if (i === data.length -1) {
            switch(_data){
                case _data :
                    if (_data.uid1.value.trim() === "") {
                        alert("아이디 입력해주세요");
                        return;
                    }
                case _data :
                    if (_data.upw1.value.trim() === "") {
                        alert("비밀번호 입력해주세요");
                        return;
                    }
                case _data :
                    if (_data.uph.value.trim() === "") {
                        alert("전화번호 입력해주세요")
                        return;
                    }
                case _data :
                    if (_data.uemail.value.trim() === "") {
                        alert("이메일 입력해주세요")
                        return;
                    }
            }
            if (uid1.value !== data[i].name){
                data.push(userData);
                const localData = JSON.stringify(data)
                localStorage.setItem("userdata", localData );
                uid1.value = "";
                upw1.value = "";
                uph.value = "";
                uemail.value = "";
                console.log(data)
                alert("가입 성공했습니다 로그인 해 주세요");
                break
                
            }
        } 
        if (uid1.value === data[i].name){
            alert("아이디 사용 불가능합니다. 이미 가입 되어 있는 아이디 입니다");
            uid1.value = "";
            upw1.value = "";
            uph.value = "";
            uemail.value = "";
            break
        }
        else {
             continue
        }
        
    }


}

const loginPage = document.querySelector(".layer_input");
loginPage.onsubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < data.length; i++) {
        const {uid, upw} = e.target;
        let {name, password} = data[i];
        console.log(name, password)
        console.log(uid.value === name)
        if(uid.value === name && upw.value === password) {
            alert("로그인 성공");
            break
        }
        if(uid.value !== name || upw.value !== password) {
            if (i === data.length -1) {
                alert("아이디와 비밀번호 일치하지 않습니다");
                break
            }
        
        
        }
        else{
            // alert("id or password didnot matched");
            continue
        }
        
    }
  
}


const init = () => {
    console.log(data.length)
    if(localStorage.getItem("userdata")){
    const Data = JSON.parse(localStorage.getItem("userdata"));
    data = Data;
    }
}
init();
