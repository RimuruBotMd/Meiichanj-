/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let axios = require('axios')

let handler = async (m, { conn, text }) => {
  if (!text) {
    conn.reply(m.chat, '*Example*: .nhentai 277xxxx', m)
    return
  }
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  try {
    let response = await axios.get(`https://api.lolhuman.xyz/api/nhentai/${text}?apikey=ayakaviki`)
    let result = response.data.result
    let tags = result.tags.map(tag => `#${tag}`).join(' ')
    let caption = `
*Judul*: ${result.title_romaji}
*Judul Asli*: ${result.title_native}
*Tags*: ${tags}
*Link Baca*: ${result.read}
`.trim()
    conn.sendFile(m.chat, result.image[0], 'nhentai.jpg', caption, m)
  } catch (e) {
    if (e.response && e.response.status == 404) {
      conn.reply(m.chat, `🐱 Doujinshi with codes ${text} not found.`, m)
    } else {
      conn.reply(m.chat, 'An error occurred while processing the request.', m)
      console.log(e)
    }
  }
}

handler.help = ['nhentai <kode>']
handler.tags = ['premium']
handler.premium = true
handler.command = /^nhentai$/i

module.exports = handler