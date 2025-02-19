

// popup class

class Popup {
    constructor(_popup,_popup2){
        this.popup = _popup;

    }
    setOpen() {
        
    
        // 팝업을 켜줄 메서드
        // // 열려있으묜 닫고 닫혀있으면 여는
        // console.log(this.popup)
        // // 클래스를 가지고 있는지?
        // // contains 메스느 classList 배열안에 해당 클래스가 있는지 반환값은 bool
        // console.log(this.popup.class.classList.contains("is-active"));

        // // add클래스를 추가 매개변수로 전달한 클래스 이름을 추가
        // console.log(this.popup.classList.add("is-active"));

        // // remove 매개변수로 전달한 클래스를 제거
        // console.log(this.popup.classList.remove("is-active"));

        if(this.popup.classList.contains("is-active")){
            // 켜져있가면 팝업을 끄고
            this.popup.classList.remove("is-active");
        }
    
        else {
            this.popup.classList.add("is-active");
        }
    }

}

// id class 요소 이름 모든 선탯자 구할수 있는 문입니다 (구문)
// quertSelector 반환값은 요소 node
let popup = new Popup(document.querySelector(".popup-wrap"))
console.log(popup)
// popup.setOpen();
// popup.setOpen();
let popupOpen = popup.setOpen.bind(popup);
console.log(popupOpen)
document.querySelector(".popup-btn").onclick = popupOpen;
document.querySelector(".close-btn").onclick = popupOpen;