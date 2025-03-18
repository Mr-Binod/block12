


# JOIN , ERD(entity relationship diagram) // sql
- 내부 join
- 외부 join(left, right)

> 비디오 가게에 비디오를 빌리러 갔는데
> 사장님이 장부를 작성한다
> 장부에 비디오를 빌릴떄 빌리는 사람
> 빌리는 사림이 없다면 비디오는 빌려질수가 없다

*** 빌리는 사람 table ***
id | 이름 | 나이 |
1  | soon | 20  |


*** 정부 테이블 table ***    <!-- 성장(growth) -->
이름 | 비디오 | 사용자_id(외해키) // 외래키 값으로 다른 테이블에 조회한다

데이터 모델링
> 정부를 시스템적으로 구출할때 사물적인 내용을 가지고 시선으로 비라보면서 모델을 설계한다
> 현실에 있는 개념을 가지고 데이터베이스의 테이블을 설계 를 해서 다이어그램으로 표현해서 아키텍처 설계를 한다
> 데이터를 추상화한 모델은 데이터의 형태를 이해하기 위해서 SQL 로 작성하면 된다.
> 백엔드 개발자의 핵심

1. 작성하는 프로그램의 내용을 파악
> 쉽게 게시판
> 현실의 프로젝트 요구사항 파악 (table design and whats the client demand?) 요구사항

2. 개념적으로 설계 
> ERD 다이어그램 작성 (필요한 필드명들 정리)
> ERD (entity relationship diagram)
3. 논리적 설뎨
> 상세한 타입 설계 속성들 정리

4. 데이터 베이스 구현
> SQL 작성 구현

### 테이블하나하나가 엔티티
> 데이터로 표현 즉 정의가 가능한 사물이나 개념을 뜻
> 엔티티의 중요한 목적 타입 검사가 가장 중요하다. 즉 키와 값을 정의할때 타입을 잘 설계하는것이 중요하다.


터를 추가할떄 사용자_id (외래키 ) 이 값에 저장하는 값의 데이터가 빌리는 사람 table 의 기본키ㅏ가 있는 지 확인하고
> 테이블에 데이터를 
> 장부 테이블에 데이추가할수 있는 제약 조건

> join 구문과 외래기 재약조건은 기능적으로 상관은 없지만 테이블의 설계 목적에 따라서 작성하기 위해서 제약조건을 결고 사물적으로 
데이터를 표현한귀 join 을 목적성에 맞게 사용하자

> 기본키를 가지고 외래키를 관계성을 맺어서 식별자로 식별하는 경우
> 기본키가 포함되어 있는 여부에 따라서 연관성으로 부모의 삭제가 일어나면 자식의 테이블의 값도 삭제를 할수 있다
> 일반 컬럼응로 외래키의 관계성을 맺어서 사용하는 경우 연관성으로 부모 삭제 시에도 자식 테이블의 데이터를 유지할수 있다
> 용어로 식별자 관계, 비식별자 관계
1. 식별자 관계 : 기본키를 사용해서 외래키와 관계성을 맺는 경우 자식의 테이블에서 기본키로 설정한 외래키
2. 비식별자 관계 : 일반 컬럼을 사용해서 아래키와 관계성을 맺는 경우

### 식별자 관계  if primary key is deleted in parent key then then keys in child will be deleted
```sql
create table parent {
    parent_id int primary key
}

create table child {
    child_id int primary key,  
    -- primary key (child_id, parent_id) --부모의 키를 가지고 자식의 기본키에 포함시킴
    -- 자식은 부모의 기본키를 따라간다 즉 부모가 삭제되면 자식 테이블의 값도 삭제된다
    -- 부모의 테이블의 값이 제거되어도 자식 테이블의 값이 남아있다
    parent_id int,
    foreign key (parent_id) references parent (parent_id) 
}



```
### 비식별자 관계
```sql

```

> ORM 모델을 사용하는경우 외래키 제약 조건이 없으면 join 구문을 사용할수 없도록 조건문 처리를ㄹ 해놓았다


> 장부 테이블에 값이 추가되기 위해서는 빌리는 사람의 테이블에 데이터가 있어야한다
> 제약 조건을 추가한다, 외래키

체약 조건은 두가지
1. 기본키 : 식별자로 사용되고 index 를 할수 있는 키를 설정( 조회가 번번히 많이 이러나는 테이블의 경우에는 기본키로 인덱싱한다)
2. 외래키 : 다른 테이블의 기본키를 참조


1. 테이블의 연결 관계를 맷고 같은 값을 가진 컬럼이 존재한다


### 설계가 이후에 
JOIN
> 외 설계가 된 이후에 사용을 해야하느야
> 기능적으로 문제는 없지만 개념적으로 관계성이 없는 데이터를 조회할 필요는 없기 때문에

1. JOIN 개념 : 관계성을 가지고 있는 테이블의 데이터를 조회하는 경우에 사용하는 쿼리문 특정 조건에 맞는 데이터를조회할떄 사용
2. 테이블의 관계성이 설정 : 2 개 이상의 테이블의 관게성을 정의해서 값을 조회하거나 혹은 수정 삭제에도 사용할수 있자.


### JSON 의 특징
1. 다중 테이블 조회 : 2 개 이상의 테이블의 값을 조회할수 있다

```sql
select * from user where id=1;

// 조회 하면서 두 테이블의 값을 수정

update user join board on user.id = board.user_id set user.name = 'soon'where board.user_name = 'soon';


update user join board on user.id = board.user_id set user.name = 'soon'where board.user_name = 'soon';

```

2. 별칭도 사용 사느  : join을 할때 테이블의 필드가 겹치거나 하는 현상에서 별칭을 사용해서 가독성을 높일수 있다 


### 테이블 설계

> 요구사항 학생이 정보를 입력해서 가입을 하고 수강신청으로 과목을 정해서 신청할수 있는 페이지를 만들어주세요.
> 학생은 회원가입을 할때 이름을 입력하고
> 수강신청을 할떄는 해당 학생이 수강하고 싶은 과목을 입력 받아주세요. 과정명이랑 과목을 입력 받아주세요.


> 학생 테이블이 있고
> 학생이 수강하는 강의의 이름

> 학생 테이블
> 수강 테이블

학생 테이블은 id 식별자를 하나 만들고 이름을 하나 만들어야할거같아 필드로
수강 테이블은 과정명 과목 학생의 아이디가 하나 매핑을 위해서 필요한거 같아.

자동 증가
학생 테이블의 필드 : id int auto_increment primary key, 이름 varchar(10),
수강 테이블의 필드 : class varchar(20), study varchar(20), 학생 id int

> 관계성의 기호 : 부모의 테이블에 관계성을 가지고 있는 키에는 || 표현 기호가 붙는다 무모의 테이블에 필수 기호
> 1 : 1  1대1 선으로 표현을하고   [] -|----------|-[]
> 1 : N  관계                   [] -|---|-------|< []
                                        |--------|< []
> M : N  관계 


```sql
CREATE TABLE student {
    id int auto_increment primary key
    name varchar(10)
}

create table student_class {
    class varchar(20), 
    study varchar(20),
    student_id int 
}

-- 유저 가입
insert into student values("soon")

-- 수강 신정
insert into student_class values('game', 'game1', 1)

--- LEFT JOIN

SELECT * from [tablename1] left join [tablename2] on [tablename1].id = [tablename2].student_id

select * from left join student_class on student.id = student_class.student_id;

--- join 의 종류
inner join : 공통된 내용 즉 공통된 데이터만 조회를 하는것

left join : 왼쪽에 작성한 어휘적으로 왼쪽에 작성한 테이블의 데이터를 유지하고 오ㅡㄴ쪽의 테이블의 내용으로 조회

right join : 오른쪽에 작성한 어휘적으로 오른쪽에 작성한 테이블의 데이터를 유지하고 조건이 맞는 왼쪽의 테이블의 내용을 조회
full join : 두 테이블에 있는 모든 내용을 조회

cross join : 모든 가능한 조합의 결과를 조회 (카타시안 곱)

self join : 같은 테이블에서 (대댓글 할떄 사용하는거 )
```