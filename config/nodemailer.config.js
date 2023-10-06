const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'dillafadila11@gmail.com',
    pass: '11Februari',
  },
});

module.exports = transporter;
