const Konseling = require('./konseling.model');
const Testimoni = require('./testimoni.model');

Testimoni.belongsTo(Konseling, { foreignKey: 'Gmail' });

module.exports = { Testimoni, User };