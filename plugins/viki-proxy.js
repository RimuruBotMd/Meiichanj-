/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let fetch = require('node-fetch')

let handler = async (m, { text }) => {
  let msg = text.trim()
  if (!msg) return m.reply('*Example*: .proxy kemii.my.id')

	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = await fetch(`https://api.lolhuman.xyz/api/proxysite?apikey=ayakaviki&url=${encodeURIComponent(msg)}`)
  let json = await res.json()

  if (json.status == 200 && json.result) {
    m.reply(json.result)
  } else {
    m.reply('🐱 Failed to proxy on the given link.')
  }
}

handler.help = ['proxy <link>']
handler.tags = ['internet']
handler.command = /^proxy$/i

module.exports = handler