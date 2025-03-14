

const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');
require('dotenv').config();


const sqlpool = mysql.createPool({
    user : process.env.Dbuser,
    password : process.env.Dbpassword,
    database : process.env.Dbdatabase,
    host : process.env.Dbhost,
    port : process.env.Dbport,
    multipleStatements : true
})

sqlpool.getConnection((err) => {
    console.log(err, 'asd')
})
// sqlpool.query('create table crud(uid varchar(10) not null')
// console.log('a')
const Tableinit = async () => {
    try {
        const data = await sqlpool.query('select * from crud;')
        // console.log()
    } catch (error) {
        const data = await sqlpool.query('create table crud(id int auto_increment primary key, uname varchar(15) not null, nick varchar(15) not null, uid varchar(15) not null, upw varchar(128) not null,gender varchar(10), imgpath varchar(128));')
        console.log('table created')
        return error

    }
}
Tableinit();

const Createuser = async (uname,nick,uid,upw,gender,imgpath) => {
    try {
        const data = sqlpool.query('insert into crud(uname,nick,uid,upw,gender,imgpath) values (?,?,?,?,?,?)',[uname,nick,uid,upw,gender,imgpath])
        console.log('success')
        return {state : 200, message : 'signup successful'};
    } catch (error) {
        return error;
    }
}

const Login = async (uid) => {
    try {
        const [[data]] = await sqlpool.query('select * from crud where uid=?',[uid])
        console.log('asdffff')
        
        return data;
    } catch (error) {
        console.log(error)
        return error;
    }
}


const Checkid = async (uid) => {
    try {
        const [data] = await sqlpool.query('select uid from crud where uid=?', [uid])
        return data;
    } catch (error) {
        return error;
    }
}


module.exports = {Createuser, Checkid, Login}