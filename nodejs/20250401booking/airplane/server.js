




// 요구사항
// 비행기 좌석을 선택해서 
// 해당 좌석을 예약할수 있는 페이지를 만들어주세요
// 접속해 있는 유저들에게는 실시간으로 예약된 좌석이 보일수 있게 작업해주세요

// 비행기 좌석의 데이터 정보는
// 데이터를 저장한 테이블 혹은 액셀에서 가져옻 데이터를 기반으로
// 데이터를 가공해서

// json 파싱만해서 사용하는 형태로 하는데
// 이후에는 이런한 플렛품을 웹페이지를 개발할깨 scv json 파일이나 등 등

// 데이터의 가공을 얼마나 개발쪽에서 공수를 들일지에 따라서 비개발자의 공수가 줄어든다.
const express = require('express');
const path = require('path');
const socketio = require('socket.io');
const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('main');
})


const file = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'seats.txt'), 'utf-8'));
// console.log(file);

app.get('/seats', (req, res) => {
    const {seatsName} = req.query;
    // file['a'] 
    // file['b']
    // file['c']
    res.json(file[seatsName]);
    // console.log(file[seatsName])
})

const server = app.listen(3000, () => {
    console.log('server on~')
})

const io = socketio(server);

io.on('connection', (socket) => {
    // console.log('client added');
    socket.on('reserve', (data) => {

        const {seatno, seatsName, x, y} = data;
        let seat = file[seatsName]
        if(seatno === 1) {
            console.log(seatno)
            seat[y][x] = 2;
            io.sockets.emit('reserve', data);
        }
        else{
            console.log(seatno)
            seat[y][x] = 1;
            io.sockets.emit('reserve', data);
        }


        // 변경한 데이터의 정보만 보내서 재요청 x 자원 낭비 줄이고 다른 사용자들에세[ 본인의 예약정도 
    })
})