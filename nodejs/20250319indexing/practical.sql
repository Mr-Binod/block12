

create table user(
	userid varchar(20) primary key, 
    name varchar(20), 
    gender varchar(10));

insert into user(userid, name, gender) values ('bing', 'jojo', 'male');
select * from user;

create table userinfo(
	id int auto_increment primary key,
    userinfoid varchar(20),
	passportnum varchar(8),
    expirydate varchar(20),
    constraint fk_userinfo foreign key (userinfoid) references user (userid));
    
drop table userinfo;
insert into userinfo(userinfoid, passportnum, expirydate) values ('bing', 'as3231', '2028/08/02');
select * from userinfo;

create table reservation(
	id int auto_increment primary key,
    reservationid varchar(20),
    departure varchar(30),
    destination varchar(30),
    constraint fk_reservation foreign key (reservationid) references userinfo (userinfoid));

insert into reservation(reservationid, departure, destination) values ('bing', 'seoul','busan');
select * from reservation;

create table flightinfo(
	id int auto_increment primary key,
    flightinfoid varchar(20),
    seatnum varchar(10),
    airline varchar(10),
    constraint fk_inforeservation foreign key (flightinfoid) references reservation (reservationid));
    
insert into flightinfo(flightinfoid, seatnum, airline) values ('bing', 'A11', 'koreanair');
select * from flightinfo;

create table item(
	id int auto_increment primary key,
	orderid varchar(20),
    itemname varchar(20),
    price int,
    constraint fk_order1 foreign key (orderid) references reservation (reservationid));
drop table item;
insert into item(orderid, itemname, price) values ('bing', 'steak', '10000');
select * from item;
select * from user left join userinfo on user.userid = userinfo.userinfoid
	left join reservation on userinfo.userinfoid = reservation.reservationid left join 
    flightinfo on reservation.reservationid = flightinfo.flightinfoid left	join 
    item on reservation.reservationid = item.orderid where userid='bing';

select * from user;
desc user;
drop table user;
show tables;