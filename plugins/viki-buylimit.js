/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let handler = async (m, {
	conn,
	args
}) => {
	if (!args[0] || isNaN(args[0])) {
		throw '*Example*:.buylimit 10';
	}

	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

	let count = parseInt(args[0]);
	let price = count * 100;
	let users = global.db.data.users;
	let user = users[m.sender];
	if (price > user.balance) {
		throw `Maaf, uang kamu tidak cukup untuk membeli ${count} limit. Harga 1 limit adalah 100 balance.`;
	}
	user.balance -= price;
	user.limit += count;
	conn.reply(m.chat, `Berhasil membeli ${count} limit dengan harga ${price} balance.`, m);
}

handler.help = ['buylimit <jumlah>'];
handler.tags = ['xp'];
handler.command = /^buylimit$/i;
handler.register = true;
handler.limit = true;

module.exports = handler;