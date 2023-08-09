/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const { MessageType } = require('@adiwajshing/baileys');

let handler = async (m, { conn, text }) => {
  if (!text) {
    throw 'Masukkan jumlah limit yang ingin ditambahkan pada pengguna. Contoh: .addlevel @user 10';
  }
    
 	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

  let mentionedJid = m.mentionedJid[0];
  if (!mentionedJid) {
    throw 'Tag pengguna yang ingin ditambahkan limitnya. Contoh: .addlevel @user 10';
  }

  let pointsToAdd = parseInt(text.split(' ')[1]);
  if (isNaN(pointsToAdd)) {
    throw 'Jumlah level yang dimasukkan harus berupa angka. Contoh: .addlevel @user 10';
  }

  let users = global.db.data.users;
  if (!users[mentionedJid]) {
    users[mentionedJid] = {
      Level: 0,
      exp: 0,
      lastclaim: 0
    };
  }

  users[mentionedJid].level += pointsToAdd;

  conn.reply(m.chat, `Berhasil menambahkan ${pointsToAdd} level untuk @${mentionedJid.split('@')[0]}.`, m, {
    mentions: [mentionedJid]
  });
};

handler.help = ['addlevel @user <jumlah level>'];
handler.tags = ['xp'];
handler.command = /^addlevel$/i;
handler.owner = true;

module.exports = handler;