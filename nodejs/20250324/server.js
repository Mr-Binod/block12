



const {Sequelize, DataTypes, Model} = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PAWSSWORD,
    {
        host : process.env.DATABASE_HOST,
        dialect : 'mysql'
    }
)

const User = sequelize.define( // 엔티티 객체 생성
    'User', // modelname 관계형을 맺을때 사용
    {  // feildname and datatype
        id : {
            type : DataTypes.INTEGER, // 숫자 타입으로 정의
            autoIncrement : true, 
            primaryKey : true
        }, 
        name : {
            type : DataTypes.STRING,
            allowNull : false,
        }
    }, 
    {
        // 테이블 속성
        tablename : 'users'    
    }
)
// User 변수에는 테이블 매핑 객체 
// User의 객체의 메서드를 사용해서 쿼리요청을 보낼수 있다


sequelize.sync({force : false}).then( async () => {
    console.log('데이터베이스 동기화 됬다.')
    // 데이터 생성
    // insert into users (name) values ('soon')
    const data = await User.create({name : 'soon3'})
    // console.log(data.toJSON())
    // 생성된 데이터 내용 확인

    // 데이터 조회
    // const data2 = (await User.findAll()).map(e => e.dataValues);
    // console.log(data2)
    // select * from users where id=1;
    // const data3 = await User.findOne({where :{id : 3, name : 'soon2'}});
    // console.log(data3)
    // 데이터 수정
    // update users Set name='soon123' where id=2
    // const updatedata = await User.update({name : 'soon123'}, {where : {id : 2, name : 'soon1'}})
    // console.log(updatedata)
    // 반환값으로 수정된 내용이 할당되지 않는다.
    // 반환되는 내용은 수정된 행의 갯수나 내용을 반환

    // delete from users where id=2
    // const deletedata = await User.destroy({where : {id : 2}})
    // console.log(deletedata)  // 반환값은 데이터의 삭제된 갯수
    // ORM 단점 복잡한 쿼리문을 작성해서 사용해야한다.
    
    const createORM = (obj) => {
        let query = 'insert into users';
        // (name) values ('soon')
        let queryfeild = '(';
        let values = '(';
        for(const key in obj) {
            queryfeild += key + ',';
            if(typeof obj[key] === 'number') {
                values += obj[key] + ',';
            }
            else if (typeof obj[key] === 'string'){
                values += `"${obj[key]}"` + ',';
            }
            // values += obj[key] + ',';
            // console.log(obj[element])
        }
        const data =  queryfeild.slice(0, -1);
        const valuesData =  values.slice(0, -1);
        // 맨뒤에서 문자열 하나 잘라서 data 에 할당
        // 시작 인덱스를 0으로 잡고
        // 마지막 문자열을 -1 호 전달하면 마지막 문자열 한대 제외하고 메서드에ㅐ서 값 반환
        queryfeild = data + `,createdAt, updatedAt)`;
        values = valuesData + `,2025-03-24 11:58:00, 2025-03-24 11:58:00)`;

        console.log(queryfeild)
        console.log(values);
        const queryresult = `${query} ${queryfeild} values ${values}`;
        console.log(queryresult)
    }
    createORM({name : 'soon5', uid : 123, age : 20})

    // 순서를 맞춰야하는 데이터는 DELETE 할때 인덱스 정렬하고 AUTO INCREMENT 0 으로 속성성
    // 일반쿼리 사용
    sequelize.query('create table boards(title varchar(20), content varchar(200);');

}).catch((error) => {
    console.log(error)
})



class Square {
    constructor (_shape) {
        this.shape = _shape;
    }
    // say() {
    //     console.log(this.name, this.shape)
    // }
    say(name, shape) {
        console.log(name, shape)
    }
}

class Box extends Square {
    constructor(_name, _shape) {
        // super 는 부모 생성자를 호출하는 함수
        super(_shape); // 무보 생성자 호출
        super.say('안녕', '오핸만이야')
        // super 상속받은 무모의 생성자 함수나 부모의 함수를 자식 클래스의 생성자함수에서 호출할수 있다.
        // super 는 constructor 함수 안에서만 호출할수 있스비나다.

        console.log(this)
        this.name = _name
    }
    say() {
        console.log(this.name, this.shape)
    }
}

const box = new Box('쿠팡 박스', '사각형')


