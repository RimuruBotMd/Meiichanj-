/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const fetch = require('node-fetch')

let handler = async (m, { text }) => {
  if (!text) return conn.reply(m.chat, '*Example*: .underwater Sazumi Viki', m)
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let apikey = 'ayakaviki'
  let url = `https://api.lolhuman.xyz/api/photooxy1/underwater?apikey=${apikey}&text=${encodeURIComponent(text)}`
  let image = (await (await fetch(url)).buffer()).toString('base64')
  conn.sendFile(m.chat, `data:image/jpeg;base64,${image}`, 'underwater.jpg', '', m)
}

handler.help = ['underwater <teks>']
handler.tags = ['maker']
handler.command = /^underwater$/i
handler.register = true
handler.limit = true

module.exports = handler