


const jwt = require('jsonwebtoken');

const KEY = 'mykey';
// 검증에 사용할 비밀키

// JWT 토큰을 생성
// sign 토큰 생성 메서드
const token = jwt.sign({uid : 'soon', name : 'soon'}, KEY, {expiresIn : '1h'});

console.log(token)

const temp = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJzb29uIiwibmFtZSI6InNvb24iLCJpYXQiOjE3NDE4MzA3NDAsImV4cCI6MTc0MTgzNDM0MH0.9rj3oi-7UIBdr5Uo_YotAiWoY9D6N6cWhbeVH869A28'

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
// eyJ1aWQiOiJzb29uIiwibmFtZSI6InNvb24iLCJpYXQiOjE3NDE4MzAzODQsImV4cCI6MTc0MTgzMzk4NH0.
// lWLHNZ2jc4LuZ5_n7fQ7pWW1VYrrYoTQdAQMyf8SrBA

const decode = jwt.verify(token,KEY);
// 서명으로 검증을 시도하는데 서면과 일치하지 않는값이 나요면 검증 된 값이 아니기 떄문에 변조가 되었다
console.log(decode);