/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const axios = require('axios')

let handler = async (m, { text }) => {
  if (!text) throw '*Example*: .zodiak leo'
  
  let zodiac = text.trim().toLowerCase()
  let response = await axios.get(`https://api.lolhuman.xyz/api/zodiak/${zodiac}?apikey=ayakaviki`)
  
  let { result } = response.data
  let message = `Ramalan zodiak untuk ${zodiac.toUpperCase()} hari ini:\n\n${result}`
  
  m.reply(message)
}

handler.help = ['zodiak <zodiak>']
handler.tags = ['internet']
handler.register = true
handler.limit = true
handler.command = /^zodiak$/i

module.exports = handler