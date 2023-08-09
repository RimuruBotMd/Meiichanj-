let { MessageType } = require('@adiwajshing/baileys');

let handler = async (m, { conn, text, usedPrefix }) => {
  function no(number) {
    return number.replace(/\s/g, '').replace(/([@+-])/g, '');
  }

  var hl = [];
  hl[0] = text.split('|')[0];
  hl[0] = no(hl[0]) + "@s.whatsapp.net";
  hl[1] = text.split('|')[1];
    
 	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

  if (!text) return m.reply(`*Example*: .nerfbalance @user | 100`);
  if (typeof db.data.users[hl[0]] == 'undefined') throw 'The user doesn t exist in the database';
  let count = parseInt(text.split('|')[1])
  global.db.data.users[hl[0]].balance -= count

  let username = `@${hl[0].split('@')[0]}`;

  let response = `•   *SUCCESSFULLY NERF BALANCE*\n\n┌  ◦  Added to: ${username}\n└  ◦  Amount: ${count}`;

  m.reply(response, m.chat, { mentionedJid: [hl[0]] });
  //m.reply(response, hl[0], { mentionedJid: [hl[0]] });
}

handler.help = ['nerfbalance *@user | value*'];
handler.tags = ['owner'];
handler.command = /^(del|nerf)balance$/i;
handler.owner = true;
handler.fail = null;
module.exports = handler;