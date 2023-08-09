/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let handler = async (m, { conn, text }) => {
  if (!text) {
    return conn.reply(m.chat, '*Example*: .audiosurah 1', m)
  }
  let apikey = 'ayakaviki'
  let url = `https://api.lolhuman.xyz/api/quran/audio/${encodeURIComponent(text)}?apikey=${apikey}`
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  conn.sendFile(m.chat, url, 'audio.mp3', '', m, true)
}

handler.help = ['audiosurah']
handler.tags = ['islam']
handler.command = /^audiosurah$/i
handler.register = true
handler.limit = true

module.exports = handler