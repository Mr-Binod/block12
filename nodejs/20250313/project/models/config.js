

const mysql2 = require('mysql2/promise');



const connectPool = mysql2.createPool({
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME,
    host :process.env.DATABASE_HOST,
    port : process.env.DATABSE_PORT,
    multipleStatements : true
})

// connection check
connectPool.getConnection((err) => {
    console.log(err)
})

// console.log('done')

// 테이블 초기화
const Tableinit = async () => {
    try {
        const [data] = await connectPool.query('SELECT * FROM users;')
        // console.log(data);
    } catch (err) {
        
        await connectPool.query('CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY KEY, uid VARCHAR(15) NOT NULL, upw VARCHAR(128) NOT NULL, name VARCHAR(15), nick VARCHAR(15), imgpath VARCHAR(100) );')
        console.log('table created')
    }
}

Tableinit();

module.exports = connectPool;