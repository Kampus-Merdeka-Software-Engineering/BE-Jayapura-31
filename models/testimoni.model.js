const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');


const Testimoni = sequelize.define('testimoni', {
    nama_lengkap: {
        type: DataTypes.STRING,
    },
    pilih_layanan: {
        type: DataTypes.TEXT,
    },
    review: {
        type: DataTypes.TEXT,
    },
});

module.exports = Testimoni;