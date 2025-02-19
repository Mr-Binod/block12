
```css
div {
    /* ---------------position-------------------------------- */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    position: absolute;
    float: right;
    box-sizing: border-box;
    margin: 0 auto;/*keeps the XYsides of an element equal "center"*/
    /* -----------------------others-------------------------- */
    
    user-select: none;
    z-index: 999;
    
    /* --------------------anime----------------------------- */
    transition: 1s;
    transform: translateX(50%), translateY(50%), rotate(90deg);

   /* ------------text overflow into ....---------------- */
    text-overflow: ellipsis; /* overflow: hidden ; 속성이 있고 글자가 부모 요소의 밖으로 나가면 ellipsis 보여줄 속성 */
    white-space: nowrap;  /* 문단 줄내림을 정의하는 속성*/
    word-wrap: break-word;  /* 글 단위의 줄내림을 정의하는  */
    overflow: hidden;
    display: inline-block;
    width: 220px;
    /* -------------------------------------------------- */

    word-break: keep-all;
    display: none !important; 

    
}

.is-active {
    left: 0;
    opacity: 1;
    transition: 1s;
    transition: initial;
    user-select: none; /* text drag 안되게 */
}
```
