


const fs = require('fs');
const {faker} = require('@faker-js/faker');

// CSV 파일 스트림 생성
const file = fs.createWriteStream('student.csv');

// 사용할 테이블의 컬럼 내용
// no space in write
file.write('id,name,email,age,class\n');
const classArr = ['blockchain', 'game', ' story']

// 이루의 랜덤 데이터 생성
for (let i = 0; i < 100000; i++) {
    const id = i;
    const name = faker.internet.username();
    const email = faker.internet.email();
    const age = Math.floor(Math.random() * 100) + 1;
    const className = classArr[Math.floor(Math.random() * 3)  ]
    file.write(`${id}, ${name}, ${email}, ${age}, ${className}\n`)
}