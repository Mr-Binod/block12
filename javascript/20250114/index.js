


// let numInput1;
// let numInput2;
// let signInput = "";
// let signs = ["+", "-", "*", "/"]
// let result = 0;





// numInput1 = prompt("번호를 입력해주세요");
// signInput = prompt("연산자를 입력해주세요");
// numInput2 = prompt("두 번째 번호를 입력해주세요");
// numInput1 = parseInt(numInput1);
// numInput2 = parseInt(numInput2);
// console.log(numInput1, signInput, numInput2);

// function caltr(Input1, Input2) {
//     switch(signInput) {
//         case "+":
//             result = Input1 + Input2
//             alert(result);
//             console.log(result);
//             break;
            
//         case "-":
//             result = Input1 - Input2
//             alert(result);
//             break;
//         case "*":
//             result = Input1 * Input2
//             alert(result);
//             break;
            
//         case "/":
//             result = Input1 / Input2
//             alert(result);
//             break;
//     }
// }
// caltr(numInput1, numInput2);



let numInput;


numInput = prompt("돈을 입력해주세요.");
numInput = parseInt(numInput);
function changem(a) {
    hun = parseInt(a / 100);
    ten = parseInt((a - (hun * 100)) / 10);
    five = parseInt((a - (hun * 100) - (ten * 10))/ 5);
    one = parseInt((a - (hun * 100) - (ten * 10) - (five * 5)) / 1);
    console.log(hun, ten, five, one);
    alert("잔돈 100 원짜리 " + hun + ", 10 원짜리 " + ten + ", 5 원짜리 " + five + ", 1 원짜리 " + one);
}
changem(numInput);
