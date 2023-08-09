/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
* Catatan 2: total sent / erorr 
*/

const fs = require('fs');
const path = require('path');

let totalSent = 0;
let totalReceived = 0;
const messageFilePath = path.resolve(__dirname, '../sazumiviki-messages.json');

if (fs.existsSync(messageFilePath)) {
  const fileData = fs.readFileSync(messageFilePath);
  const messageData = JSON.parse(fileData);
  totalSent = messageData.totalSent || 0;
  totalReceived = messageData.totalReceived || 0;
}

let handler = async (m, { conn }) => {
  conn.chatRead(m.chat)
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  })
  const message = `🐱 Total Sent and Received Messages\n\n◦ Total Sent: *${totalSent} / Erorr*\n◦ Total Received: *${totalReceived}*`;
  m.reply(message);
};

handler.help = ['totalpesan'];
handler.tags = ['info'];
handler.command = /^totalpesan$/i;

module.exports = handler;