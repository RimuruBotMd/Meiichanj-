let handler = async (m, { conn, text }) => {
  let caption = `🥀 *LIST PANEL KEMII* \n\n`
  caption += `◦ 1 Gb : 1k\n`
  caption += `◦ 2 Gb : 2k\n`
  caption += `◦ 3 Gb : 3k\n`
  caption += `◦ 4 Gb : 4k\n`
  caption += `◦ Unli : 5k\n\n`
  caption += `Langsung hubungi Kontak Owner disini😉 [+6288980870067]`
  conn.sendFile(m.chat, 'https://telegra.ph/file/ab475965625a4f41a865a.jpg', 'sewa.jpg', caption, m)
}

handler.help = ['listpanel']
handler.tags = ['info']
handler.command = /^(listpanel)$/i

module.exports = handler