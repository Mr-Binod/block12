

let boxContent = document.querySelectorAll(".box-content");

// getBoundingClientRect left, right, top ,bottom 사각면의 수치를 가져올수 있다
// getBoundingClientRect : 상대 위치 브라우저에서 보고있는 화면의 상대적 위치
console.log(boxContent[0].getBoundingClientRect().top)

// 상대위치를 절대 위치로 계산
// 상대위치값 + 스크롤 된 값

// 스크롤 된 값은 스크롤된 요소의 dom 객체의 내용 포함되어 있다
// 속성 pageXOffset pageYOffset scroll 진행한 진행도의 값 수치 스크롤을 얼마나 했는지
console.log(boxContent[0].getBoundingClientRect().top + window.pageYOffset);

// 절대 값 상대 위치 + 스크롤 된 값
window.onscroll = () => {
    // console.log(boxContent[0].getBoundingClientRect().top + window.pageYOffset);
    // console.log(window)
    // scrollY 브라우저의 상단 기준으로 얼마만큼 이동했는지
    console.log(window.scrollY)
}
// 맨 위를 기준으로 하고 싶지 않아
// 만들고 확인 화면의 크기만큼 더해주면 기준이 브라우저의 맨밑이 기준이 된다

const posY = [];
for (let i = 0; i < boxContent.length; i++) {
    posY.push(boxContent[i].getBoundingClientRect().top + window.pageXOffset);
}
window.onscroll = () => {
    // scroll 될때마다 발생하는 이벤트
     // console.log(boxContent[0].getBoundingClientRect().top + window.pageYOffset);
    //  innerHeight 현재 요소의 높이 window 브라우저의
    console.log(window.scrollY)    
    const scroll = window.scrollY + window.innerHeight;
    boxContent.forEach((el, index) => {
        if(scroll > posY[index]) {
            el.classList.add("is-active");
        }
        else{
            el.classList.remove("is-active");
        }
    })

//     const scroll = window.scrollY;
//     if(scroll > posY[0]) {
//         boxContent[0].classList.add("is-active");
//     }
//     else{
//         boxContent[0].classList.remove("is-active");
//     }


}