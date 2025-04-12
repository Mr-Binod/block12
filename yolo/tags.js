

const {DataTypes, Model} = require('sequelize');

class Tag extends Model {
    static init(sequelize) {
        return super.init({
            
        }, {
            sequelize,
            timestamps : true ,
            modelName : 'Userintrest',
            tableName : 'userintrests',
            charset : 'utf8mb4',
            collate : 'utf8mb4_general_ci'
        })
    }        
}