/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  let date = new Date().toLocaleDateString('en-US', {timeZone: 'Asia/Makassar'})
  let time = new Date().toLocaleTimeString('en-US', {timeZone: 'Asia/Makassar', hour: 'numeric', minute: 'numeric', hour12: true})
  let thanksWords = ['terima kasih', 'thanks', 'makasi', 'makasih', 'thank you', 'tq', 'ty']
  let isThanks = false
  thanksWords.forEach((thanksWord) => {
    if (m.text.toLowerCase().includes(thanksWord)) {
      isThanks = true
    }
  })
  if (isThanks) {
    let replyMessage = `Terimakasih Kembali Kak! *${user.name}*`
    conn.reply(m.chat, replyMessage, m, {
      contextInfo: {
        externalAdReply: {
          title: "Sama Sama Kak. - ShellTher : 3",
          body: time,
          thumbnailUrl: 'https://telegra.ph/file/fbe50a27a6f31148fabe2.jpg',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
  }
}

handler.customPrefix = /^((thanks?|makasi|makasih|hatur nuhun|terima kasih|thank you|tq|ty)(\s|$))/i
handler.command = new RegExp
module.exports = handler

