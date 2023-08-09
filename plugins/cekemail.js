let handler = async (m, { conn, usedPrefix }) => {
  let user = global.db.data.users[m.sender];
  let email = user.email;

  m.reply(`*Email Kamu: ${email}*`);
};

handler.help = ['cekemail'];
handler.tags = ['main'];
handler.command = /^cekemail$/i;

module.exports = handler;
