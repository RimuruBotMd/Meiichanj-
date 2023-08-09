/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const axios = require('axios')

let handler = async (m, { conn }) => {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

  axios({
    method: 'get',
    url: 'https://api.lolhuman.xyz/api/random/sfw/awoo?apikey=ayakaviki',
    responseType: 'arraybuffer'
  })
    .then((res) => {
      let buffer = Buffer.from(res.data, 'binary')
      conn.sendFile(m.chat, buffer, 'awo.jpg', '', m)
        .then((message) => {
          let info = ` ◦ Nama  : viki-awoo.jpg\n` +
                     ` ◦ Ukuran: Tidak diketahui\n` +
                     ' ◦ Rules : Jangan spam request'
          conn.reply(m.chat, info, message)
        })
        .catch(() => {
          conn.reply(m.chat, 'Terjadi kesalahan saat mengirim gambar. Mohon coba kembali nanti.', m)
        })
    })
    .catch(() => {
      conn.reply(m.chat, 'Terjadi kesalahan saat mengambil gambar. Mohon coba kembali nanti.', m)
    })
}

handler.command = /^(awo)$/i
handler.tags = ['internet']
handler.register = true

module.exports = handler