

const path = require('path');
require('dotenv').config(path.join(__dirname, '../env'));
const { DataTypes, Model} = require('sequelize');

console.log(process.env.DATABASE_HOST)

const Sequelize = require('sequelize');


const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD, {
        host : process.env.DATABASE_HOST,
        dialect : 'mysql'
    }
);

console.log(path.join(__dirname, '../env'))

sequelize.sync({force : false}).then(() => {
    console.log('database on~')
}).catch(console.log)