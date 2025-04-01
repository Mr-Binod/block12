



const express = require('express');
const socketio = require('socket.io');
const path = require('path')

const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')))









const server = app.listen(3000, () => {
    console.log('server on~')
})

const io = socketio(server);

let users = {};

app.get('/', (req, res) => {
    res.render('main');
})

io.on('connection', (socket) => {
    // data 에는 사용자의 초기 위치의 정보
    // 데이터 베이스에 저장한 정보가 있으면 위치정보를 가져와서 사용하면 된다
    // socket.id socket 의 고유 식별자
    // 키의 값이 겹칠 일이 없다.  uuid  식별 아이디로 사용할수 있다
    socket.on('login', (data) => {
        users[socket.id] = data;
        console.log(users);
        // io 객체의 sockets를 사용해서 emit로 모든 소켓에세 요청을 보낼수도 있고
        // socket 클라이언트의 정보에도 사용자들의 정보가 포함되어있다 broadcast 키에
        // broadcast 객체의 안에는 emit
        // broadcast방송 즉 다른 클라이언트에세 요청을 보낸다. 피어
        // socket broadcast 는 본인 이외의 소켓에게 요청을 보내는 객체
        socket.broadcast.emit('createavt', {id : socket.id, x : data.x, y : data.y})
    })

    socket.on('move', (data) => {
        socket.broadcast.emit('createavt',{id : socket.id, x : data.x, y : data.y} )
    })

    socket.on('disconnect', () => {
        delete users[socket.id];
        console.log(users);
    })

})