

const user = [];


const userSelectAll = () => {
    return user;
}

// userFindUid({uid : 'soon'});
const userFindUid = ({uid}) => {
    // let {uid} = {upw};
    // [] 반환값은 배열
    // const [data] = user.filter((el, index) => {
    // const [data] = user.filter((el) => e;.uid ===uid)
    //     return true
    // })

    const [data] = user.filter((el) => el.uid ===uid)
    // let arr = [1, 2]
    return data
}

const userFindUidUpw = ({uid, upw}) => {
    const [data] = user.filter((el) => (el.uid === uid) && (el.upw === upw))
    return data
}

// userFindUid 원시값을 매개변수로 받지 않는 함수
// 객체의 key 구조분해할당을 매개변수로 받아서

// function a (b) {
//     let b = "soon"
// }
// a('soon')
const userSelectIndex = () => {
    return user[index]
}

const userCreate = (_user) => {
    user.push(_user)
}

module.exports = {userCreate, userFindUid,userSelectAll, userSelectIndex, userFindUidUpw}
