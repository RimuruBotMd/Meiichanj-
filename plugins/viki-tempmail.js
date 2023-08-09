/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */

const axios = require('axios');

let handler = async (m, { text, conn }) => {
  if (!text) throw '*Example:* .tempmail kemiidenpai';

  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    },
  });

  try {
    const res = await axios.get(`https://api.itsrose.life/tools/tempMail/new?name=${text}&apikey=${global.rose}`);
    const result = await res.data;
    const { status, message } = result;


    if (status) {
      let email = result.email
      let msg = `${email}`;
      m.reply(msg);
    } else {
      console.log(message);
      throw '🐱 Failed to generate temporary email name address.';
    }
  } catch (e) {
    console.log(e);
    throw '🐱 Failed to generate temporary email address.';
  }
};

handler.help = ['tempmail'];
handler.tags = ['tools'];
handler.command = /^tempmail$/i;

module.exports = handler;