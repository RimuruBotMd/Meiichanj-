/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const fetch = require('node-fetch')

let handler = async (m, { text }) => {
  if (!text) return conn.reply(m.chat, '*Example*: .wolflogo Kemii|Denpai', m)
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let apikey = 'ayakaviki'
  let url = `https://api.lolhuman.xyz/api/textprome2/wolflogo?apikey=${apikey}&text1=${encodeURIComponent(text.split('|')[0])}&text2=${encodeURIComponent(text.split('|')[1])}`
  let image = (await (await fetch(url)).buffer()).toString('base64')
  conn.sendFile(m.chat, `data:image/jpeg;base64,${image}`, 'wolflogo.jpg', '', m)
}

handler.help = ['wolflogo <text1>|<text2>']
handler.tags = ['maker']
handler.command = /^wolflogo$/i
handler.register = true
handler.limit = true

module.exports = handler