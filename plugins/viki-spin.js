/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let handler = async (m, { conn, text, usedPrefix }) => {
  let user = global.db.data.users[m.sender]
  if (!user) throw 'You are not registered in the database'

  if (!text || !/^\d+$/.test(text)) {
    throw `Example: ${usedPrefix}spin 1000`
  }

  let betAmount = parseInt(text)
  if (user.balance < betAmount) throw '🐱 Your balance is insufficient'

  let result = Math.random() >= 0.5 
  let wonAmount = result ? Math.ceil(betAmount * 1.31919) : -betAmount
  user.balance += wonAmount

  let delay = 1000
  if (user.lastSpin && new Date() - user.lastSpin < delay) {
    let time = (user.lastSpin + delay - new Date()) / 1000
    throw `🐱 Please wait ${time.toFixed(1)} seconds before executing the next spin`
  }
  user.lastSpin = new Date()

  let caption = `•  S P I N  -  R E S U L T\n\n`
  caption += `- ${betAmount.toLocaleString()}\n`
  caption += result ? `+ ${wonAmount.toLocaleString()}\n\n` : `\n\n`
  caption += `• Total : ${user.balance.toLocaleString()} Balance`

  conn.reply(m.chat, caption, m, {
    contextInfo: {
      externalAdReply: {
        title: `${global.namebot}`,
        body: "This is the result of your spin",
        thumbnailUrl: "https://telegra.ph/file/f7ed26463b39ea3e92d02.jpg",
        sourceUrl: `${global.sourceUrl}`,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  })
}

handler.help = ['spin']
handler.tags = ['game']
handler.command = /^(spin)$/i

module.exports = handler