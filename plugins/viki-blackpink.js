/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let axios = require('axios')

let handler = async (m, { conn }) => {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  try {
    let response = await axios.get('https://api.lolhuman.xyz/api/random/blackpink?apikey=ayakaviki', { responseType: 'arraybuffer' })
    let buffer = Buffer.from(response.data, 'binary')
    conn.sendFile(m.chat, buffer, 'blackpink.jpg', '', m)
  } catch (e) {
    conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan.', m)
    console.log(e)
  }
}

handler.help = ['blackpink']
handler.tags = ['internet']
handler.command = /^blackpink$/i
handler.register = true
handler.limit = true

module.exports = handler
