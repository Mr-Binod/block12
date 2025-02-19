


let playerBtn = document.querySelectorAll(".player-btn");
let playerSelect = document.querySelector(".player-select");

console.log(playerBtn)
// 플래이러는 rock sissor paper 중에 버튼을 눌러서 값을 할당

const Arr = ["sissor", "rock", "paper"]

// 게임 초기화
const init = () => {
    // for문 반복문 
    // 배열 메서드
    // 함수 값만 전달하는 방법
    playerBtn.forEach((item, index) => {
        item.onclick = () => {
            console.log(index);
            // if (playerSelect.classList[1] === undefined) {

            // }
            // else{
            //     playerSelect
            // }

                playerSelect.className = `player-select ${Arr[index]}`;
                console.log(playerSelect.className)
                const {value, text} = gameStart(Arr[index]);
                document.querySelector(".result").innerHTML = value;
                document.querySelector(".content-value").innerHTML = text;
        }
        // console.log(item)
        // console.log(index)
    })

    // const a = (item, index) => {
    //     for (let i = 0; i < playerBtn.length; i++) {
    //         a(playerBtn[i], i)
    //     }
    // }

    // forEach 콜백 함수 내부에서 기능을 호출해야 하고 반환값이 없다 undefined 반환값
    // 메서드를 사용할때 반환값을 확인하는게 필수
    // map / reduce 메서드( method)
    // 첫번째 매개변수에는 배열의 요소가 순차적으로 들어온다
    // [0,1,2,3,4,5].forEach(element) => {console.log(element)}
    // 우리가 전달한 콜백 함수를 배열의 갯수만큼 호출을 한다
    // 무번째 매개변수 인댁스 번호
    
}

// 플래이어의 값을 버튼을 눌러서 이미지를 보여주는 이벤트를 초기화
init()

const gameStart = (player) => {

    // 플래이러 값 player
    // 소수점을 버리자
    // floor 소수점 버림
    // round 반올림
    const index = Math.floor(Math.random() * Arr.length)
    // let comSelect1 = Math.round(Math.random() * Arr.length)
    let comSelect = Arr[index];
    document.querySelector(".com-select").className = "com-select " + comSelect;
    if(player === comSelect) {
        return {value : "무승부", text : "무승부"}
    }
    else if (player === "rock" && comSelect === "sissor" ||
            player === "paper" && comSelect === "rock" ||
            player === "sissor" && comSelect === "paper") {
                return{value : "승리 짞짜까짝", text : "플레이어의 승리"}
            }
    else {
        return {value : "패배 ㅎㅎㅎ", text : "컴퓨터 승리"}
    }
}