// server.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/mail', (req, res) => {
  const { name, email, message } = req.body;

  // Configure the SMTP transporter (Nodemailer)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'mayarmohamed775@gmail.com', // Your email address
      pass: 'mayar_mohamed33', // Your email password
    },
  });

  const mailOptions = {
    from: email,
    to: 'mayarmohamed775@gmail.com', // Specific email address to receive messages
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
