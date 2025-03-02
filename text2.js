    
    
    // [123,123,123]
    // // 012
    // // {name : "", age : 1, city :2, method : {}}
    // if("nsme" in directory)
    // for(const index in directory) {
    //     if(index === "name")
    // }

    // const httpPath = path.join(key, directory[index]).replaceAll("\\", "/")


    // const query2 = query.map((value) => value.split("="))
    // const index = "index";
    // const age = "age";
    // // [["index", "1"], ["age", '2']]
    const query2 = [['index', '1'], ['age', '2']]
    const query3 = query2.reduce((acc, line) => {
        const [key, value] = line;
        acc[key] = value;
        // {method : "get"}
        return acc;
    }, {})
    console.log(query3)
    // {index : 1, age : 2}


    // const c = {};  a.el
    // {el : 1}
    // b.reduce((a, el)=> { a["name"] = el }, {})
    

    // b.reduce((a, el)=> { return a += el }, 1)

    // a[value] = {} 
    // a.value =  0;


    // const ab = {};

    // ab.value = "123";

    // {
    //     value : "123"
    // }
    const headers = headerLine.reduce((acc, line,) => {
        const [key, value] = line.split(": ");  // localhost:3000',  ["localhost", "3000"]
        // [["localhost"], ["3000"]]
        acc[key] = value;
        return acc;
    },{})
    let ab = {};
    // const value = "value"
    ab["value"] = "345";
    console.log(ab)
