

const loginbtn = document.querySelector('.loginbtn')
const loginwrap = document.querySelector('.loginwrap')
const avatar = document.createElement('div');
const playerwrap = document.querySelector('.playerwrap');

let socket = null;

// 위치 정보는 랜덤으로 
// 사용자가 최초 진입하면 
// 전체 화면 크기의 값에서 랜덤한 값을 만들자

let x = (Math.random() * (window.innerWidth - 20));
let y = (Math.random() * (window.innerHeight - 20));

// 키보드를 누르고 있으면 X 값 Y 값을 증감 시켜서 위치를 이동

avatar.style.top = y + 'px';
avatar.style.left = x + 'px';

// 다른 유저들을 담을 객체
let avatars = {};

// socket.on('createavts', (data) => {
//     console.log(data)
// })

loginbtn.onclick = () => {
    if(socket) return;
    socket = io.connect();
    loginwrap.style.display = 'none';
    socket.emit('login', {x, y})

    socket.on('createavt', (data) => {
        if(!avatars[data.id]) {
            let createavt = document.createElement('div');
            // data 접속한 다른 유저의 데이터를 전달할것
            // 만약 로그인할때 사용자의 정보가 있다 케릭터의 색이나 옷 등등의 정보가 있다면
            // 표현해줄수 있다.
            createavt.classList.add('otherplayer');
            avatars[data.id] = createavt;
            playerwrap.append(createavt);

        }
        avatars[data.id].style.top = data.y + 'px';
        avatars[data.id].style.left = data.x + 'px';
    })
    document.addEventListener('keydown', (e) => {
        const UP = 'w';
        const DOWN = 's';
        const LEFT = 'a';
        const RIGHT = 'd';
        console.log(e.key)
        // 상수 선언 eunm 값을 사용하는 이유는 개발자가 자주 사용되는 값을
        // 상수로 정의를 해놓고 사용하는건데
        // 게발자가 개발을 하다보면 문자열로 작성하는 경우에 오타가 발생하면 찾기가 힘드니까
        switch (e.key) {
            case UP:
                y -= 6;
                break;
            case DOWN:
                y += 6;
                break;
            case LEFT:
                x-= 6;
                break;
            case RIGHT:
                x += 6;
                break;
        
            default:
                break;
        }
        socket.emit('move', {x, y});

        avatar.style.left = x + 'px';
        avatar.style.top = y + 'px';
    })
}


avatar.classList.add('player')
playerwrap.append(avatar);
