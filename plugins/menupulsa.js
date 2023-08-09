let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
*── 「 List Pulsa 」 ──*

_Pilih Opsi dibawah_
*❍ .Telkomsel* ✔️
*❍ .Three* ✔️
*❍ .XL* ✔️
*❍ .AXIS* ✔️
*❍ .Smartfren* ✔️
*❍ .Byu* ✖️
*Note*
Stock Ready - ✔️
Stock Kosong - ✖️
`.trim()
conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: 'Meiichanj - Sazumi Kemii',
body: 'Silahkan klik gambar di atas jika minat🦄',
thumbnailUrl: "https://telegra.ph/file/05320f1b8d774b3029887.jpg",
sourceUrl: `https://wa.me/6288980870067?text=Pulsa+Kem>_<`,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['isipulsa']
handler.tags = ['store']
handler.command = /^(isipulsa)$/i

handler.register = false
module.exports = handler