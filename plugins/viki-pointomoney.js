/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let handler = async (m, { args }) => {
  if (args.length !== 1) {
    throw '*Example*: .pointobalance 1000'
  }
  let poin = parseInt(args[0])
  if (isNaN(poin) || poin < 1) {
    throw 'The number of points you want to convert must be greater than or equal to 1!'
  }

  let fee = Math.round(poin * 0.05)
  let balance = poin - fee

  let message = `Here are the details of the points to money conversion:\n\n`
  message += `• Number of Points: ${poin}\n`
  message += `• Fee (5%): ${fee}\n`
  message += `• Amount of balance: ${balance}`

  let user = global.db.data.users[m.sender]
  if (poin > user.poin) {
    throw 'Sorry, you don t have enough points to convert.'
  }
  user.poin -= poin
  user.uang += balance
  global.db.data.users[m.sender] = user
  global.db.write()

  m.reply(message)
}

handler.help = ['pointobalance <jumlah poin>']
handler.tags = ['game']
handler.command = /^pointobalance$/i
handler.register = true
handler.limit = true

module.exports = handler