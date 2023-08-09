/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let axios = require('axios')

let handler = async (m, {
	conn,
	text
}) => {
	if (!text) {
		conn.reply(m.chat, '*Example*: .ytmp3 https://www.youtube.com/xxxxxx', m)
		return
	}

	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
	try {
		let response = await axios.get(`https://api.lolhuman.xyz/api/ytaudio?apikey=ayakaviki&url=${encodeURIComponent(text)}`)
		let result = response.data.result
		let link = result.link.link
		let title = result.title
		let size = result.link.size
		let bitrate = result.link.bitrate
		let duration = result.duration
		let caption = `*Hasil Konversi Video YouTube ke MP3*\n\n`
		caption += `Judul: ${title}\n`
		caption += `Durasi: ${duration}\n`
		caption += `Ukuran: ${size}\n`
		caption += `Bitrate: ${bitrate} kbps\n`
		conn.sendFile(m.chat, link, `${title}.mp3`, caption, m)
	} catch (e) {
		conn.reply(m.chat, 'An error occurred while processing the request.', m)
		console.log(e)
	}
}

handler.help = ['ytmp3 <tautan>', 'youtube <tautan>']
handler.tags = ['downloader']
handler.command = /^(ytmp3|youtubemp3)$/i

module.exports = handler