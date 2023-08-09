/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let fetch = require('node-fetch')

let handler = async (m, {
	conn,
	args
}) => {
	if (!args[0]) {
		conn.reply(m.chat, `Silakan masukkan kode morse yang ingin diubah menjadi teks.`, m)
		return
	}
	let text = args.join(' ')
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
	let query = encodeURIComponent(text)
	let res = await fetch(`https://api.lolhuman.xyz/api/morse/decrypt?apikey=ayakaviki&text=${query}`)
	let json = await res.json()

	conn.reply(m.chat, json.result, m)
}

handler.help = ['morsetext <kode morse>']
handler.tags = ['tools']
handler.command = /^\morsetext/i
handler.register = true
handler.limit = true

module.exports = handler