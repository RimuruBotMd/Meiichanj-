/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let handler = async (m, { conn, text, command, usedPrefix, isOwner }) => {
  let image = 'https://telegra.ph/file/ce9e74a4650b8c6a1c5a3.jpg'
  let caption = ''
  let changelogs = global.db.data.changelog || []
  
  switch (command) {
    case 'changelog':
    case 'log':
      if (!changelogs.length) return conn.reply(m.chat, 'There are no changelogs yet', m)
      caption = changelogs.map(changelog => {
        let [date, ...items] = changelog.split(' - ')
        return `• ${date}\n${items.map(item => `  ◦ ${item}`).join('\n')}`
      }).join('\n\n')
      conn.sendFile(m.chat, image, 'changelog.jpg', caption, m)
      break
      
    case 'addchangelog':
      if (!isOwner) return conn.reply(m.chat, 'Sorry, only the owner can use this command', m)
      if (!text) return conn.reply(m.chat, `Usage: ${usedPrefix}addchangelog <text>`, m)
      changelogs.unshift(`${new Date().toDateString()} - ${text}`)
      global.db.data.changelog = changelogs
      conn.reply(m.chat, 'Changelog has been added successfully', m)
      break
      
    case 'rchangelog':
      if (!isOwner) return conn.reply(m.chat, 'Sorry, only the owner can use this command', m)
      if (!text) return conn.reply(m.chat, `Usage: ${usedPrefix}rchangelog <text>`, m)
      let index = changelogs.findIndex(changelog => changelog.includes(text))
      if (index === -1) return conn.reply(m.chat, 'Changelog not found', m)
      changelogs.splice(index, 1)
      global.db.data.changelog = changelogs
      conn.reply(m.chat, 'Changelog has been removed successfully', m)
      break
  }
}

handler.help = ['changelog', 'log', 'addchangelog <text>', 'rchangelog <text>']
handler.tags = ['info']
handler.premium = false

handler.command = /^(changelog|log|addchangelog|rchangelog)$/i
handler.owner = false

module.exports = handler