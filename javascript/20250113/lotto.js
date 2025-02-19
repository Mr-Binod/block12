


// 1. 로또 추촘 번호들
// 2. 당첨 번호가 통
// 3. 겹치는 변호가 없어야해
// 로또번호 추첨디 배포해서


const lottoNum = []; //로떠를 추첨할 번호들
const result = []; // 로또의 결과를 담을 배열
// 추첨전 단계
for (i = 1; i <= 45; i++) {
    lottoNum.push(i);
}
console.log("번호 세팅 끝" + lottoNum.length + "개의 번호");

// 6개의 공을 뽑아야한다

for (let i = 0; i < 6; i++) {
    let randomNumber = parseInt(Math.random() * lottoNum.length);

    let number = lottoNum[randomNumber];

    // 실제로 생걱했을때 공을 꺼냈으면 공이 없어져야한다
    // 해당 인덱스의 값을 비우고 뒤의 값을 모구 하나씩 때기고
    // 해당 인덱스와 맨뒤의 값을 들어 바꾸고 맨뒤의 값만 제거한다음에 길이를 줄여버려
    // 이런한 기능이 이미 구현이 되어이ㅆ다
    // 메서드의 종류를 몽땅 아는것보다 메거드의 역화르을 아는게 더 중요하다

    // 배열의 원하는 인덱스의 값을 제거한다 원본 배영에서
    // 값의 얄은 복사 깊은 복사

    // splice : 배경\ㄹ의 인게스의 값을 제거
    // () : 값이 두개가 들어간다 첫번재 시작 인덱스 두번째 지울 갯수
    lottoNum.splice(randomNumber, 1);
    result.push(number);
}

// while 겹치는 숫자가 안나올떄까지.
// 여러번 발생할수 있는 상황도 발생한다.

console.log("로또의 추첨 결과느 두구두구두굳ㄱ");

for (let i = 0; i < result.length; i++) {
    console.log(result[i])    
}