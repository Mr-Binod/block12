


const mysql2 = require('mysql2');

const mysqlconnect = mysql2.createConnection({
    user : 'myid',
    password : '1994!BDs',
    multipleStatements :true,
    database : 'project',
    host : 'localhost',
    port : 3306
})

mysqlconnect.query('SELECT * FROM board',(err, data) => {
    if(err) {
        console.log('테이블이 없어');
        const sql = 'CREATE TABLE board(id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(15) NOT NULL, content VARCHAR(300) NOT NULL)';
        mysqlconnect.query(sql, () => {
            if(err) return console.log(err);
            console.log('테이블이 없어서 테이블 생성했어');
        })
    }
    else {

        console.log('테이블이 초기화 되어 있어')
    }
})


exports.createboarddata = async (title, content) => {
    await new Promise((res,rej) => {
        mysqlconnect.query(`INSERT INTO board(title, content) VALUES ('${title}', '${content}')`,
            (err) => {
            if(err) return rej(err);
            res('글추가 완료')
            })
        })
}                                    


exports.getboarddata = async () => {
    return await new Promise((res, rej) => {
        mysqlconnect.query('SELECT * FROM board', (err, data) => {
            if(err) return rej(err)
            res(data)
        })
    })
}

exports.update = async (title, index) => {
    console.log(index + 1, 'idnex')
    console.log(title, index,'board')
    return await new Promise((res, rej) => {
        mysqlconnect.query(`UPDATE board SET content='${title}' WHERE id=${index}`,
            (err) => {
                if(err) return rej(err);
                res('수정 완료')
            }
            
        )
    })
}

exports.Deleteboard = async(index) => {
    const Del = `DELETE FROM board WHERE id=${index};`;
    const setIndex = 'SET @CNT = 0; UPDATE user SET user.id = @CNT:=@CNT+1;'; // id index 재할당  1,2,3, 5 추가할때 문제가 있다
    const resetIndex = 'ALTER TABLE user AUTO_INCREMENT = 0;'; 

    return await new Promise((res, rej) => {
        mysqlconnect.query(Del, setIndex, resetIndex, (err) => {
            console.log(index,'iii')
            if(err) return console.log(err); //rej(err);
            console.log('삭제 완료')
        })
    })  
}