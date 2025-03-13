


const mysql = require('mysql2');

// mysql에 커넥션을 뱆고 쿼리 요청을 보낼수 있는 메서드를 가지고 있는 객체를 반환
const mysqlconnect = mysql.createConnection({
    user : 'myid', 
    password : '1994!BDs',
    database : 'moon',
    host : 'localhost',
    port : 3306,
    multipleStatements : true // query 문을 잘라서 작업 단위로 다중 쿼리를 실행해주겠다
});

// query 메서드는 쿼리 요청을 보내는 메서드 비동기 호출
mysqlconnect.query('SELECT * FROM user', (err, data) => {
    if(err) return console.log('err');
    console.log(data);
    // res.render('main', {data})
})
const user_id = 'soon7';
const user_pw = '321';
const name = 'pak';
// 유저 추가 
// mysqlconnect.query('INSERT INTO user (user_id, user_pw, user_name) VALUES ("bing2", "123", "pak") ', (err, data) => {
// // mysqlconnect.query(`INSERT INTO users (user_id, user_pw, name) VALUES (${user_id}, ${user_pw, ${name}})`, (err, data) => {
// // mysqlconnect.query('INSERT INTO users (user_id, user_pw, name) VALUES (?, ?, ?)',[user_id, user_pw, name], (err, data) => {
//     if(err) return console.log(err);
//     console.log('글이 추가되었다')
// })

// 유저 삭제

const deleteQuery = 'DELETE FROM user WHERE id=?;';
const setIndex = 'SET @CNT = 0; UPDATE user SET user.id = @CNT:=@CNT+1;' // id index 재할당  1,2,3, 5 추가할때 문제가 있다
const resetIndex = 'ALTER TABLE user AUTO_INCREMENT = 0;'; // for auto increment only

const queryall = deleteQuery + setIndex + resetIndex;

mysqlconnect.query(queryall,[1], (err) => {
    if(err) return console.log(err);
    console.log('글이 삭제됬어')
})


// 유저 정보 수정

mysqlconnect.query('UPDATE user SET user_name=?, user_id=? WHERE id=?, ["bing", "noon"]', (err) => {
    if(err) return console.log(err)
    console.log(data)
})