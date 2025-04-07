


const Sequelize = require('sequelize');
const User = require('./user')
const Post = require('./post')
const Category = require('./category')


const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host : process.env.DATABASE_HOST,
        dialect : 'mysql',
        port : process.env.DATABASE_PORT  // 기본적으로 3306 사용
    }
);

// sequelize 연결 속성을 포함하고 있는 객체

const users = User.init(sequelize)
const posts = Post.init(sequelize)
const categories= Category.init(sequelize)

const db = {
    User : users, 
    Post : posts,
    Category : categories,
    sequelize
}

users.associate(db);
categories.associate(db);
posts.associate(db);



// 테이블 조기화 할지 말지 => 테이블을 삭제했다가 다시 생성할지 말지
// sync 커넥션 맺는 메서드 
sequelize.sync({force : false}).then(() => {
    console.log('database on~');
}).catch(console.log)



module.exports = db