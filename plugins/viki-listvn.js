/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const fs = require('fs')
let handler = async (m, { conn }) => {
  let files = fs.readdirSync('./viki-audio')
  if (!files.length) {
    conn.reply(m.chat, 'Tidak ada audio/voice note yang tersimpan', m)
    return
  }
  let vnList = files.filter(file => file.endsWith('.opus')).map(file => `◦ ${file.replace('.opus', '')}`).join('\n')
  let caption = 'List Audio/Voice Note:\n\n' + vnList
  conn.reply(m.chat, caption, m)
}
handler.help = ['listvn']
handler.tags = ['tools']

handler.command = /^listvn$/i

module.exports = handler