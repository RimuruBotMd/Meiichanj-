/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */

const fs = require('fs')

let handler = async (m, { text }) => {
  if (!text) return m.reply('*Example*: .df plugins/kemii.js')
  if (fs.existsSync(text)) {
    let stat = fs.statSync(text)
    if (stat.isDirectory()) {
      fs.rmdirSync(text, { recursive: true })
      m.reply(`Berhasil menghapus folder ${text}`)
    } else {
      fs.unlinkSync(text)
      m.reply(`🐱 Successfully deleted the file ${text}`)
    }
  } else {
    m.reply(`Files or folders "${text}" not found.`)
  }
}

handler.help = ['df']
handler.tags = ['owner']
handler.owner = true
handler.command = /^\df/i

module.exports = handler