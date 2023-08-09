/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let handler = async (m, {
	conn,
	text
}) => {
	let [_, code] = text.match(linkRegex) || []
	if (!code) throw 'Link invalid'
	let res = await conn.groupAcceptInvite(code)
	m.reply(`🐱 Successfully joined the group`)
}
handler.help = ['join']
handler.tags = ['premium']
handler.command = /^join$/i
handler.premium = true

module.exports = handler