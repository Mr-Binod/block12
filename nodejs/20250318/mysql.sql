




CREATE TABLE student (
    id int auto_increment primary key,
    name varchar(10)
)

create table student_class (
    class varchar(20), 
    study varchar(20),
    student_id int 
)

-- 유저 가입
insert into student(name) values("soon")

-- 수강 신정
insert into student_class values('game', 'game1', 4)

-- 학생을 조회하는데
SELECT * from [tablename1] left join [tablename2] on [tablename1].id = [tablename2].student_id

select * from student left join student_class on student.id = student_class.student_id;
select * from student right join student_class on student.id = student_class.student_id;


select * from student;
select * from student_class;


-- 쇼핑몰
-- 유저가 가입을 할수 있고 상품을 주문할수 있어요.
-- 사용자가 주문정보는 id name order_id
-- 유저는 id name

--- 유저가 있어야 상품을 주문할수 있다.
--- 유저 테이블, 상품 테이블
--- 1 : N 관계로 유저와 주문 테이블을 


create table user (id varchar(20) PRIMARY KEY , name varchar(20))

create table user_order(
    id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20), 
    order_id VARCHAR(20), 
    constraint fk__orser_id FOREIGN KEY (order_id) REFERENCES user (id)
    -- constrain 필드에서 제약조건으로 사용할 필드를 지정하고 외래키를 생성 REFERENCES 부모테이블의 어떤 키를 주시할거냐??
    )

show tables;
drop table user;

-- 외래키를 사용해서 제얏조건으로 해당 유저가 있을 경우 데이터를 추가할수 있는 테이블을 생성한것
-- 제약 조건이 걸렸다
-- 해당 부모의 테이블에 맞는 타갯의 아이디값을 찾지 못했다
-- insert into user_order (name, order_id) values ('멕북', 'soon');

-- 유저가 있다면 주문이 가능할까?
-- 유저 생성
insert into user values ('kim', 'bing')

SELECT * FROM user;
SELECT * FROM user_order;
-- 생성된 유저가 상품을 주문
insert into user_order (name, order_id) values ('자전거', 'kim');

-- 유저가 주문한 정보까지 필요해

-- 단순히 유저의 테이블만 조회하는게 아니고
-- 주문하는 테이블도 조회가 필요하다

--- 이렇게 하면 가능은 한데 비효율적이다 . 쿼리요청이 두번 들어간다

--- 관게성이 있는 테이블은 join 을 쓸만하지
SELECT * FROM user left join user_order on user.id = user_order.order_id where user.id = 'kim';

SELECT user.id as user_id, user.name, user_order.order_id FROM user left join user_order 
on user.id = user_order.order_id where user.id = 'kim';



-- 별칭
-- 주문

-- OTT 웹페이지를 만들고싶어
-- 구독이 없는 OTT 영상을 하나하나 구매해야한다
-- 유저는 장바구니에 OTT 사고싶은걸 찜해둘수 있다
-- 유저가 구매한 OTT 의 내용도 볼수 있다
-- 유저가 회원가입할떄는 이름과 나이
-- 장바구니에서 보여줄 영상의 정보는 이름과 가격
-- 구매한 목록에서 보여져야할 OTT 영상의 내용은 이름 상영시간 (showtime)

1. 요구사향 분석
-- 페이지가 어떻게 동작하고 어떤 내용이 필요한 페이지인지 요구사항 분석

2. 필요한 테이블 설계
-- 데이터를 저장할 테이블을 설계 - > ENFORCED

3. 테이블에 필요한 필드 설계
-- 필드들의 데이터타입을 어떻게 설계할지

4. 데이터베이스 생성
-- 관계성 확인