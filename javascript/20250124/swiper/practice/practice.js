


let index = 0;
let start;


let swiper = document.querySelector(".swiper");
let swiper_ul = document.querySelector(".swiper-ul");
let {length} = document.querySelectorAll(".swiper-item");
let prev_btn = document.querySelector(".prev");
let next_btn = document.querySelector(".next");

swiper.onmousedown = (e) => {
    e.stopPropagation();
    start = e.clientX;
    console.dir(e, e.stopPropagation())
}

swiper.onmouseup = (e) => {
    if(start > e.clientX ) {
        if (length - 1 > index) {
            index++;
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
    swiper_ul.style.left = `${-(index * swiperWidth)}px`;
    console.log(index, "index", length, "length")
}

const initialMove = () => {
    index = 1;
    swiper_ul.style.transition = 'initial';
    swipeMove();
    
}
const finalMove = () => {
    index = 4;
    swiper_ul.style.transition = 'initial';
    swipeMove();
}

swiper_ul.ontransitionend = () => {
    console.log(length, index)
    console.log((length - 1) === index)
    if((length -1) === index){     
        initialMove();
        setTimeout(() => {
            swiper_ul.style.transition = '1s';
        },100)
    }
    if(length - 6  === index) {
        
        finalMove();
        setTimeout(() => {
            swiper_ul.style.transition = `1s`;
        }, 100);
    }
}
   



