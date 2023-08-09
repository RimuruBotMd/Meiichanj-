/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */



let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) {
    conn.reply(m.chat, `Silakan masukkan teks yang ingin diubah menjadi kode morse.`, m)
    return
  }
  m.reply('Tunggu sebentar...')
  let query = encodeURIComponent(text)
  let res = await fetch(`https://api.lolhuman.xyz/api/morse/encrypt?apikey=ayakaviki&text=${query}`)
  let json = await res.json()

  conn.reply(m.chat, json.result, m)
}

handler.help = ['textmorse <teks>']
handler.tags = ['tools']
handler.command = /^textmorse/i
handler.register = true
handler.limit = true

module.exports = handler