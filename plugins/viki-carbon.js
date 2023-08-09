/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const fetch = require('node-fetch')

let handler = async (m, { text }) => {
  if (!text) return conn.reply(m.chat, 'Masukan kode kak, contoh: .carbon print("Kemii.Denpai")', m)
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let apikey = 'ayakaviki'
  let url = `https://api.lolhuman.xyz/api/carbon?apikey=${apikey}&code=${encodeURIComponent(text)}&language=python`
  let image = (await (await fetch(url)).buffer()).toString('base64')
  conn.sendFile(m.chat, `data:image/jpeg;base64,${image}`, 'carbon.jpg', '', m)
}

handler.help = ['carbon <kode>']
handler.tags = ['maker']
handler.command = /^carbon$/i
handler.limit = true

module.exports = handler