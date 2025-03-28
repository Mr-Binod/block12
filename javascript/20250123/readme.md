

#  DOM, 정규식

## 가위, 바위, 보

1. 플래이어, 컴퓨터
> 플레이어, 변수, 컴퓨터 변수

2. 컴퓨터는 랜덤한 값을 가지고 가위바위보
> 컴퓨터의 변수에 랜덤한 값을 할당 Math.random() * 3
> 인덱스 번호로 가위 바위 보 객체를 담아서 인덱스 번호로 판단한 값을 할당

3. 플레이러는 버튼을 눌러서 가위 바위 보
> 요소의 onclick 이벤터를 이러나면 가위 바위 보 세 가지 버튼중 클릭한 버튼의 내용을 할당해주면 된다.

4. 승패를 결정해서 화면에 출력
> 조건문을 통해 승패 걸고 값을 구하고 요소의 내용을 포함시켜서 화면에 출력


## 정규 표형식
> 문자열을 검색하거나 원하는 문자열을 찾을때 혹은 슈칟에 맞는 문자열인지 확닝할때 사용하는 패턴
> 한마디호 문자의 패턴을 검색하기 위햄사용하는 문자
> 자바스크립트의 내장 객체인 regExp 하는 객체를 제공해준다.
> 예) 회원가입 email 현식으로 작성 했는지 핸드폰 번호 형식인지?
> 비밀번호에서 특수문자를 포함했는지?

```js
test(); // 정슈표현식에 맞는 문자인지 확인하는 메서드
// 첫번째 정규식 표현방법
//  /내용/ === 정규 표형식
let reg = /a/;

// 부면째 정규식 표현 방법
let reg2 = new RegExp("a");

// 위 처럼 잃게 정슈표현식을 만드는 이유는 규칙을 가진 문자열을 찾기위해거

let reg3 = /[3,6,9,10,11]/
// [] 내부의 문자열중에 하나 -> 3 or 6 or 9 or 10 or 11
// 이 중에 하나가 포함되어 있는지? 문자열에

let reg4 = /[0~9]/
// 0~9 === 0 부터 9까지중에 포함되어 있는지
// 0 에서 부터 9 까지 숫자를 포함한 문자열인지

// 문자열 검색
let str = "hello javascript...."
// 검색
// search 문자열 안에 포함된 메서드
// 문자열 포함되는지 확인을 한다
let reg5 = str.search(/javascript/);

 // 문자열을 찾아서 다른 문자열로 변환
    // replace 첫번째 매개변수로 본문에서 변환할 문자열
    // 두면째 매개변수 본문에서 해당 문자열을 수정할 내용
    let reg6 = str.replace(/javascript/, "css");
    console.log(reg6)

let reg7 = /javascript/; //자바스크립트는 모든 객체가 원형
let reg8 = /javascript2/;

// 문자열이 포함되어 있는지 확인
// bool 반환
console.log(reg7.test(str)) // 있으면 true 없으면 false 반환
// 문자열이 포함된 단어가 있으면 true
// 없으면 false

// 정슈 표현식의 플래그
// 문자열 규칙을 비교할깨 옵션을 설정할수 있다

// i : 대소문자를 구별하지않고 비고할수 있는 옵션 추가
// g : 전체 문자열의 정규식과 비교한다. 전체내용을 비교하고 변경을 전체 문자열을  하겠다
// m : 줄이 내림 체크를 하는 옵션 ^ $ 줄이 다를떄 
/* 
    안녕
    문자열
    두번째문자열

*/

let str3 = "program javascript \n and html css";

let reg9 = /html/i;

// 문자열안에 포함된 메서드
// metch  배열의 형태로 반환
console.log(str3.match(reg9));

let str4 = "program is javascript and html javascript"
let reg10 = /javascript/g;

let value = str4.replace(reg10, "css");

// ig : 대소문자 구분 없고 전체 문자열을 찾겠다. 검색 옵션을 추가
let reg11 = /[A-K]/ig;
//  A~K  alphabet 다 찾아온다.



 console.log(str.match(reg11));

//  정규식의 메타 문자
// 메타 문자는 솟자만 흑은 알파벳만 내용을 정의할수 있다
// 메타 문자료 표현한다
// 솔직히 암기
// 정규식 공식 문서
// 비밀번호 입력이나 이메일

/*
 ^문자 : 정규 표현식에서는 시작의 문자가 맞는지 확인한다.
  문자$ : 정규 표현식에서 끝나는 문자가 맞는지 확인한다
  \W : 모든 문자를 찾는다 속하는 모든 문자를 찾는다
  \W : 알파벳 대소문자, 숫자 _문자를 (특수문자) 제회하고    모든 문자 찾는다. 숫자란 특수문자 제회하고
  \d : 숫자를 찾는다
  \D : 숫자를 제회하고 문자 찾는다
  \s : 공백문자를 찾는다
  \S : 공백문자를 제외하고 찾는다
*/

let reg12 = /^T/ig;
console.log(str4.match(reg12));

// 외계어

// 이메일 아이디 비밀번호
```