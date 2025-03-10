



use moon;

SHOW TABLES;


show DATABASES;

DROP TABLE user;

DESC user;

CREATE Table user( user_id VARCHAR(10) PRIMARY KEY NOT NULL ,
    user_pw VARCHAR(10) NOT NULL, user_n VARCHAR(10) NOT NULL, gender VARCHAR(6));

INSERT INTO user(user_id, user_pw, user_n) VALUES ('lee', '1233', 'mrpak1');

SELECT * FROM user;

UPDATE user SET user_id='kim' WHERE user_id='lee';

DELETE FROM user WHERE user_id='pak';

SELECT user_id, user_pw  FROM user WHERE user_id='pak3';