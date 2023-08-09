let handler = async (m, { conn, text, usedPrefix }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
  
  if (!text) {
    m.reply(`*Example*: .unowner @user⁩`)
    return
  }

  let mentionedJid = m.mentionedJid[0]
  if (!mentionedJid) {
    text = no(text) + "@s.whatsapp.net"
    if (!global.db.data.users[text]) {
      m.reply('The user doesn\'t exist in the database.')
      return
    }
    mentionedJid = text
  }

  let user = global.db.data.users[mentionedJid]
  if (!user) {
    m.reply('The user doesn\'t exist in the database.')
    return
  }
  
  if (!user.owner) {
    m.reply('The user doesn\'t have premium status.')
    return
  }

  user.owner = false
  user.ownerDate = 0
  let name = conn.getName(mentionedJid)
  let message = `Successfully removed owner status from @${mentionedJid.split('@')[0]}.`
  m.reply(message, null, { contextInfo: { mentionedJid: [mentionedJid] } })
}

handler.help = ['unowner @user']
handler.tags = ['owner']
handler.command = /^((un|del)owner)$/i
handler.owner = true

module.exports = handler