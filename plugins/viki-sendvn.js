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
  let audioFolder = './viki-audio'
  let audioName = `${text}.opus`
  let audioPath = path.join(audioFolder, audioName)

  if (!fs.existsSync(audioPath)) {
    let audioFiles = fs.readdirSync(audioFolder)
    let audioFile = audioFiles.find(file => file.toLowerCase() === audioName.toLowerCase())
    if (!audioFile) return conn.reply(m.chat, `🐱 Audio by name ${text} not found.`, m)
    audioName = audioFile
    audioPath = path.join(audioFolder, audioName)
  }

  let audioBuffer = fs.readFileSync(audioPath)
  conn.sendFile(m.chat, audioBuffer, audioName, '', m)
}

handler.help = ['send <nama_audio>']
handler.tags = ['fun']
handler.command = /^send$/i

module.exports = handler