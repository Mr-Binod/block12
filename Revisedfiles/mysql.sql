



mysqp -u root -p
show databases;
create database 데이터베이스 이름;
create schme 데이터베이스 이름;
drop database 데이터베이스 이름;

create database moon;
SHOW databases;
DESC moon;
SHOW TABLES;
SELECT * FROM moon;

mysql> show databases;


mysql> desc user;
+---------+-------------+------+-----+---------+-------+
| Field   | Type        | Null | Key | Default | Extra |
+---------+-------------+------+-----+---------+-------+
| user_id | varchar(10) | NO   | PRI | NULL    |       |
| user_pw | varchar(10) | NO   |     | NULL    |       |
| user_n  | varchar(10) | NO   |     | NULL    |       |
| gender  | varchar(6)  | YES  |     | NULL    |       |



use -- USE TABLE 
DESC --TABLE FEILD CHECK
SELECT user_id FROM user; -- view user_id from table user
SELECT * FROM user -- show all from user table
SELECT * FROM 'table name' ORDER BY 'field name' DESC  -- descending order
SELECT * FROM 'table name' ORDER BY 'field name' ASC   --   ascending ORDER BY


SHOW TABLES;

CREATE TABLE store(id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10)
    );
CREATE TABLE user(id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(10)
    );

SELECT * FROM user WHERE user_id='soon2' OR user_pw'123';
SELECT * FROM user WHERE user_id='soon2' AND user_pw'123';

INSERT INTO user(user_id, user_pw) VALUES ('soon', '1234');
SELECT user_id, user_pw FROM user;
UPDATE user SET user_id='soon' WHERE user_id='soon2', user_pw='moon123'
DELETE FROM user WHERE user id=1;
DROP TABLE store;

----------------------------------------------------------

SELECT * FROM user WHERE user_id LIke 's%'; --starts with s
SELECT * FROM user WHERE user_id LIke '%s'; --ends with s

ALTER TABLE user CHANGE user_name name VARCHAR(20);
ALTER TABLE user MODIFY name VARCHAR(30);
ALTER TABLE user DROP name;
ALTER TABLE user ADD name VARCHAR(10);


CREATE USER 'myid'@'localhost' IDENTIFIED BY 'hello123';
CREATE USER 'all'@'%' IDENTIFIED BY 'hello123';

GRANT ALL PRIVILEGES ON project.* TO 'myid'@'localhost';
GRANT ALL PRIVILEGES ON project.* TO 'all'@'%';
SHOW GRANTS FOR 'myid'@'localhost';
REVOKE ALL PRIVILEGES ON project.* FROM 'myid'@'localhost';
--모든 데이트베이스 권한 철회
DROP USER 'myid'@'localhost';

SELECT user,host FROM mysql.user;

FLUSH PRIVILEGES;

------------------------------------------------------------

SELECT * FROM student LEFT JOIN student_class on student.id = student_class.studentid;
SELECT * FROM student RIGHT JOIN student_class on student.id = student_class.studentid;

CREATE TABLE client (
    id VARCHAR(20) PRIMARY KEY,
    name VARCHAR(20),
    age VARCHAR(10)
    );

CREATE TABLE shop (
    id int AUTO_INCREMENT PRIMARY KEY,
    itemid VARCHAR(20),
    itemname VARCHAR(100),
    price INT(20),
    orderid VARCHAR(20),
    CONSTRAINT fk_orderid Foreign Key (orderid) REFERENCES client(id);
);

INSERT INTO shop(itemid, itemname, price, orderid) 
values ('asd12', '휴지', 10000, 'jung');

SELECT * FROM client LEFT JOIN shop on 
user.id = shop.orderid WHERE client.id = 'jung';

SELECT client.id as userid, shop.orderid FROM client LEFT JOIN shop on
client.id = shop.orderid where user.id = 'pak';

SET @CNT = 0;
UPDATE shop SET shop.id = @CNT:=@CNT+1;
ALTER TABLE shop AUTO_INCREMENT = 0;