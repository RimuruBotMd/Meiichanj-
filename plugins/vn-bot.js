let handler = async (m, { conn }) => {
	let vn = "./viki-audio/bot.opus";
	conn.sendFile(m.chat, vn, "bot.opus", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(woi bot|bot|halo bot)$/i;
handler.command = new RegExp

module.exports = handler