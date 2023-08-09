/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  let lastbertani = user.lastbertani || 0
  let cd = 3600000 - (Date.now() - lastbertani)
  let timers = clockString(cd)

  if (cd > 0) {
    conn.reply(m.chat, `Tunggu selama ${timers} lagi sebelum bisa bertani lagi`, m)
  } else {
    	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    conn.reply(m.chat, '🧑‍🌾 Kamu sedang menyiapkan sawah untuk menanam padi.', m)
    setTimeout(() => {
      conn.reply(m.chat, '🧑🚜 Sekarang kamu sedang membajak sawah.', m)
      setTimeout(() => {
        conn.reply(m.chat, '👨‍🌾 Sekarang kamu sudah menanam padi.', m)
        setTimeout(() => {
          let balance = Math.floor(Math.random() * 26000) + 24000
          let exp = Math.floor(Math.random() * 1700) + 300
          let limit = Math.floor(Math.random() * 15) + 5
          let result = `
Selamat ini gaji kamu dari bertani

💸 balance - ${balance}
🆙 Exp - ${exp}
❤ Limit - ${limit}
`
          conn.reply(m.chat, result, m)
          user.balance += balance
          user.exp += exp
          user.limit += limit
          user.lastbertani = new Date() * 1
        }, 3000)
      }, 3000)
    }, 3000)
  }
}

handler.command = /^(bertani)$/i
handler.help = ['bertani']
handler.tags = ['rpg']
handler.register = true
handler.limit = true

module.exports = handler


function clockString(ms) {
  let h = isNaN(ms) ? '00' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '00' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '00' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}