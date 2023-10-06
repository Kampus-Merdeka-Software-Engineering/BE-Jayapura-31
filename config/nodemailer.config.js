const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'talkspace34@gmail.com',
    pass: 'talkspace2023',
  },
});

module.exports = transporter;
