


let data = [];

const userdata = (uname, uid, upw) => {
    const index = data.length;
    data.push({index, uname, uid, upw})
    console.log(data)
    return "저장 완료";
}
const idcheck = (uid, upw) => {
    // console.log("aaaaaaaaaa",data.filter(el =>  (el.uid === uid) && (el.upw === upw)))

        return data.filter(e =>  (e.uid === uid) && (e.upw === upw))
    
};

const signupidcheck = (uid) => {
    console.log(data.length)

    return data.filter(e => (e.uid === uid));   
}
const editusername = (index, uname) => {
    console.log(index, "")
    data[index].uname = uname;
    console.log(data, "정상 완료");
    return ("정상 완료");
}

const deletedata = (index) => {
    data.splice(index, 1);
    for (let i = 0; i < data.length; i++) {
        data[i].index = i;        
        console.log(data)
    }
    return("정상 처리");
}

module.exports = {userdata, idcheck, signupidcheck, editusername, deletedata};