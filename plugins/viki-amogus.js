/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw '*Example*: .amongus sazumiviki'
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.lolhuman.xyz/api/amongus?apikey=ayakaviki&text=${response[0]}`
  conn.sendFile(m.chat, res, 'amongus.jpg', `Nih kak`, m, false)
}
handler.help = ['amongus'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(amongus)$/i
handler.register = true
handler.limit = true

module.exports = handler