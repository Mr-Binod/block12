

let content = document.querySelectorAll(".box-content");

const posY = [];

for (let i = 0; i< content.length; i++) {
    let scroll = (content[i].getBoundingClientRect().top + window.pageXOffset);
    posY.push(scroll)
    console.log(posY, scroll)
}

window.onscroll = () => {
    const scroll =  window.scrollY + window.innerHeight;
    console.log(window.innerHeight, window.scrollY);
    content.forEach((el, index) => {
        if (scroll > posY[index] ) {
            el.classList.add("is-active");
        }
        else {
            el.classList.remove("is-active");
        }
    })
}