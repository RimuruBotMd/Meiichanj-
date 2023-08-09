/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
  if (!args[0]) {
    return conn.reply(m.chat, 'Please enter the Instagram post link that you want to download', m)
  }
  let apikey = 'ayakaviki'
  let url = `https://api.lolhuman.xyz/api/instagram2?apikey=${apikey}&url=${args[0]}`
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = await fetch(url)
  let json = await res.json()
  if (json.status !== 200) {
    return conn.reply(m.chat, 'Sorry, there was an error fetching data from the server', m)
  }
  let result = json.result
  let caption = `*${result.account.full_name} (@${result.account.username})*\n`
  caption += `Caption : ${result.caption}`
  for (let media of result.media) {
    let response = await fetch(media)
    let buffer = await response.buffer()
    conn.sendFile(m.chat, buffer, 'instagram2.jpg', caption.trim(), m)
  }
}

handler.help = ['ig2 <link>']
handler.tags = ['downloader']
handler.register = true
handler.limit = true
handler.command = /^(ig2|instagram2)$/i

module.exports = handler