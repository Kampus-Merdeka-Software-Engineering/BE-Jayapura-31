//const { Sequelize } = require('sequelize');

//const { Sequelize } = require("sequelize");

 //Replace 'your-database-name', 'your-username', and 'your-password' with your actual database details
//const sequelize = new Sequelize('DB-Jayapura-31', 'avnadmin', 'AVNS_oxuen7J32drJFXNfyb4', {
 //host: 'jayapura31',
 //dialect: 'mysql', // Adjust to your database type (e.g., 'mysql', 'postgres', 'sqlite')
//});

//module.exports = sequelize;

const { Sequelize } = require('sequelize')
const mysql = require('mysql2')
const fs = require('fs')
const path = require('path')

const conn = new Sequelize("mysql://avnadmin:AVNS_oxuen7J32drJFXNfyb4@mysql-952c8d8-db-jayapura-31.aivencloud.com:26218/defaultdb?ssl-mode=REQUIRED", {
    ssl: fs.readFileSync(path.join(__dirname, 'ca (1).pem')),
    dialect: 'mysql',
    
  });


    
module.exports= conn;