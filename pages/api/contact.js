import { transporter, mailOptions } from "@/config/nodemailer";

export default async function handler(req, res) {
  if (req.method === 'POST') {
  const data = req.body;
  if (data.msg == '' || data.name == '' || data.email == '') {
    res.status(200).json({ message: 'Could not send empty form.' });
    return;
  }
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: 'Request',
      html: `<h1>Portfolio request message:</h1>
        <h3>From: ${data.name}</h1>
        <p>Email: ${data.email}</p>
        <p>Message: ${data.msg}</p>
        `,
    });

    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
}
}