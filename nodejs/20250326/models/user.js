


const {DataTypes, Model} = require('sequelize');



class User extends Model {
    static init (sequelize) {
        // 테이블 매핑 객체를 생성하는 생성자 함수 호출 부모클래스에서
        // insert into user (uid primary key auto_increment varchar(20), 
        // upw varchar(200) not null, name varchar(10) not null, grade int not null)
        return super.init({
            uid : {
                type : DataTypes.STRING(20),
                primaryKey : true,

            },
            upw : {
                type : DataTypes.STRING(200),
                allowNull : false
            },
            name : {
                type : DataTypes.STRING(10),
                allowNull : false
            },
            grade : {
                type : DataTypes.INTEGER,
                defaultValue : 1,   // 1은 유저 2는 어더민민
                allowNull : false
            }
        },{
            sequelize, 
            timestamps : true,   // createAt, updatedAt
            underscored : false, // create_at
            modelName : 'User',
            tableName : 'users',
            paranoid : false,  // if true delete time will be added
            charset : 'utf8mb4',
            collate : 'utf8mb4_general_ci'
        }) // 테이블의 속성과 필드명과 필드 속성
    }
    static associate (models) {
        models.User.hasMany(models.Post, {foreignKey : 'user_id', sourceKey : 'uid'})
        models.User.hasMany(models.Category, {foreignKey : 'user_id', sourceKey : 'uid'})
    }
}

module.exports = User;