let Content = '';
let Value = '';
// const contentForm = document.querySelector(".contentForm")

contentForm.onsubmit = (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    const {value} = e.target.value;
    
    // Content.push(content)
    // Value.push(value)
    Content = content;
    Value = value;

    let Find = Content.indexOf(Value);
    console.log(Find)

    
}


let a = "pineapple is yummy";
let b = "apple";


let Find =  a.indexOf(b)

console.log(Find)
