

// 모듈화의 장점 유지보수가 좋다
const lottoNum = [];

const result = [];

const init = () => {
    for (let i = 0; i <+ 45; i++) {
        lottoNum.push(i);        
    }
}

const play = () => {
    for(let i = 0; i < 6; i++){
    const random = Math.floor(Math.random() * lottoNum.length);
    result.push(lottoNum[random]);
    lottoNum.splice(random, 1);
    }
}

module.exports = {lottoNum, result, init, play}  //객체로 나 키값을 할당해서 export 할수 있다
module.exports.lottoNum = lottoNum;

