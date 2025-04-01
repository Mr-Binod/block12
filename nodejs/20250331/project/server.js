




const express = require('express')
const socketio = require('socket.io')


const app = express();


app.set('view engine', 'ejs')







// 서버 대기상태
// 서버의 대기상태로 만들고 반환괸 객체의 안에는 서버의 호스트정보와 포트번호가 할강되어있는 객체를 반환

// 서버가 즉 호스트와 포트가 필요한 이유
// 웹 소켓 객체를 생성할것

const server = app.listen(3000, () => {
    console.log('server on~')
})

// socketio 생성자 함수를 호출하고 객체를 반환하는 내용을 제공
// http://localhost:3000/socket.io/socket.io.js
// 백엔드는 block.com => wsBlock.com        // proxy server  
const io = socketio(server);


// socketio 함수 호출한 순간 서버 객체를 만들고 정적 라우팅으로 서버 호스트에 ws 프로토콜을 요청 보낼수 있는는
app.get('/', (req, res) => {
    res.render('chat');
})

// 접속한 유저 관리 배열
let users = [];
io.on('connection', (socket) => {
    // console.log(socket);
    // 클라이언트에게 메시지를 즉 데이터를 보낼수 있는 통로
    users.push(socket.id);
    // 클라이언트의 고유의 식별자
    // 요청을 보낼때 사용되는 식별자 값
    // 메시지를원하는 클라이언트에세 보낼수 있다.
    // socket.on('message', () => {
    // })
    console.log(users);

    io.sockets.emit('userConnect', users);



    socket.on('whisper', ({id, msg}) => {
        // 요청을 누구에게 보낼것이냐
        // to('메시지를 받을 주체')
        // 식별자로 메시지를 전달 즉 귓속말
        // send() to client
        // emit message 발생 시키는데 내가 지정한 이벤트에 조건에 맞는 내용을 호출하겠다.
        // on 으로 지정한 whisper 이런한 이벤트를 호출할때 emit 로 호출한다
        // 서버로직에 whisper 
        // emit 호출하게 되면 상데방 즉 클라이언트는 서버에세 호출을 요구
        // 서버에서 emit 면 클라이언트에세 호출 요구
        // emit 첫번째 매개변수는 whisper이런 이벤트의 이름
        // 두번쨰 매개변수 부터는 객체로 전달된다.
        // io.socket.to(id).emit('whisper', msg,name, age) === whisper 이벤트이름 {msg, age, name} 매개변수로 전달되는 객체
        // id는 접속했을때 고유 식별자가 생성된다.
        console.log({id, msg});
        io.sockets.to(id).emit('whisper', msg)
    })
    socket.on('leaveroom', (room, name) => {
        socket.leave(room);  // 객체 안의 방의 값ㅇ르 제거
        io.to(room).emit('leaveroom', room, name)
})

    socket.on('joinroom', (room, name) => {
        // ID를 고유의 해시값으로 id를 가지고 있ㅎ는 소켓들 귓속말
        // class 처럼 복수의 클라이언트가 가질수 있는 값
        // 복수의 클라이언트를 가르키는 값
        socket.join(room); 
        // 해당 클라이언트를 가르키는 값이 하나더 생성된것
        // 이미 해당 방에 접속한 클라이언트
        io.to(room).emit('joinroom', room, name)
    })

    socket.on('chat', (room, name, msg) => {
        io.to(room).emit('chat', name, msg)
    })

    socket.on('disconnect', () => {
        // transport close 메세지
        console.log(socket.id)
        users = users.filter((el) => !(el === socket.id))
        console.log(users);
        io.sockets.emit('userConnect', users);
    })
})
