/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const nodemailer = require('nodemailer');
const config = require('../config.json');

let handler = async function(m, { text, usedPrefix }) {
  if (!text) throw `*Example*: ${usedPrefix}email hi@kemiidenpai.me | halo kemii`;
  let email = text.trim().split(/\s+\|\s+/).shift();
  let message = text.trim().split(/\s+\|\s+/).pop();
  if (!isValidEmail(email)) throw 'Invalid email format';
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.email,
      pass: config.password
    }
  });
  let mailOptions = {
    from: config.email,
    to: email,
    subject: config.email_subject,
    html: `
      <div style="border: 1px solid #ccc; padding: 20px; font-family: monospace;">
        <p style="font-size: 16px; margin-bottom: 20px;">${message}</p>
        <div style="text-align: center; font-family: monospace;">
          <hr style="display: inline-block; margin-top: 20px; margin-bottom: 20px; width: 60%;">
          <p style="font-size: 12px; display: inline-block;">🐱 2008 - 2023 Sazumi Viki</p>
        </div>
      </div>
    `
  };
  try {
    await transporter.sendMail(mailOptions);
    m.reply('🐱 The email has been sent!');
  } catch (e) {
    console.log(e);
    m.reply('Failed to send email. Please try again later');
  }
};

handler.help = ['email'];
handler.tags = ['owner'];
handler.owner = true;
handler.command = /^(email|mail)$/i;

module.exports = handler;

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}