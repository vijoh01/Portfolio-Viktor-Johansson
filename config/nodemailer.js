import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: email,
    pass: pass
  },
});



export const mailOptions = {
  from: "'Portfolio' notifier.portfolio@outlook.com",
  to: "vijoh01@gmail.com",
  subject: "Image test",
  html: `
    <h1>Hello world</h1>
    <p>Here's an image for you</p>`,
};