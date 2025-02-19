

// window 전역겍체 안에 있는 메서드 (브라우저의 기능을 메서드로 제공해준다.)

// console.log("123");

// 요소의 제어를 하고있지 않아서

// 입력 받은 값을 저장해거 사용하기 위해서

//prompt 우리가 입력한 값을 스스템 입력창 모달이 뜨고 입력한 값을 변수에 할당을 하면 저장할수 있다.
// prompt 반환값을 우리가 입력한 값으 문자열로 string

// let myName = prompt("너 이름 입력해라");
// console.log(myName);

// // 시스템 팝럽으로 log를 확인하는 방법
// // alert

// alert(myName);


// 필수 조건사항만 채크 괸가면 통과

// AND && 연산자

// let age = prompt("너 나이 몃살이니?");

// if((age > 20) && (age < 50)) {
//     alert(age + "살이야")
//     alert(age >20)
//     alert(age<50)
// }
// else {
//     alert("나이를 20 에서 50 살 미만으로 작성하세요")
// }

// // 이름 나이 성별 필수로 작송을 확인해야하는 내영글을 확니한다거나 등

// 반환 데이트 타입이 문자열
// 형변환 데이터의 타입을 변환

// 문자열 "10" -> 숫자형 10

// "90" -> 90

// "1" + 1 ===> 강제 형변환

// parseInt : 정수형으로 형변환을 한뒤 값을 반환해주는 메서드

// let str = prompt("숫자를 입력하세요");
// let num = parseInt (str);
// // NaN : not a number 숫자로 변환할수 없는 문자열을 숫자로 변환을 시도했다
// alert(num);
// alert(typeof num);

// // 숫자형으로 변경할수 없는 문자를 입력한 경우 잘못립력했습니다

// 복습 

// 점수를 입력받고
// 점수가 90 ~ 100 점이면 A 출력
// 점수가 80 ~ 90 점이면 B 출력
// 점수가 70 ~ 80 점이면 C 출력
// 첨수가 70 미만으로 D 출력 


// 전역 스코프에 선언한 변수

// let a = 0;

// if(true) {  // 지역 스코프
//     console.log(a);
// }


// if(true) {
//     a = 0;
// }
// console.log(a);

// if(true) {
//     let a = 0;
// }
// if(true) {
//     console.log(a);
// }


// let a = 15;
// if(true){
//     let a = 10;
//     if(true) {
//         console.log(a);
//     }
// }


// ES5 VAR 지역변수에 선언한 변수가 window 객체에 포함되어서 해제가 되지않는다.
// var 의 사용도를 낮춰서 사용

// if(true) {
//     var a = 10;
// }
// var a = 20;
// console.log(window);
// console.log(a);

// // 전역 스코프와 지역 스코프의 이해를 플수로 해야한다.

// for (let i = 0; i < 10; i++) {
//     let a = i * 10;
    
// }

// // 지역 스코프에서 선언한 변수를 가져오수 없기ㅒ문에 호이스틴 에러가 발생

// console.log(a);

// switch

//case 문의 조건에 충족할때 break 문을 만나지 않으면 밑의
// case 문도 실행을 하다가 break를 만나지 않으면 밑의 코드가 중단된다.
// default 모든 case 에 충족하지 않을때 호출된다.

switch("RUN") {  // 1 부터 검사하고 끝까지 검사하고 BRAKE문 만나면
    //그때 중단 시킨다
    case "RUN":
        console.log("걷고 있다");
        // break;
    case "STATE":
        console.log("나의 상태는");
        break; // 여기에서 중단
    case "WORK":
        console.log("나의 일")
        // break;
    default:
        console.log("조건에 맞는 값이 전달되지 않았어.")
        break;
}


// MBTI 

if(myMbti_code_01 === "A" || myMbti_code_02 === "b"){
    
}