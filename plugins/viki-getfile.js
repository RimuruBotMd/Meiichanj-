/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const fs = require('fs')
const path = require('path')

let handler = async (m, { conn, text }) => {
  if (!text) throw '*Example*: .gf server.js'

  let fileName = text.trim().toLowerCase()
  let filePath = path.join(__dirname, '..', fileName + '.js')
  if (!fs.existsSync(filePath)) {
    throw `The file ${fileName}.js does not exist!`
  }

  let fileContent = fs.readFileSync(filePath, 'utf-8')
  conn.reply(m.chat, fileContent, m)
}

handler.help = ['gf / *filename*']
handler.tags = ['tools']
handler.owner = true
handler.command = /^gf$/i

module.exports = handler