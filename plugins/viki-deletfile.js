/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let fs = require('fs')
let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, '*Example*: .df plugins/kemii.js', m)
  let path = require('path')
  let filePath = path.join(process.cwd(), text)
  if (!fs.existsSync(filePath)) {
    return conn.reply(m.chat, 'Sorry, the file or folder in question was not found.', m)
  }
  if (fs.statSync(filePath).isDirectory()) {
    fs.rmdirSync(filePath, { recursive: true })
  } else {
    fs.unlinkSync(filePath)
  }
  conn.reply(m.chat, `🐱 Successful delete ${text}`, m)
}
handler.help = ['df *<name file / folder>*']
handler.tags = ['owner']
handler.owner = true
handler.command = /^(df|deletefile)$/i

module.exports = handler