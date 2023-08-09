/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const axios = require('axios')

let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, '*Example*: .apk whatsapp', m)
  	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  const res = await axios.get(`https://api.lolhuman.xyz/api/playstore?apikey=ayakaviki&query=${encodeURIComponent(text)}`)
  const data = res.data.result[0]
  if (!data) return conn.reply(m.chat, `Tidak dapat menemukan aplikasi dengan nama "${text}" di Play Store.`, m)
  let caption = `
*${data.title}*
*ID*: ${data.appId}
*Developer*: ${data.developer}
*Price*: ${data.free ? 'Gratis' : data.price + ' ' + data.currency}
*Rating*: ${data.scoreText}
*Link*: ${data.url}
  `
  conn.sendFile(m.chat, data.icon, 'playstore.png', caption, m)
}

handler.help = ['apk <nama aplikasi>']
handler.tags = ['internet']
handler.command = /^apk$/i

module.exports = handler