/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) {
    conn.reply(m.chat, '*Example*: .github XyzenzKannaV1', m)
    return
  }
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let username = encodeURIComponent(text)
  let res = await fetch(`https://api.lolhuman.xyz/api/github/${username}?apikey=ayakaviki`)
  let json = await res.json()
  if (res.ok) {
    let message = `Username: ${json.result.name}\nBio: ${json.result.bio}\nLokasi: ${json.result.location}\nPerusahaan: ${json.result.company}\nRepositori publik: ${json.result.public_repos}\nPengikut: ${json.result.followers}\nMengikuti: ${json.result.following}`
    conn.sendFile(m.chat, json.result.avatar, 'avatar.jpg', message, m)
  } else {
    conn.reply(m.chat, `Terjadi kesalahan: ${json.message}`, m)
  }
}

handler.help = ['github <username>']
handler.tags = ['premium']
handler.command = /^github/i
handler.register = true
handler.premium = true
handler.limit = true

module.exports = handler