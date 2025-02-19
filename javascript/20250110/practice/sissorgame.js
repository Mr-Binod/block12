



// - 요구사항 1 : 플래이어가 가위 혹은 바위 혹은 보를 입력받을수 있다.
// - 요구사항 2 : 컴퓨터는 가위 바위보 랜덤하게 본인니 선택할수 있다 (0 1 2 )
// - 요구사항 3 : 무승부도 있습니다
// - 요구사항 4 : 입력받은 값이 잘못괸경유 다시 입력받으세요 계속
// - 요구사항 5 : 논리 연산자 ||, && 둘중 하나 활용하세요


let playerSelect;
let playerNum;
let count = 0;
let gameCount = 3;
let comSelect = null;
// const sissor = {name : "가위", number : 1};
// const stone = {name : "바위", number : 2};
// const paper = {name : "보", number : 3};
let text = "";
let win = 0;
let loss = 0;
let draw = 0;
// playerSelect = prompt("가위, 바위, 보 중에 하나 입력해주세요 " + (gameCount ) + "번 남았습니다.");

alert(gameCount)

while((count >= 0) && (count <= 2)) {
    comSelect = parseInt(Math.random() * 3) + 1;
    playerSelect = prompt("가위, 바위, 보 중에 하나 입력해주세요 " + (gameCount - count) + "번 남았습니다. comselect 번호는 :" + comSelect);  
      
    // alert(count)
    if(playerSelect == "가위") {
        playerNum = 1;
        // alert(playerNum);
        // alert(comSelect);
        
    }
    else if(playerSelect == "바위") {
        playerNum = 2;
        // alert(playerNum);
        // alert(comSelect);
    }
    else if(playerSelect == "보") {
        playerNum = 3;
        // alert(playerNum);
        // alert(comSelect);
        // alert(count);
        
    }
    else {
        alert("잘못입력했습니다. 가위, 바위, 보 중에 하나 입력해주세요");
        continue;
    }

    
    if((1 <= playerNum) && (playerNum <=3)){
        count++;
        switch(playerNum){
            case 1 :
                if(comSelect == 1){
                    alert("무슴부입니다");
                    draw++
                    break;
                }
                if(comSelect == 2){
                    alert("패배했습니다");
                    loss++
                    break;
                }
                if(comSelect == 3){
                    alert("우승했습니다");
                    win++
                    break;
                }
                
            case 2 :
                if(comSelect == 1){
                    alert("우승했습니다");
                    win++
                    break;
                }
                if(comSelect == 2){
                    alert("무숭부했습니다");
                    draw++
                    break;
                }
                if(comSelect == 3){
                    alert("패배했습니다");
                    loss++
                    break;
                }
                
            case 3 :
                if(comSelect == 1){
                    alert("패배했습니다");
                    loss++
                    break;
                }
                if(comSelect == 2){
                    alert("우승했습니다");
                    win++
                    break;
                }
                if(comSelect == 3){
                    alert("무승부했습니다");
                    draw++
                    break;
                }  
        }
        
    }  
         
    
}
alert("플레이어는 "+ win + "번 우승하고, " + draw + "번 무승무하고, " + loss  + "번 패배했습니다.")