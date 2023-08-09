/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let handler = async (m, { conn }) => {
  let aboutID = `🐱 ShellBot adalah bot WhatsApp yang cerdas dan sangat berguna untuk membantu Anda dalam menjawab pertanyaan dan memberikan solusi yang tepat dalam waktu yang singkat. Dikembangkan oleh Kemii Denpai, bot ini menggunakan sumber asli base Botcahx yang terus diperbarui oleh Kemii Denpai untuk memberikan pengalaman berinteraksi yang lebih mudah dan menyenangkan.

Dengan kemampuannya yang luas dalam menjawab pertanyaan dan memberikan solusi, Bot ShellTher dapat membantu Anda dalam berbagai hal seperti, mencari informasi tentang produk atau layanan, mengatur jadwal, dan banyak lagi. Bot ShellTher juga dapat memberikan jawaban yang akurat dan cepat sehingga Anda tidak perlu lagi menunggu lama untuk mendapatkan jawaban yang Anda butuhkan.

Sebagai produk yang dikembangkan dan diperbarui oleh Kemii Denpai, Bot ShellTher selalu menerima pembaruan fitur-fitur terbaru untuk memberikan layanan yang semakin baik dan canggih. Dengan Bot ShellTher, Anda tidak perlu khawatir tentang kualitas layanan yang diberikan karena bot ini selalu siap memberikan solusi yang terbaik bagi pengguna WhatsApp. Jadi, tunggu apa lagi? Gunakan Bot ShellTher sekarang dan nikmati kemudahan serta kenyamanan dalam berinteraksi dengan bot cerdas ini di WhatsApp!`

  let aboutEN = `🐱 ShellBot is a smart WhatsApp bot that is very useful for helping you answer questions and provide accurate solutions in a short amount of time. Developed by Kemii Denpai, this bot uses the original source of Botcahx that is constantly updated by Kemii Denpai to provide an easier and more enjoyable interactive experience.

With its broad ability to answer questions and provide solutions, Bot ShellTher can assist you in various things such as searching for information about products or services, scheduling appointments, and much more. Bot ShellTher can also provide accurate and quick answers so you no longer have to wait long to get the answers you need.

As a product developed and updated by Kemii Denpai, Bot ShellTher always receives the latest feature updates to provide better and more advanced services. With Bot ShellTher, you don't have to worry about the quality of the service provided because this bot is always ready to provide the best solutions for WhatsApp users. So, what are you waiting for? Use Bot ShellTher now and enjoy the ease and convenience of interacting with this smart bot on WhatsApp!`
  
 	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

  let about = `${aboutID}\n\n${aboutEN}`

  let url = "https://telegra.ph/file/7292ad6ed3d9ac6088337.jpg"

  conn.sendFile(m.chat, url, 'about.jpg', about, m)
}

handler.help = ['about', 'detile', 'aboutbot', 'tentang', 'detail']
handler.tags = ['info']
handler.command = /^(detail)$/i
handler.register = true

module.exports = handler