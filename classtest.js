
// // let data = [];
// // let result = [];
// // let passers = 0;
// // const count = 2;
// // let resulti = 1;
// // Contentform.onsubmit = (e) => {
// //     e.preventDefault();
// //     const {value} = e.target.inputValue;
// //     data.push(value)
// //     console.log(data, "data", result.length, "resultlength")
    
// //     if(result.length <= 2) {
// //         result.push(value)
// //         // console.log(result, "result")
// //         return;
// //     }
// //     if(result.length >= 2){
// //         for (let i = (result.length - 1); i >= 0; i--) {
// //             // if(data.length <= count) {
// //                 //     passers = passers + 1;
// //                 //     result.push(value);
// //                 // console.log(result,"result", i)
// //             // }
// //             if(value >= result[i]) {
// //                 if(value === result[i]) {
// //                     result.push(value);
// //                     console.log(result, "result1")
// //                     return;
// //                 }

// //                 else {
// //                     result.push(value)
// //                     result.splice(0,1)
// //                     console.log(result, "result2")
// //                     return;   
// //                 }
// //                 // else if (value > result[i]){
// //                 //     if (result[0] === result[i]) {
// //                 //         resulti++
// //                 //         console.log(resulti)
// //                 //     }
// //                     // for (let index = 0; index < result.length; index++) {
// //                     //     console.log(result,"res")
// //                     //     if((result[0] === result[index]) && (index != 0)){
// //                     //         let repeatcount = 1;
// //                     //         repeatcount++
// //                     //         console.log(repeatcount, "repeat count")
// //                             // result.splice(0, 1);
// //                             // result.push(value)
// //                             // console.log("hii", result)
// //                             // return;
// //                         // }
// //                         // else  {    
// //                         //     if((result[0] === result[index]) && (index != 0)) {   
// //                         //         console.log("11") 
// //                         //     // result.splice(0, 1);
// //                         //         result.push(value)
// //                         //         console.log("hello", result)
// //                         //         return;
// //                         //     }
// //                             // else {
// //                             //     result.splice(0, 1);
// //                             //     result.push(value)
// //                             //     console.log("hello1", result)
// //                             //     return;
// //                             // }
// //                         // }
// //                     // }
// //                 // }
// //             }
// //             // else if(value > result[i]) {    
// //             //     for () {

// //             //         // result[i] = value;
// //             //         // result.sort();
// //             //         // console.log(result, "result")
// //             //         // return;
// //             //     }
// //             // }

// //             }


            
        
// //     }
// // }



// let data = [];
// let result = [];
// let passers = 0;
// const count = 2;
// let resulti = 1;
// Contentform.onsubmit = (e) => {
//     e.preventDefault();
//     const {value} = e.target.inputValue;
//     data.push(value)
//     result.sort();
//     console.log(data, "data")
//     console.log(result, "result")    
//     if(result.length <= 2) {
//         result.push(value)
//         // console.log(result, "result")
//         return;
//     }
//     if(result.length >= 2){
//         for (let i = (result.length - 1); i >= 0; i--) {
//             if(value >= result[i]) {
//                 if(value === result[i]) {
//                     result.push(value);
//                     console.log(result, "result1")
//                     return;
//                 }  
//                 else {
//                     result.push(value)
//                     result.splice(0,1)
//                     console.log(result, "result2")
//                     return;   
//                 }
//             }
//         }      
    
//     }
// }

// let Content = '';
// let Value = '';
// // const contentForm = document.querySelector(".contentForm")

// contentForm.onsubmit = (e) => {
//     e.preventDefault();
//     const content = e.target.content.value;
//     const {value} = e.target.value;
    
//     // Content.push(content)
//     // Value.push(value)
//     Content = content;
//     Value = value;

//     let Find = Content.indexOf(Value);
//     console.log(Find)

    
// }


// let a = "pineapple is yummy";
// let b = "apple";


// let Find =  a.indexOf(b)

// console.log(Find)



// let a = [[1, 2], [2, 4]]
// let b = [[1, 0], [0, 3]]



// const aRows = a.length;
// const aCols = a[0].length;
// let result = [];

// const mult = (a, b) => {
//     for (let i = 0; i < aRows.length; i++) {
//         // result[i] = []
//         for (let j = 0; j < aCols.length; j++) {
//             result[i][j] = a[i][j] + b[i][j];
//         }
//     }
//     return result;
// }

// console.log(mult(a, b))

// let Data = [];
// Todoform.onsubmit = (e) => {
//     e.preventDefault();
//     const Content = e.target.content.value;
//     console.log(Content)
//     Data.push({Content : Content});
//     localStorage.setItem("comment", JSON.stringify(Data));
//     console.log(typeof(Data))
//     render(Data)
// }

// const render = (Data) => {
//     bodycontent.innerHTML = "";
//     for (let i = 0; i < Data.length; i++) {
        
//     const Ul = document.createElement('ul')
//     const Check = document.createElement("input");
//     const Inputcontent = document.createElement("li");
//     const Delete = document.createElement("button")
//     const Content = Data[i].Content;
//     Inputcontent.innerHTML = Content;
//     Delete.id = "Deletecontent";
//     Check.type = "checkbox";
//     Delete.innerHTML = "삭제";
    
//     Ul.append(Check, Inputcontent, Delete);
//     bodycontent.append(Ul)

//     Deletecontent.onclick = (i) => {
//         console.log("hi")
//         Data.splice(i, 1);
//         localStorage.setItem("comment", JSON.stringify(Data));
//         location.reload();

//     }
//     }
// }


// const init = () => {
//     const _Data = JSON.parse(localStorage.getItem("comment")) || [];
//     Data = _Data
//     render(Data)
// }

// init()