

```SQL

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
+--------------------+
| Database           |
+--------------------+
| information_schema |
| moon               |
| mysql              |
| performance_schema |
| sys                |
+--------------------+

mysql> show tables;
+----------------+
| Tables_in_moon |
+----------------+
| user           |
+----------------+

mysql> SELECT * FROM store;
+----+--------+
| id | name   |
+----+--------+
|  1 | 상품 1 |
+----+--------+

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


-- mysql> use moon
-- Database changed
-- mysql> show tables;
-- +----------------+
-- | Tables_in_moon |
-- +----------------+
-- | store          |
-- +----------------+
-- 1 row in set (0.00 sec)
```