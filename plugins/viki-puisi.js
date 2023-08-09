/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const fetch = require('node-fetch');

let handler = async (m, { conn }) => {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  try {
    let res = await fetch('https://api.lolhuman.xyz/api/random/puisi?apikey=ayakaviki')
    let json = await res.json()
    if (json.status !== 200) {
      throw json
    }
    let { result } = json
    conn.reply(m.chat, result, m)
  } catch (e) {
    conn.reply(m.chat, 'An error occurred while processing the request.', m)
    console.log(e)
  }
}

handler.help = ['puisi']
handler.tags = ['internet']
handler.command = /^puisi$/i
handler.register = true
handler.limit = true

module.exports = handler