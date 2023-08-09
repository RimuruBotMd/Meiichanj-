
let handler = async (m, { conn, args, text }) => {
m.reply(`*SILAHKAN PILIH METHODE DEPOSIT*
*PEMBAYARAN ANDA*

• KETIK pay_dana UNTUK PAYMENT DANA
• KETIK pay_ovo UNTUK PAYMENT OVO
• KETIK pay_gopay UNTUK PAYMENT GOPAY
• KETIK pay_qris UNTUK PAYMENT QRIS `)
  }
handler.help = ['deposit']
handler.tags = ['store']
handler.command = /^(deposit)$/i

handler.private = true

module.exports = handler
