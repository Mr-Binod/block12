    
    
    
    for(const index in directory) {}

    const httpPath = path.join(key, directory[index]).replaceAll("\\", "/")


       const query2 = query.map((value) => value.split("="))
    // [[index, 1], [age, 2]]
    const query3 = query2.reduce((acc, line) => {
        const [key, value] = line;
        acc[key] = value;
        return acc;
    }, {})