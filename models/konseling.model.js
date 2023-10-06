const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');


const Konseling = sequelize.define('konseling', {  
    nama_lengkap: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    nomor_whatsapp: {
        type: DataTypes.STRING,
    },
    usia: {
        type: DataTypes.STRING,
    },
    tanggal_konseling: {
        type: DataTypes.DATEONLY,
    },
    layanan: {
        type: DataTypes.TEXT,
    },
});

module.exports = Konseling;