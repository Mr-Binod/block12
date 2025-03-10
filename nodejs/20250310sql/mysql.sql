



# 테이블 생성
# 상품 테이블 상품 이름

# 테이블 조회

SHOW TABLES;

# 테이블 생성 (엑셀 파일 하나 생성)
-- CREATE TABLE tablename( fieldname type option, 필드명 타입 옵션)


# auto_increment 값을 추가하지 않아도 자동으로 증가 시키는 옵션
# 값을 임의 로 저장할수 없다
# primary key 기본키 고유 식별자로 사용할 키 값이다
# 1 2 3 4 5 6 7 데이터베이스 검색 엔진에서 값을 효율적올 찾을때 사용된다
# `인덱싱 중요 백엔드 쉬운데 필수 개념` 


CREATE TABLE store( 
    id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(10)
    );

### 테이블의 필드명 확인
-- mysql> use moon
-- Database changed
-- mysql> show tables;
-- +----------------+
-- | Tables_in_moon |
-- +----------------+
-- | store          |
-- +----------------+
-- 1 row in set (0.00 sec)

-- mysql> DESC store

--     -> ;
-- +-------+-------------+------+-----+---------+----------------+
-- | Field | Type        | Null | Key | Default | Extra          |
-- +-------+-------------+------+-----+---------+----------------+
-- | id    | int         | NO   | PRI | NULL    | auto_increment |
-- | name  | varchar(10) | YES  |     | NULL    |                |
-- +-------+-------------+------+-----+---------+----------------+


DESC user; -- feild 확인

### 테이블 값 추가
-- INSERT INTO store( name, age, data ) VALUES ("상품 1", 1 , 2)
INSERT INTO store( name ) VALUES ("상품 1");

### 값 조회
## * wildcard 모등 내용에서 찾겠다
SELECT * FROM store; 

SELECT * FROM user; 

### soon2 라는 값이 테이블에 저장되어 있는 조회
### where 조건문을 사용해서 원하는 값이 포함된 필드의 값을 찾아서 조회한다
### where 조건문에 같이 사용할수 있는 옵션 구문 AND 와 OR
SELECT * FROM user WHERE user_id='soon2' OR user_pw'123';
SELECT * FROM user WHERE user_id='soon2' AND user_pw'123';


### 유저 정보 테이블
### DATETIME 날짜 타입을 선언하는데 옵셩으로 기본값 설정
### now() 함수가 SQL 문 실행할때 포함되어 있고 now() 녕도 날짜 시간의 내용을 생성해준다

CREATE Table user( id int AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(10) NOT NULL, 
    user_pw VARCHAR(10) NOT NULL, 
    data DATETIME DEFAULT now());

show TABLES;

drop Table store;
drop Table user;

### update
### SET 값을 할당하는 옵션
UPDATE user SET user_pw='admin123', user_id='soon5' WHERE user_id='soon4'

### 삭제

DELETE FROM user where id=4;

### create
INSERT INTO user(user_id, user_pw) VALUES ( 'soon', '1234' );

### read
### * 부분
### select 조회할 테이블의 필드명 from 테이블 이름

SELECT user_id, user_pw FROM user;



## 기본 키값이 없어
### 고유 식별자가 없다
### 고유 식별자는 하나의 테이블에 하나의 필드만 존재할수 있다  primary key
### 유니크 키는 테이블의 여러개의 필드를 생성할수 있다. unique key
### 검색이 조회가 빈번하게 일어나지 않는 테이블은 기본키가 없이 만드는게 더 효율적이다
### 데이터의 생성이 많이 일어난다 그럼 기본키를 생성하게 되면은 데이터를 추가하는 속도가 느려진다

DESC user;


## 테이블의 쿼리 내용 요약 

# 모든 테이블의 조회

SHOW TABLES;

# 데이터베이스 사용

use  [데이터베이스 이름];

# 데이터베이스 테이블의 필드 확인

DESC [테이블 이름];

# 테이블의 선택 값 조회

SELECT * FROM [테이블 이름];

# 테이블의 선택 값 조회
SELECT [필드명, 필드명2] FROM [table name];

# 테이블 값을 조회할때 오름차순 내림차순

SELECT * FROM [table name] ORDER BY [field name] DESC  -- descending order
SELECT * FROM [table name] ORDER BY [field name] ASC   -- ascending ORDER BY



### 유저의 회원 정보로 가입했을때 저장할 테이블을 만들어 주세요
### 테이블의 이름은 user 로 해주시고
### 저장할 유저의 데이터는 유저 아이디와 비밀번호 닉네임 성별 생성시간
### 유저의 아이디는 문자열 비밀번호는 문자열 닉네임은 문자열 성별도 문자열 생성시간 타임스템프 DATE type
### 유저의 아이디는 고유한 식별자로 만들어주세요
### 유저의 아이디와 비밀번호과 닉네임은 값이 입력이 안되면 암되고 성별은 입력이 안되어도 된다.
### 시간은 입력받지말고 기본 값 설정
### 아이디로 조회를 하면 해당 유저의 비밀번호를 조회해주세요.