

let data = [];
let result = [];
let passers = 0;
const count = 2;
let resulti = 1;
Contentform.onsubmit = (e) => {
    e.preventDefault();
    const {value} = e.target.inputValue;
    data.push(value)
    result.sort();
    // console.log(data, "data")
    if(result.length <= 2) {
        result.push(value)
        console.log(result, "result") 
        console.log(result.length, "length") 
        // console.log(result, "result")
        return;
    }
    
    if(result.length >= 2){
        for (let i = (result.length - 1); i >= 0; i--) {
            if(value >= result[i]) {
                if(value === result[i]) {
                    result.push(value);
                    console.log(result, "result1")
                    console.log(result.length, "length")
                    return;
                }  
                else {
                    result.push(value)
                    result.splice(0,1)
                    console.log(result, "result2")
                    console.log(result.length, "length")
                    return;   
                }
            }
        }      
    
    }
}