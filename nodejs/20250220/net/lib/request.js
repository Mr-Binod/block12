

const { spawn } = require("child_process");
const { buffer } = require("stream/consumers");



// 요청을 받은 메시지를 객체로 변환 
const SPACE = " "; // 빈공백
const NEW_LINE = "\r\n"; // 한줄 내린것
const TWO_LINE = NEW_LINE + NEW_LINE;
const START_LINE_NAMES = ["method", "url", "version"];
const buffer1 = Buffer.from("hello");

// 쿼리 문자열 파싱
const getQuery = (queryString) => {
    if(queryString.length === 0) return null;
    // index=1&age=20
    const query = queryString.split("&");
    // index [index=1, age=2]
    const query2 = query.map((value) => value.split("="))
    console.log(query2, "query")
    // [ [ 'index', '1' ], ['age', '20'] ] query
    const query3 = query2.reduce((acc, line) => {
        const [key, value] = line;
        acc[key] = value;
        return acc;
    }, {})
    // {index : 1, age : 20}
    return query3;
}

// 요청 데이터의 시작 라인 추출 할 함구
const getStartLine = (startLineString) => {
    // GET/shop HTTP/1.1
    // [GET, /shop, HTTP/1.1]
    const startLine1 = startLineString.split(SPACE); //converts string into array
    // [["method", "GET"], ["url", "/shop"], ["version", "HTTP/1.1"]] 
    const startLine2 = startLine1.map((value, index) => [START_LINE_NAMES[index], value]) 
    // 객체로 변환
    const startLine3 = startLine2.reduce((acc, line, index) => {
        const [key, value] = line;
        acc[key] = value;
        return acc;
    },{})
    // {"method" : "GET", "url" : "/shop", "version" : "HTTP/1.1"}
    // 쿼리 스트링 있는 경우에는 
    // 쿼리 스트링 포함되어있는지 여부 판단하고 키로 추가해주염 된다.
    const querystringEndIndex = startLine3.url.indexOf("?");
    console.log(querystringEndIndex, "querystringendindex")
    // 쿼리 스트링이 있으면
    const isQuery = querystringEndIndex !== -1;
    if(isQuery) {
        // 쿼리 문자열을 객체로 변활
        const queryString = startLine3.url.slice(querystringEndIndex + 1);
        // index=1
        // 쿼리 문자열 처리
        const query = getQuery(queryString)
        startLine3.query = query;
        startLine3.url = startLine3.url.slice(0, querystringEndIndex)
    }
    // console.log(startLine3)
    return startLine3;

}

// const a = [1,2,3,4,5,6];
// a.reduce((acc, value, index) => {
    // console.log(acc);
    // console.log((value, " : ", index));
//     acc[value] = index;
//     return acc;
// },{})
// 두변째 매개변수가 있고 없고의 차이다 있느느데 배결의 요서의 첫번째를 할당하고 두번쨰 요소부터 순회
// 값이 있으면 초기값으로 두번째 맴개변수를 할당하도 첫번쨰 요소부너 진행
// 첫번째 매개변수에 이전 값을 전달하기 휘해서는 콜백함수에서 반환한 값으로 재할당 된다

// 헤드내용

// 바디내용

// 헤더의 정보를 만들함수
const getHeaders = (headerString) => {
    const headerLine = headerString.split(NEW_LINE);
    // 줄마다 배열의 구분으로 추가해서 배열의 요소는 한줄한줄 하나의 요소로 포함된다
    // shift는 배열에서 첫번째 요소를 내보낸다
    const startLineString = headerLine.shift();
    console.log(headerLine);
    const startLine = getStartLine(startLineString);
    console.log(startLine);
    // 헤더의 가장 중요한 메시지는 첫번째 라인
    // console.log(headerLine);
    // Header의 남어지 값을 객체로 변환
    const headers = headerLine.reduce((acc, line,) => {
        const [key, value] = line.split(": ");  //'Host: localhost:3000',  ["Host", "localhost:3000"]
        acc[key] = value;
        return acc;
    },{})
    // console.log(headers);
    // 여러개의 값을 내보내는 경우
    return {
        startLine, headers
    }
    /*
        {startLine : startLine, headers : headers}
        {startLine, headers}
    */
}

const getHeaderEndIndex = (request) => request.indexOf(TWO_LINE);

// 최정적으로 데이터의 파싱을 하는함수
// 나눠져서 
const getRequest = (buffer) => {
    const headerEndIndex = getHeaderEndIndex(buffer);
    console.log(headerEndIndex, "headerend")
    const isHeaderPending = headerEndIndex === -1; // 
    // 요청 메시지가 전부 전송이 되었는지 확인
    if(isHeaderPending) return null;

    // const a = [1,2,3];
    // const [b, ...c] = a;
    // b = [1], c [2,3]
    
    const [headerString, ...bodyString] = buffer.toString().split(TWO_LINE);
    const body = bodyString.join(TWO_LINE); //body를 하나의 문자열로 변환
    const header = getHeaders(headerString);
    console.log(header , "headstring")
    return {
        header, body
    }
}

// { request : { getHeaders }}



exports.request = { getRequest };






const a1 = ["hello", hi]
const a  = {helloo : "hi"}