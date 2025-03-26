
const {DataTypes, Model} = require('sequelize');

class Post extends Model {
    // 매개변수 이름으 sequelize로 한 이유는 커넥션 객체를 전달할 매개변수로 정했기때문에
    static init (sequelize) {
        return super.init({
            // 테이블 필드 값
            content : {
                type : DataTypes.STRING(100),
                allownull : false
            }
        }, {
            sequelize, // sequelize : sequelize
            timestamps : false, 
            underscored : false, 
            modelName : 'post',  
            tableName : 'posts',
            paranoid : false, 
            charset : 'utf8mb4', 
            collate : 'utf8mb4_general_ci' 
        })
    }

    static associate(models) {

        models.Posts.belongsTo(models.Users, {foreignKey : 'user_name', target : 'name', onDelete : 'CASCADE'})
    }
}

module.exports = Post;


