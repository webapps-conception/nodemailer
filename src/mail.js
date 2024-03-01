require('dotenv').config();
console.log("MAIL_SMTP=", process.env.MAIL_SMTP);
console.log("MAIL_PORT=", process.env.MAIL_PORT);
console.log("MAIL_USER=", process.env.MAIL_USER);
console.log("MAIL_PASS=", process.env.MAIL_PASS);

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_SMTP,
  port: process.env.MAIL_PORT,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"WAC 👻" <contact@webapps-conception.fr>', // sender address
    to: "contact@webapps-conception.fr, rudy.t54230@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <2ece3876-99a4-22e2-ff44-7f7d37079bb4@webapps-conception.fr>
}

main().catch(console.error);
