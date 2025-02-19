// let Name= "binod";
// console.log(Name);

// console.log('4' === 4)

// console.log ('4' != 4);

// console.log('4' !== 5)

// console.log('6' == 6)

// console.log(6 !== 6)

// console.log('6' !== 6)

// // 실습
// // num1 이라는 변수와 num2 라는 변수를 선언하고 재활당으로 num1 에는 5의 값을 할당 num2 에는 6 이라는 값을 할당라고 
// // 연산자를 활용해서 두 값을 비교 했을때 true 값을 구하고 싶다 연산자는 자료형과 값까지 비교하는 연산자를 사용해거 
// // 출력해주세요


// let num1;
// let num2;
// num1 = 5;
// num2 = 6;
// console.log(num1 !== num2);


let num1 = 100;

// 원하는 조건일 경우 코드를 실행하고 싶어
// 원하는 조건이 안닌 경우 코드를 실행되지 않았으면 좋겠어

// [if] (조건식)
// 조건이 충족할때 실행시킬 코드 영역 ( 스코프) inside the variable

//

// if(num1 > 100){
//     console.log('내가 출력되니?');  // 조건에 충족하지 않으면 코드를 실행하지 않는다.
// }

// let str = "나는 이수호 학생이야";
// if(str === "나는 이준현 학생이야") {
//     console.log('내가 보이니')
// }
// else if(str === "나는 이수호 학생이야" ) {
//     console.log("나는 이수호야")
// }

// else {
//     console.log("충족되는 조건이 없어")
// }

// 변수로 myName 이라는 변수하나 건언하고 본인 이흠을 할당하고 반전체 학생의 이름을 변수의 뒤에 1, 2, 3, 4, 5증가 시켜서 변수를 선언 할당하고
// 추가로 myValue 라는 변수를 하나 선언하고 이번수에 할당한 문자열이  if  문의 조건을 반전체 학생의 수만큼 작성해거 조건식 검사 결과가 맞으면 나는 누구누구야


 let myValue = "김민교";

 let myName = "비노드";
 let myName1 = "김민교";
 let myName2 = "이순현";
 let myName3 = "이상암";
 let myName4 = "이수호";
 let myName5 = "구다경";
 let myName6 = "김지은";
 let myName7 = "김홓규";
 let myName8 = "나한별";
 let myName9 = "이준헌";
 let myName10 = "장민우";
 
 if(myValue === myName) {
    console.log();  // 문자열을 더해서 어떤 문자결을 만드야? + "나는 이수호 학생이야" 출력
 }
 else if(myValue === myName1 ){
    console.log("나는 " + myName1 + "에요. 만나서 반가워요.")
 }
 else if(myValue === myName2 ){
    console.log("나는 " + myName2 + "에요. 만나서 반가워요.")
 } 
 else if(myValue === myName3 ){
    console.log("나는 " + myName3 + "에요. 만나서 반가워요.")
 }
 else if(myValue === myName5){
    console.log("나는 " + myName5+ "에요. 만나서 반가워요.")
 }
 else if(myValue === myName5 ){
    console.log("나는 " + myName5 + "에요. 만나서 반가워요.")
 }
 else if(myValue === myName6 ){
    console.log("나는 " + myName6 + "에요. 만나서 반가워요.")
 }
 else if(myValue === myName7 ){
    console.log("나는 " + myName7 + "에요. 만나서 반가워요.")
 }
 else if(myValue === myName8){
    console.log("나는 " + myName8 + "에요. 만나서 반가워요.")
 }
 else if(myValue === myName9 ){
    console.log("나는 " + myName9 + "에요. 만나서 반가워요.")
 }
 else if(myValue === myName10 ){
    console.log("나는 " + myName10 + "에요. 만나서 반가워요.")
 }
 else {
    console.log("이름 안맞습나다 다시 시도해주세요")
 }

 // 오늘 목표는 구구단 


 for(let i = 1; i <= 10; i++) {
    console.log(i);
 }

 // 구구단의 2 단 만들자

for (let i = 1; i < 10; i++) {
    let str = "2 X" + i + "=" + 2 * i;
    // 수학 배울때 콥셈 나누기 먼저 하고 더하기 빼기
    console.log(str);
    // 마지막 코드 영역까지 진행되서 다음 반복문이 실행될때는 해제
    // 메모리에거 해제괴어기때문에 재선언이 아님  X
}


// 실습 구구단에서 3 단 만드응데 조건문을 추가해거 3 단의 4 의 곱은 출력 되지 않게

// 3 * 1, 3 * 2, 3 * 3, 3 * 5,3 * 6    

