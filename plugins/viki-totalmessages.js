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

const incrementSentCount = () => {
  totalSent++;
  saveMessageCount();
};

const incrementReceivedCount = () => {
  totalReceived++;
  saveMessageCount();
};

const saveMessageCount = () => {
  const messageData = {
    totalSent,
    totalReceived
  };
  const jsonData = JSON.stringify(messageData, null, 2);
  fs.writeFileSync(messageFilePath, jsonData);
};

if (!fs.existsSync(messageFilePath)) {
  saveMessageCount();
}

let handler = async (m, { client }) => {
  const isFromMe = m.fromMe;
  if (isFromMe) {
    incrementSentCount();
  } else {
    incrementReceivedCount();
  }
};

handler.command = null;
handler.before = (m, { client }) => {
  const isFromMe = m.fromMe;
  if (isFromMe) {
    incrementSentCount();
  } else {
    incrementReceivedCount();
  }
};

module.exports = handler;
