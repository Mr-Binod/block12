




create table users (
    name varchar(10),
    age int
)

create index indx_users_age on users (age);

show index from users;

-- btree 기반에 index 알고리즘으로 실행 됩니다

-- mysql 의 외부 csv 파일은 지정된 접근 경로에 있는 파일을 업로드 할수 있다.

show GLOBAL VARIABLES LIKE 'local_infile';

SET GLOBAL local_infile=On;
show VARIABLES LIKE 'secure_file_priv';

-- C:\ProgramData\MySQL\MySQL Server 8.0\Uploads\
CREATE TABLE student(
    id INT PRIMARY KEY, 
    name varchar(100), 
    email varchar(100),
    age int,
    class varchar(20)
    );
LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/student.csv' 
INTO table student
FIELDS TERMINATED by ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;


select * from student;
## 전체를 조회하는 쿼리 full scan
## id 기본키를 가지고 조회가 일어난것
## index 가 되어 있다면 전체 조회할때 데이터를 좀거 빠르데 조회할수 있다.
## index 를 사용하는 목적은 조건에 맞는 데이터를 빠르게 조회하기 위해서

EXPLAIN select * from student WHERE class='blockchain';
select * from student WHERE class='  story';

# 데이터의 값이 많고 조회
## 조회하는 값이 숫자가 아니고 문자는 사전적
EXPLAIN select * from student where name='Carmela74'  
#26ms

select * from student where age=25;
create index idx_student_name on student(name);
create index idx_student_email on student(email);


show index from student;
DROP index idx_student_name on student;
DROP index idx_student_name_email on student;
DROP Table student;

select * from student;
select name,email from student WHERE name=' Aiyana_Kohler';

select * from student WHERE email='Emilie66@hotmail.com';
select * from student WHERE email='Emilie66@hotmail.com';
#25ms
select * from student WHERE email='Gaetano33@gmail.com' AND name='Maximus.Leffler';

#26ms

### 인덱스를 설정한다는것이 즉 테이블의 데이터의 영역에 인덱스의 내용도 저장이 된다는 얘기
### 인덱스를 설정하면 추가적인 데이터도 저장이된다.
### 데이터가 추가되면 인덱스의 정보도 모두다 갱신한다. 그래서 즉 데이터 추가부분이 오버헤드 된다
### 인덱스를 설정하면 추가적인 데이터도 저장이 된다.


## multi column index
## 두가지 이상의 컬럼으로 유니크 인덱스 생성

create UNIQUE INDEX idx_student_name_email on student(name, email);

# 왼쪽 기준으로 선텍한 인덱스의 기준으로 인덱싱 된다

# email은 따로 인덱스가 필요하다.

# explain 조회할떄 사용한 인덱스의 값이 무엇인지

create index idx_student_email on student(email);

## mysql 에서 옵티마이저 sql 을 실행할떄 가장 효율적으로 실행할수 있는 방법을 결정
## 옵티마이저가 오류를 발생시킬수도 있을 경우가 있기때문에 확인을 잘 해보고 사용해야한다
## 이상한 인덱스를 사용하고 있는 경우

### mysql 에서 옵티마이저에세 인덱스를 제시
### 왼만하면 이 인덱스를 사용해라
SELECT * from student use index (idx_student_email) where email='Linwood.Kreiger11@hotmail.com';

### 효율적이지 않은데 말을 안듣는다
### 강제로 인덱스 사용을 하게할수 있다

select * from student FORCE INDEX(idx_student_email) WHERE email='Linwood.Kreiger11@hotmail.com'