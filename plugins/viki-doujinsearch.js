/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let axios = require('axios')
let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) {
    conn.reply(m.chat, 'Silakan masukkan kata kunci pencarian doujinshi.', m)
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
    let response = await axios.get(`https://api.lolhuman.xyz/api/doujindesusearch?apikey=ayakaviki&query=${encodeURIComponent(text)}`)
    let result = response.data.result[0]
    let thumbnailBuffer = await (await fetch(result.thumbnail)).buffer()
    let caption = `
*Judul*: ${result.title}
*Jenis*: ${result.type}
*Link*: ${result.link}
`.trim()
    conn.sendFile(m.chat, thumbnailBuffer, 'doujin.jpg', caption, m)
  } catch (e) {
    conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan.', m)
    console.log(e)
  }
}

handler.help = ['doujinsearch <kata kunci>']
handler.tags = ['premium']
handler.premium = true
handler.command = /^doujinsearch$/i

module.exports = handler