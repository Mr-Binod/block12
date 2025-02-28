


// 임시 데이터베이스
let users = [];  // 유저의 정보를저장

// 데이터를 저장
const signupUser = (uid, upw) => {
    users.push({uid, upw});
    return "저장 환료";
}

// 데이터를 조회

// 로그인 로직 처리 데이터를 조회
const selectUser = (uid, upw) => {
    return users.filter(e => (e.uid === uid) && (e.upw === upw))
}

// 아이디 중복(duplication)  체크 
const selectUserId = (uid) => {
    return users.filter(e => {
        console.log(e.uid === uid)
        console.log(e.uid)
        console.log(uid)
        return e.uid === uid // true or false return
    });
}
// console selectUserId = (uid) => e.uid === uid;
// console selectUserId = (uid) => return e.uid === uid;

module.exports = {signupUser, selectUser, selectUserId}; 
