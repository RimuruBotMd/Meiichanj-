let handler = async (m, { conn, isROwner }) => {
  if (m.fromMe) throw 'Nggk'
  if (isROwner) throw 'Padahal udah jadi admin'
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
handler.command = /^admin.$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler