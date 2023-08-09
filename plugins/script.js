let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let teks = `*This bot was created by me with the purpose of learning and having fun and not intending to harm others.*

*want to buy source code? please chat owner*
wa.me/6288980870067

_*ShellTher : 3 - Sazumi Kemii*_`

    await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 15000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: teks,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i
handler.register = false

module.exports = handler