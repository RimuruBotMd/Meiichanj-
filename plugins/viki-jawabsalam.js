/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let handler = async (m, { conn }) => {
  let regex = /^(assalamualaikum|salam|ass|salo?m|p)$/i
  if (regex.test(m.text)) {
    let user = global.db.data.users[m.sender]
    let name = user.name
    let caption = `Waalaikumsalam *${name}* ❤️`
    m.reply(caption, null, {
      sendEphemeral: true,
      quoted: m
    })
  }
}

handler.command = /.*/
handler.customPrefix = /^(assalamualaikum|salam|ass|salo?m)$/i
handler.exp = 0

module.exports = handler
