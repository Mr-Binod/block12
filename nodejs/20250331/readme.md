


# web socket

## socket
> socket 은 인터넷 즉 네트워크에서 통신하는 역활을 도와주는 개념
> 데이터를 받는 역활
> ip 주소, 포트번호로 연결을 시고한다. 데이터를 받을수 있다.
> 소켓은 컴퓨터에서 데이터를 주고 받을때 연결 속성을 가지고 있다.
> ip주소와 포터번호를 가지고 데이터를 받을수 있다.

### http와 websocketd의 차이
> 프로토콜의 차이

    http://,  https://
1. http : 요청후 응답 요청후 응답 받고 안전하게 종료

    ws://,  wss://
2. ws : 요청을 한쪽에서만 지향하는데 아닌 영방향 통신을 지향한다. 논리적 연결을 유지해서 실시간으로 데이터를 주고 받을수 있다


### 구조 

- http 요청 받고 보내고 웹소켓 핸드세이크를 진행한다.

### 웹소켓 업그레이드 요청

```json
GET / HTTP/1.1
host : localhost
connection : upgrade    // 웹 소켓 프로토콜 업그레이드
Sec-WebSocket-key :  클라이언트 값   // 클라이언트와 서버의 값을 확이하기위한 값 겁증을 위한 해시 문자열이 포함된다
                            // 클라이언트와 서버의 값 확인 검증값
Upgrade : websocket

```

- http 의 포로토콜로 요청을 보냈지만 이후에 웹소켓 프로토콜로 변경 요청
- Connection : upgrade 웹소켓 연결을 업그레이드 하겠다

### 웹소켓 업그레이드 응답

```json
HTTP/1.1 101 Switching protocols
Connection : Upgrade
Upgrade : websocket
Sec-WebSocket-key :  클라이언트 + 서버의 값

```

### Sec-WebSocket-key 값을 검증하기위한 해더의 값
> Sec-WebSocket-key 클라이언트에서 요청을 보낼때 16 바이트의 base64 문자열을 포함시켜서 보내준다 임의로 만든 문저열
> 서버에서는 특정한 값ㅇ르 임 문자열에 포함기켜서 응답을 해준다
> sha-1 암호화 문자열을 생성해서 클라이언트에게 응답
> 클라이언트가 이 값을 확인하고 웹소켓의 연결을 신회할수 있는지 검증하기 위한 값.




``` sh
npm init -y
npm i ws


```


### 동물 카톡
> socket io 방의 내용을 좀더 다루기 쉽고 모던한 메서드를 제공한다
> ws 방의 개념이나 소켓 관리 등이



```sh
$ npm i express socket.io ejs