let handler = async (m, { conn, usedPrefix: _p }) => {
  let name = await conn.getName(m.sender)
  let user = global.db.data.users[m.sender]
  let message = `
Hello *${name}* Remii is online, is there anything I can help you with??`
conn.reply(m.chat, message, m, {
      contextInfo: {
        externalAdReply: {
          title: "Remii - Beta Is Online🥀",
          body: "Ketik .menu untuk menampilkan fitur bot🥀",
          thumbnailUrl: 'https://telegra.ph/file/579c791ccb88e02e707e7.jpg',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
}

handler.customPrefix = /^(pp|p)$/i
handler.command = new RegExp

module.exports = handler
