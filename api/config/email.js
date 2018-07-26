// The mailtrup.io credentials is used as a fallback
const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.mailtrap.io',
  port: process.env.SMTP_PORT || 2525,
  auth: {
    user: process.env.SMTP_USER || 'da503a5695295e',
    pass: process.env.SMTP_PASS || 'b1c2355e6b6be4',
  },
};

const mailOptions = {
  from: '"Todo notification" <no-reply@todo.com>',
  to: process.env.EMAIL_TO || 'bar@example.com',
  subject: 'Todo remainder',
};

module.exports = {
  emailConfig,
  mailOptions,
};
