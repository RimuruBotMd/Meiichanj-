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
    conn.reply(m.chat, '*Example*: .jadwalsholat Yogyakarta', m)
    return
  }
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let city = encodeURIComponent(text)
  let res = await fetch(`https://api.lolhuman.xyz/api/sholat/${city}?apikey=ayakaviki`)
  let json = await res.json()
  if (res.ok) {
    let message = `Jadwal sholat di ${json.result.wilayah}\n\nImsak: ${json.result.imsak}\nSubuh: ${json.result.subuh}\nDzuhur: ${json.result.dzuhur}\nAshar: ${json.result.ashar}\nMaghrib: ${json.result.maghrib}\nIsya: ${json.result.isya}`
    conn.reply(m.chat, message, m)
  } else {
    conn.reply(m.chat, `Terjadi kesalahan: ${json.message}`, m)
  }
}

handler.help = ['jadwalsholat']
handler.tags = ['islam']
handler.register = true
handler.limit = true
handler.command = /^jadwalsholat/i

module.exports = handler