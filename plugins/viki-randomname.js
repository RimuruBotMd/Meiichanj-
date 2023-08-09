/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let fetch = require('node-fetch')

let handler = async(m, { conn, usedPrefix }) => {
  m.reply('Wait a moment..')
  let res = await fetch('https://api.lolhuman.xyz/api/random/people?apikey=ayakaviki')
  let json = await res.json()

  let name = json.result.name.first + " " + json.result.name.last
  let gender = json.result.gender
  let address = json.result.location.street.number + " " + json.result.location.street.name + ", " + json.result.location.city + ", " + json.result.location.state + ", " + json.result.location.country
  let age = null
  let email = null
  let phone = null
  let cell = null
  let picture = null

  let caption = `• Nama: ${name}\n• Jenis Kelamin: ${gender}\n• Alamat: ${address}`

  conn.reply(m.chat, caption, m)
}

handler.help = ['nama']
handler.tags = ['fun']
handler.command = /^nama$/i
handler.register = true
handler.limit = true

module.exports = handler