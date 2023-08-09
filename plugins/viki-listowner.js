/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let {
	MessageType
} = require('@adiwajshing/baileys')

let handler = async (m, {
	conn,
	text,
	usedPrefix
}) => {
	let response = "•  OWNER MEMBERSHIP\n\n";
	let totalOwner = 0;

	for (let user in global.db.data.users) {
		if (global.db.data.users[user].owner) {
			let number = user.split("@")[0];
			let name = global.db.data.users[user].name || "";
			let days = Math.abs(Math.floor((global.db.data.users[user].ownerDate - new Date()) / (24 * 60 * 60 * 1000)));
			let hours = Math.abs(Math.floor((global.db.data.users[user].ownerDate - new Date()) / (60 * 60 * 1000))) % 24;
			let minutes = Math.abs(Math.floor((global.db.data.users[user].ownerDate - new Date()) / (60 * 1000))) % 60;

			response += `◦  *${number}*\n•  ${name} | ${days} Hari ${hours} Jam ${minutes} Menit\n\n`;

			totalOwner++;
		}
	}

	response += `┌  ◦  Total Owner : *${totalOwner}*\n`;
	response += "└  ◦  Upgrade Owner: *.owner*";

	m.reply(response, m.from, {
		contextInfo: {
			mentionedJid: Object.keys(global.db.data.users).filter(jid => global.db.data.users[jid].owner)
		}
	});
}

handler.command = ['listowner']
handler.tags = ['owner']
handler.owner = true
module.exports = handler;