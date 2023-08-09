/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let axios = require('axios')

let handler = async (m, { text }) => {
  if (!text) throw '*Example*: .apkdl com.whatsapp'
  let res = await axios.get(`https://api.lolhuman.xyz/api/apkdownloader?apikey=ayakaviki&package=${encodeURIComponent(text)}`)
  if (!res.data.result) {
    return m.reply(`Sorry, apps with package name *${text}* not found.`)
  }
  let apk = res.data.result
  let caption = `
*App name:* ${apk.apk_name}
*Version:* ${apk.apk_version}
*Developer:* ${apk.apk_author}
  `.trim()
  conn.chatRead(m.chat)
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  })
  m.reply(`Sending ${apk.apk_name}...\nPlease wait a moment`)
  conn.sendFile(m.chat, apk.apk_link, `${apk.apk_name}.apk`, caption, m)
}

handler.help = ['apkdl <nama aplikasi>']
handler.tags = ['downloader']
handler.command = /^apk(dl|download)$/i
handler.limit = true

module.exports = handler