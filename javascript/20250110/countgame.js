

// 내가 만글 게임은  
// 업다운 게임

// 높으면 업 말하고 낮으면 다운 말 하면서 제가 알고 있는 숫자 맞추기

//프로그램을 만들때

// 1. 플래이어의 선택을 담은 변수
// 2. 컴퓨터의 선택을 감을 변수
// 3. 플레이어가 선택을 했으면 사영하 제어문 (플래이러가 잘못선택하면 계속 무한히 설정) (숫자를 맞출때 범위)
// 4. 게임의 종류 시점 경과가 같을 때 게임의 횟수가 끝났을때


let playerSelect;

// 컴퓨터는 랜덤하게 값을 가져야한다.
// 랜던한 값을 구하는 메서드
// Math.random()
// random : 0 ~ 1 랜덤한 값을 구해준다. 소수점으로 표현을 해준다

// let a = parseInt(Math.random() * 3) + 1; //(random number from 1 to 3 if not it will count 0 also  0 1 2 and 1 2 3)
// alert(a);


// alert(Math.random())

//최조에 컴퓨터다 랜덤한 값을 하나 가지게 하고

let comSelect = parseInt(Math.random() * 99);


// 시도한 횟수 processing count

let count = 0; //

let max = 99;

let min = 0;

let text = "";

let gameCount;
// if((min < playerSelect) && (playerSelect < max)) {
//     // 게임의 진행에 관련된 코드의 내용
// }
// 게임을 한번한 할게아니고 코드를 여러번 호출해야하니 반복문을 통해거 게임의 로직을 이안에 작성하자
// 연산자의 우선순위 *** + * / - 
gameCount = prompt("횟수를 입력해주세욘욘")
while((playerSelect !== comSelect) && (count < gameCount)){ // 조건은 게임이 끝나는 조건
    // 게임의 로직
    playerSelect = prompt(text + " 숫자를 입력해주세요 최소 : " + min + " | 최대"+ max + "게임의 남은 횟수 : "+ (gameCount - count));
    playerSelect = parseInt(playerSelect);
    // 숫자가 아닌 문자열 입력했을때
    // NaN의 값이 나오면 입력을 다시 받아야한다.
    // isNaN : NaN 숫자의 형태가아닌 문자를 숫자로 면환했늘떄 NaN 값이 나왔는지? 확인을 하는 것. true
    if(isNaN(playerSelect)){
        text = " 숫자를 다시 입력하세요"

        // break;
        continue; //반복문에서 사용할수 있는 예약어
        //doesnt count as played
    }

    // 잘못된 값을 입력하면 게임의 횟수가 줄면 안되
    // 0 이상의 값을 입력받고 싶다
    // 두가지의 값중 하나만 충족해도
    
    if((min >= playerSelect) || (max <= playerSelect)) {
        text = "입력값의 최소단위와 최대단위는" + (min +1) + "~" + (max - 1) + "입니다."
        continue;
    }
    
    // 게임 정상적으로 진행

    if(playerSelect > comSelect) {
        max = playerSelect;
        text = "다운"

    }
    else if(playerSelect < comSelect) {
        min = playerSelect;
        text = "업";
    }
    else {
        alert(count + "횟수를 시뎌해서 정답을 맞췄어  박수 ~ 짝짝짝!!! 추카추카 ")
        break;
    }
    count++;
}

if (gameCount == count) {
    alert("최송합니다 다시 플레이 해주세요")
}