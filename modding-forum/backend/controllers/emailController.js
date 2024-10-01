// Import nodemailer
const nodemailer = require('nodemailer');

// Function to send confirmation email
exports.sendConfirmationEmail = async (to, subject, htmlContent) => {
  try {
    // Create transporter with your email service credentials
    let transporter = nodemailer.createTransport({
      service: 'gmail', // or another email service provider
      auth: {
        user: 'your-email@gmail.com', // your email
        pass: 'your-email-password'   // your email password (best to use env variables)
      }
    });

    // Email options
    let mailOptions = {
      from: '"ModMasters" <your-email@gmail.com>', // sender address
      to: to, // recipient's email
      subject: subject, // Subject line
      html: htmlContent // HTML body of the email
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
