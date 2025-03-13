



const connectPool = require('./config');

// 전체 유저 닉네임 조회

const userNickselectall = async () => {
    try {
        
        const [data] = await connectPool.query('SELECT nick,imgpath FROM users;');
        return data;
        // [
        //     [ { nick: 'hello' }, { nick: 'hello' }, { nick: 'hello' } ], many users or nickname
        //     [ `nick` VARCHAR(15) ]
        //   ]
    } catch (error) {
        return error;
    }
}

// 유저 정보 조회
const userSelectuid = async (uid) => {
    try {
         // [
        //     [ { uid: 'hello' }],[ `uid` VARCHAR(15) ]
        //   ]
        // [ { uid: 'hello' } ]  one user 
        // { uid: 'hello' }
        // const[[data], [data1], [data2]]
        const [[data]] = await connectPool.query('SELECT * FROM users WHERE uid=?',[uid])
        return data;
    } catch (error) {
        return error;
    }
}

const createuser = async (uid, upw, name, nick, imgpath) => {
    try {
        await connectPool.query('INSERT INTO users(uid, upw, name, nick, imgpath) VALUES (?, ?, ?, ?, ?)', [uid, upw, name, nick, imgpath])
        return {state : 200, message : 'signup completed'}
    } catch (error) {
        return error;
    }
}


// UD 


module.exports = {userNickselectall, userSelectuid, createuser};