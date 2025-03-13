


show TABLES;

DROP TABLE user;

CREATE TABLE user(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(10) NOT NULL, 
    user_pw VARCHAR(10) NOT NULL, 
    user_name VARCHAR(10) NOT NULL, 
    create_at DATETIME DEFAULT now());

DESC user;

INSERT INTO user(user_id, user_pw, user_name) VALUES ('soon1', '123', 'pak');
INSERT INTO user(user_id, user_pw, user_name) VALUES ('aoon2', '123', 'pak');
INSERT INTO user(user_id, user_pw, user_name) VALUES ('aoon3', '123', 'pak');
INSERT INTO user(user_id, user_pw, user_name) VALUES ('soon4', '123', 'pak');
INSERT INTO user(user_id, user_pw, user_name) VALUES ('soon5', '123', 'pak');
INSERT INTO user(user_id, user_pw, user_name) VALUES ('soon6', '123', 'pak');

SELECT * FROM user;

SELECT * FROM user WHERE user_id LIKE 's%';   --    s% initial letter   %s last letter
SELECT * FROM user WHERE user_id LIKE '%s';   --    s% initial letter   %s last letter


ALTER TABLE user RENAME users;

DESC users;
ALTER TABLE users CHANGE user_name name VARCHAR(20);
ALTER TABLE users MODIFY name VARCHAR(30);
ALTER TABLE users DROP name;

ALTER TABLE users ADD name VARCHAR(10);

CREATE USER 'myid'@'localhost' IDENTIFIED BY '1994!BDs';
-- myid : 새로만드는 유저의 이름 
-- localhost : 새로 생성하는 유저가 커넥션 요청할수 있는 호스트

--모든 호스트에서 접속(connection)
CREATE USER 'myid'@'%' IDENTIFIED BY '1994!BDs';

-- 유저에세 데이터베이스 권한 부여
GRANT ALL PRIVILEGES ON moon.* TO 'myid'@'localhost';
GRANT ALL PRIVILEGES ON project.* TO 'myid'@'localhost';
-- all privileges 이건 모든 쿼리 접근을 허용하겠다.
-- select 나 insert 등 권한을 명시해서 사용하게 할수고 있다

-- 권한(authority) 리프레시 적용
FLUSH PRIVILEGES;

-- 권한 확인
SHOW GRANTS FOR 'myid'@'localhost';

-- 권한 철회
REVOKE ALL PRIVILEGES ON moon.* FROM 'myid'@'localhost';
REVOKE ALL PRIVILEGES ON project.* FROM 'myid'@'localhost';
REVOKE ALL PRIVILEGES ON *.* FROM 'myid'@'localhost'; -- 모든 데이트베이스 권한 철회

-- 유저 삭제
DROP USER 'myid'@'localhost';

 SELECT user, host FROM mysql.user; -- from 어디에서 값을 조회할거냐?
-- use mysql;
-- user 라는 테이블 접근

SELECT user, host From mysql.user