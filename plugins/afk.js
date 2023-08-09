let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  let thumb = 'https://telegra.ph/file/5964fcd5326be689e952c.jpg'
  let dann = `${conn.getName(m.sender)} Sekarang AFK${text ? ': ' + text : ''}`
  conn.sendMessage(m.chat, {
    text: dann,
    contextInfo: {
    externalAdReply: {
    title: "ShellTher : 3 - afk menu",
    body: "Kamu Sedang Afk !!!",
    thumbnailUrl: thumb,
    sourceUrl: "-",
    mediaType: 1,
    renderLargerThumbnail: true
    }}})

}
handler.help = ['afk <alasan>']
handler.tags = ['main']
handler.command = /^afk$/i
handler.limit = true

module.exports = handler