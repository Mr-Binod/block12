

// click 위치 정보가 필요하다
//  click한 위치의 좌표
// click한 위치의 좌표를 눌렀을떄 떘을떄
// 마우스의 클릭 시작 위치
let start;
// 진행중인 swiper 인덱스
let index = 0;
let swiper = document.querySelector(".swiper");
let swiperContent = document.querySelector(".swiper-content");
let {length} = document.querySelectorAll(".swiper-item");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
// click 할떄 발생하는 이벤트
// stopPropagation : 요소간의 이벤트 전파를 방지한다.
swiper.onmousedown = (e) => {
    e.stopPropagation();
    start = e.clientX;
    console.log("나 클릭 시작 : X축 : " + start);
    console.log(e);
}
swiper.onmouseup = (e) => {
    console.log("나 클릭 종료 X 축 : " + e.clientX);
    if(e.clientX < start) {
        // 요소들이 오른쪽으로 이동되야한다
        // 오른쪽으로 스와이프를 넘긴것 
        if(index < length - 1){
            index++;
            swipeMove();
        }
    }
    else{
        if(index > 0)
            index--;
            swipeMove();
    }
    console.log(index);
}
const swipeMove = () => {
    // css 영역의 스타일 시트에 접근해서 스타일 값을 가져오는
    let swiperWidth = parseInt(getComputedStyle(swiper).width);
    // 반환타입 문자열
    // 0 * 500 === 0
    // 1 * 500 === 500
    // 2 * 500 === 1000
    swiperContent.style.left = `${-(index * swiperWidth)}px`; // inline css
}
nextBtn.onclick = () => {
    if(index < length - 1){
        index++;
        swipeMove();
    }
}
prevBtn.onclick = () => {
    if(index > 0){
        index--;
        swipeMove();
    }
}