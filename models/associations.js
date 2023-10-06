const Konseling = require('./konseling.model');
const Testimoni = require('./testimoni.model');

Testimoni.belongsTo(Konseling, { foreignKey: 'nama_lengkap' });

module.exports = { Testimoni, User };