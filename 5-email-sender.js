const nodemailer = require('nodemailer');

// Create a transporter object with your email config
const transporter = nodemailer.createTransport({
  service: 'your-email-service',
  auth: {
    user: 'your-email@example.com',
    pass: 'your-email-password',
  },
});

// Define email options
const mailOptions = {
  from: 'your-email@example.com',
  to: 'recipient@example.com',
  subject: 'Test Email',
  text: 'Test email sent from Node.js',
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});