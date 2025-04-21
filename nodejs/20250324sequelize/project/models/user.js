
const {DataTypes, Model} = require('sequelize');

class User extends Model { 
    static init(sequelize) {
        return super.init({
            name : {type : DataTypes.STRING(100), primaryKey : true},
            nickname : {type : DataTypes.STRING(20), unique : true}, // 유니크 속성 중복이 되지않는 필드
            createAt : {type : DataTypes.DATE}
        }, {
   
            sequelize, // sequelize : sequelize
            timestamps : false, // 생성 시간과 수정 시간을 추가할지 말지.
            underscored : false, // 스네이크 표기법으로 사용할건지 
            // createAt -> create_at  updatedAt -> updated_at  예를 들어서서
            underscored : false,
            modelName : 'User',  // 모델의 이름을 정의한다. 시퀄라이즈에서 사용하는 모델의 이름 join으로 호출할때나 관개형 표현할때
            tableName : 'Users',  // 실제로 데이터베이스에 생성될 테이블의 이름
            paranoid : false, // 삭제시간 남길건지??  deleteAt 이 필드로 생성된다. 삭제 시간릉 남기고 로그를 기록할때
            charset : 'utf8mb4', // utf 파일 인코딩 mb4 4 byte 사용해서 모든 유니코드 문자를 저장할수 있는 방식
            collate : 'utf8mb4_general_ci' // 문자의 규칙 정렬 규칙 general_ci 개소문자 구분없이 문자를 정렬하는 규칙을 정한것
        })
    }

    static associate(models) {
   
        models.Users.hasMany(models.Posts, {foreignKey : 'user_name', sourceKey : 'name'})
    }
}
        
    
module.exports = User;