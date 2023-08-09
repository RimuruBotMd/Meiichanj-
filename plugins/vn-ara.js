let handler = async (m, { conn }) => {
	let vn = "./viki-audio/ara.opus";
	conn.sendFile(m.chat, vn, "ara.opus", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(Ara ara|ara ara|Ara|ara)$/i;
handler.command = new RegExp

module.exports = handler