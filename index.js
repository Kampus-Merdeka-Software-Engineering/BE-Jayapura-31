const express = require('express');
const sequelize = require('./config/db.config');
const app = express();
const port = process.env.PORT || 3000;
const testimoniRoute = require('./routes/testimoni.routes');
const konselingRoute = require('./routes/konseling.routes');

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then(() => {
    console.log('Database synced successfully');
  }).catch((error) => {
    console.error('Error syncing database:', error);
  });

app.get('/', (req, res) => {
    res.send('Welcome To TalkSpace !');
});

app.use('/api/testimoni', testimoniRoute);
app.use('/api/konseling', konselingRoute);

app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));
