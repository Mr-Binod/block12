

const webSocket = require('ws');

// socket.io

const ws = new webSocket.Server({port : 3000});

// express 서버 객체처럼 대기상태를 제공하는 메서드
// 특정 이벤트가 발생하면 콜백 함수를 실행하겠다
// connection 연결 요청이 발생하면 누가 클라이언트가 
// on : event를 등록할때 많이 사용된다.
// 여기서도 conneciton 이벤트가 발생하면 전달한 콜백 함수를 호출하겠다
// 클라이언트의 주소 즉 다시 데이터를 보내줘야할 호스트의 값이 포함되어있다다

const rooms = {}
const users = []

ws.on('connection', (socket, req) => {

    // socket , 연결 요청한 클라이언트의 내용을 객체로 제공
    // 클라이언트의 주소 즉 다시 데이터를 보내줘야할 호스트의 값이 포함되어있다
    // 파싱 된 객체의 값이 포함
    console.log('client connection request')
    // console.log(socket)
    // 연결된 클라이언트의 주소가 socket 에 포함된다
    // socket 에 이벤트 등록
    // message 기본으로 제공되는 이벤트 기본으로 할당되어 있는 이벤트 이름 즉 키값
    // ws 객체에는 누가 연결을 지속하고 있는지 내용이 포함되어있다.
    // 내가 입잔, 이후에 soon 입장
    socket.on('message', (message) => {

        console.log(message.toString())
        // 모두가 이 내용을 봤으면 좋겠어
        // `브로드캐스트` 데이터를 전파한다.
        // ws에는 연결된 모든 클라이언트가 포함되어있다
        // ws.clients 지금까지 모든 클라이언트가 포함되어있다.
        ws.clients.forEach((el) => {
            // 연결되어있는 클라이언트 모두에게 서버에서 클라이언트로 데이터 전달 
            // 화명의 클라이언트가 message라는 이벤트를  시킬때마다 모두에세 데이터를 서버에서 클라
            el.send(message.toString());
        });
        // message 데이터를 보냈을때
        // 데이터를 보낸 조건을 가지고 채팅을 들어갈건지 채팅을 작성할건지
        // message  객체를 파싱해서 데이터를 사용

        // msg 내영을 객체로 받아서 객체를 파싱해서 데이터로 사용
        // 방이름, 타입, 채틴 내용
        const msgString = message.toString();
        const jsonData = JSON.parse(message);
        const{roomName, type, content, username} = jsonData;
        // 유저 목록 표현하기 위해서
        if(type === 'user_login') { 

            users.push({socket, username})
            ws.clients.forEach((el) => {
                el.send(JSON.stringify({type : 'users', content : users}))
            })
        }
        switch(type) {
            case 'join' : 
                if(roomName in rooms) {
                    rooms[roomName].push({socket, username});
                    ws.clients.forEach((el) => {
                        el.send(JSON.stringify({type : 'join user', content : `${username} 님이 ${roomName} 방 입장`}));
                    })
                }
                break;
            case 'create' :
                if(roomName in rooms) return;
                // empty room blank
                /*
                    rooms = {
                        'soon' : [{socket, 'soon'}, {socket, 'soon1'}]
                    }
                */ 
                rooms[roomName] = [];
                ws.clients.forEach((el) => {
                    el.send(JSON.stringify({type : 'createroom', content : `${roomName} 방 생성`}));
                })
                break;
            case 'message' : 
                if(roomName in rooms) {
                    rooms[roomName].forEach(({socket}) => {
                        socket.send(JSON.stringify({type : 'room_chat', content : `${username} : ${content}`}))
                    })
                }
                break
        }
    })
    socket.on('close', () => {
        // 연결이 종료되었을때
    })
})