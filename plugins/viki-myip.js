/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const axios = require('axios')

let handler = async (m, { conn }) => {
  try {
    const { data } = await axios.get('https://api.ipify.org')
    conn.reply(m.chat, `IP kamu adalah ${data}`, m)
  } catch (e) {
    conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan.', m)
    console.log(e)
  }
}

handler.help = ['myip']
handler.tags = ['internet']
handler.command = /^myip$/i
handler.owner = true;
handler.register = true
handler.limit = true

module.exports = handler