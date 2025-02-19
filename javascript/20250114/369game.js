


// num = [];


// function clap() {
//     let N;
//     N = parseInt(prompt("숫자를 입력하세요"));
//     // alert(N);
//     for(i = 0; i <= N; i++) {
//         switch(i) {
//             case 3:
//                 num.push("clap");
//             break;
//             case 6:
//                 num.push("clap");
//                 break;
//             case 9:
//                 num.push("clap");
//             break;
//             case 13:
//                 num.push("clap");
//                 break;
//             case 16:
//                 num.push("clap");
//             break;
//             case 19:
//                 num.push("clap");
//                 break;
//             default: 
//             num.push(i);
//         }    
//     }
//     alert(typeof num);
//     alert(num);

// }   

// clap()



let num = [];

function clap() {
    let N;
    N = parseInt(prompt("숫자를 입력하세요."));
    for(i = 1; i <= N; i++) {
        // alert(i);
        if ((i % 10) == 3 || (i % 10) == 6 || (i % 10) == 9){
            num.push("CLAP");
            
        }
     
        else {
            num.push(i);
        }
    }
    alert(num);
}
clap()