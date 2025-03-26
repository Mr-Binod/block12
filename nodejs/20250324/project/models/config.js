

const Sequelize = require('sequelize');
const Post = require('./post')
const User = require('./user')


const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PAWSSWORD,
    {
        host : process.env.DATABASE_HOST,
        dialect : 'mysql'
    }
)

// 유저 테이블 만들고 매핑
const users = User.init(sequelize)
// 게시글 테이블 만들고 매핑
const posts = Post.init(sequelize);

const db = {Users : users, Posts : posts, sequelize}; // 순서 user 먼저 
users.associate(db);
posts.associate(db);


sequelize.sync({force : false}).then(() => {  // 있는거 테이블 제거 하고 다시 생성 
    console.log('database on')
    }).catch((err) => {
        console.log(err)
    })


module.exports = db