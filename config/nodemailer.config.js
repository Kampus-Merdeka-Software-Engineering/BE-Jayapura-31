const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'talkspace34@gmail.com',
    pass: 'ecukiubcupgutgaz',
  },
});

module.exports = transporter;
