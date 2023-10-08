const { Sequelize } = require('sequelize')
const mysql = require('mysql2')
const fs = require('fs')
const path = require('path')

const conn = new Sequelize("mysql://avnadmin:AVNS_oxuen7J32drJFXNfyb4@mysql-952c8d8-db-jayapura-31.aivencloud.com:26218/defaultdb?ssl-mode=REQUIRED", {
    ssl: fs.readFileSync(path.join(__dirname, 'ca (1).pem')),
    dialect: 'mysql',
    
  });


    
module.exports= conn;