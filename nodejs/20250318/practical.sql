



create table ott(
    id varchar(20) PRIMARY KEY, 
    name VARCHAR(20) not null, 
    age VARCHAR(10) not NULL);

create table shop(
    itemid VARCHAR(20) PRIMARY KEY,
    item VARCHAR(50) NOT NULL,
    price int NOT NULL
    );
create table basket(
    id int AUTO_INCREMENT PRIMARY KEY, 
    videoname VARCHAR(20) not null, 
    price int(10) not NULL,
    orderid VARCHAR(20),
    shopid VARCHAR(20),
    constraint fk_order_id FOREIGN KEY (orderid) REFERENCES ott (id),
    constraint fk_shop_id FOREIGN KEY (shopid) REFERENCES shop (itemid)
    );
create table buy(
    id int AUTO_INCREMENT PRIMARY KEY, 
    videoname VARCHAR(20) not null, 
    showtime varchar(20) not NULL,
    orderid VARCHAR(20),
    constraint fk_order_id1 FOREIGN KEY (orderid) REFERENCES ott (id)
    );

insert into ott values('pak',"bing" ,"25");
insert into shop values('pak',"bing" ,"25");
insert into basket(videoname, price, orderid) values ('너의 미소', 10000, 'pak')

insert into buy(videoname, showtime, orderid) values ('나만의 곳', '19:00', 'pak')


select * from ott left join basket on ott.id = basket.shopid where
 ott.id = 'pak';





show tables;
desc basket;
SELECT * from buy;
drop table buy;
