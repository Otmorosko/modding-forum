// backend/smtpConfig.js

const smtpConfigs = {
    'gmail.com': {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'your-gmail@gmail.com',
        pass: 'your-gmail-password'
      }
    },
    'wp.pl': {
      host: 'smtp.wp.pl',
      port: 465,
      secure: true,
      auth: {
        user: 'your-wp-email@wp.pl',
        pass: 'your-wp-password'
      }
    },
    // Dodaj więcej dostawców SMTP, jeśli potrzebujesz
    'yahoo.com': {
      host: 'smtp.mail.yahoo.com',
      port: 465,
      secure: true,
      auth: {
        user: 'your-yahoo-email@yahoo.com',
        pass: 'your-yahoo-password'
      }
    }
  };
  
  module.exports = smtpConfigs;
  