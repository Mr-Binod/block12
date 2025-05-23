


# 로컬 스토리지

> 백엔드에서 데이터를 저장하기 전에 제이터 저장의 느낌을 경험
> 브라우저의 성치 경로에 로컬 스토리지 데이터가 저장된다.
> 브라우저를 꺼도 데이터를 남아있다.

> 로컬 스토리지는 웹 브라우저에서 제공해주는 저장소
> 로컬 우리 컴퓨터에 영구적으로 저장할수 있는 기능 브라우저를 닫아도 데이터가 유지된다.
> 민감한 데이터는 저장하면 안된다 

1. 브라우저에 저장되는 데이터 로컬에 저장된다
2. 용량 5mb 까지 저장 가능
3. 보안 문제 javascript 에서 접근이 눈구나 가능한 데니터이기 떄문에 민감한 정보는 저잔하면 안된다.
4. 데이터의 타입은 문자열로 저장된다

## 로컬 스토리지 객체 메서드

```js

window.localStorage === localStorage
// 전역 객체는 생략 가능

// setItem : 데이터를 데이터를 불러올 값
// 키 와 값이 있다.

localStorage.setItem("key", "value");

localStorage.setItem("name", "soon");

//  getItem : 데이터를 불러오는 메서드
//  getItem : 반환 값의 데이터 타입은 문자열

let data = localStorage.getItem("key");

let data = localStorage.getItem("name");
console.log(data);

// removeItem : 데이터 삭체 메서드
// 데이터의 키를 가지고 데이터를 삭체

localStorage.removeItem("name");


// length : 데이트의 길이를 확인
// 데이터의 저장 갯수의 길이를 확인
console.log(localStorage.length);

// 값을 저장할떄 인덱스 번호가 있다

console.log(localStorage.key(0)); // key(index)


```


> 게시판 만든것에서 CR 까지 만든 부분에서 UD 수정돠 삭제를 직접 만들기
> tip 로컬스토리지의 데이터가 진짜 데이터 실제 데이터를 받아서 처리하는 영역이고 데이터를 지눴다거나 수정했다는것은 저장소의 값이 변경되거나 사라진경우 랜더링을 해주면 된다.

1. 수정할때 JSON 안의 값을 가지고 와서 배열의 형태로 바꾼뒤 벼열에서 값을 제거하고 다시 JSON 문자열로 바꿔서 값을 저장

2. 삭제도 배열에서 제거할 값을 제거하고 JSON 문자열로 바꿔서 저장하면 끝

3. 로컬 스토리지의 데이터가 삭제된 경우 INDEX 정렬 한번