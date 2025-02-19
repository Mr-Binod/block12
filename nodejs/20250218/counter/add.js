


const add = (addNum) => {
    
    // console.log(addNum++)
    addNum = ++addNum;
    console.log(addNum)
    return addNum;
}


module.exports = {add}