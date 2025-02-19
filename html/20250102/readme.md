# html, css, 속성, 식별자

## CSS
> cascading style sheets의 줄입말
> 우리의 html 문서의 스타일 적용되는 과정
>바이트 코드 변환을 해서 태그, 객체로 변환을 하고 노드라는 형태로 만든다.
> css 스타일 시트를 읽은 이후 css 노드와  html 노드를 가지고 렌더링 노드를
생성해서 브라우저 렌더링을 시작한다.

## 문법

선택자 # : id 선택자 
선택자 . : class 선택자 
선택자 element : 엘리먼트 전체를 선택 

작설 방법
선택자 + {} 객체
객체 {
    속서 : 값; 
}

1. 내부의 스타일 시트
``` html
<!-- <style> 태그는 css 작성을 할수 있는 영역 -->

<!-- 주석 작성도  -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    /* CSS 주석작성 영역 */
    
</style>
<body>
    
</body>
</html>
```

2. 외부의 스타일 시트

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<link rel="stylesheet" href="./style.css">
<body>
    
</body>
</html>
```

3. 인라인 형태의 작성 방법




4. CSS 작성 방법

선택자

- tag
- class
- id

1. tag
```html
<style>
    선택자 이름  {
        스타일의 내용

        속성 : 값;
    }

    a {
        display: block;
        color : red ;
    }
</style>
```

2. class ( .앞으로 붙어서 작성해야합니다 )
맨앞에서는 숫자가 작성되면 안된다.

```html
<style>
    .content {

    }
</style>
```


3. id
하나의 태그에 원하는 아이디를 줘야한다.
url 의 형태에 따라 최상단에 노출되게 만들수 있다.

id 는 고유의 값으로 요셔의 아이디명을 브라우저의 요처 url 을 작성할때 맨뒤에 
-  #id 명
하나의 고유의 값 자바스크립트를 사용할때 이름을 변수처름

```html
<style>

</style>

```

### 블록과 인라인 

> 너비와 높이를 지정할때 블로그은 본의 크기를 지정할수 있지만 인라인 너비와 높이를 지정할수 없고 지정할수 없고 본인의 내용의 크기만큼만 너비와 높이를 가질수 있다. 하지만 인라인 요쇼에 
너비와


> 인라인 속성으로 스타일을 적용하게 되면 가장 우선수




### 선택자의 우선순위 

채그 선택자 < 클래스 선택자 < 아이디 선택자 

스타일 작성할때 가장 밑에 작성한 스타일이 우선적으로 적용된다.

인라인 족성으로 스타일 적용하게 되면 가장 우선순위가 높다. 그리고 가독성이 많이 떨어진다.

!important 값 뒤에 정의하게 되면 우선순위에서 우리가 가장 높게 설정할수 있다.


## 단축키 (shortcut key)

동일한 내용 선택 : 컨트롤 + D

### 중간 실습
영화관의 영하들을 밑으로 나열 시킬것이고 상단에  a 태그로 해당 영화의 위치로 스크롤이 이동됭ㄹ수 있게 
영회의 이미지를 클릭하면 영화 리뷰 페이지로 이동 될수 있게
영화들 테두리가(border) 있고 배경색이(background color) 있다.


### 자식 선택자
> 선택자의 자식의 요소의 스타일을 정의한다.
> 예) class="클래스"
> 예) .클래스.클래스

### 이미지의 사이즈를 정의할때
> 이미지에는 각각의 비율
>이미지의 비율을 무시하고 노비와 높이를 주면 안된다
>이미지의 너비 혹은 높이만 지정을하고 비율을 유지시키자

### 다증 클래스

> 클래스 정의할때 클래스늬 옆레 문자열을 한칸 띄어서 작성한다
> 예) class="box (여기에 클래스명 작성)"
> 예) .클래스.클래스2

### 형제 선택자 
>


### CSS 의 애니메이션
> 애니매이션의 속성을 정의하고 단위의 프레임대로 움직이는 인터렉션의 효좌를 주고 


### 간단한 이력서 형식을 
나열을 싴티때
float 이라는 속성을 사용해서 옆에 요소를 나열할수 있는데요

