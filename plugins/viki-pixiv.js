/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const axios = require('axios')

let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, '*Example*: .pixiv anime', m)

  conn.chatRead(m.chat)
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  })

  let url = `https://api.lolhuman.xyz/api/pixiv?apikey=ayakaviki&query=${encodeURIComponent(text)}`
  axios.get(url)
    .then(function (response) {
      let images = response.data.result
      if (images.length == 0) {
        conn.reply(m.chat, '🐱 No images found for that keyword.', m)
      } else {
        let index = Math.floor(Math.random() * images.length)
        let image = images[index]
        conn.sendFile(m.chat, image.image, 'pixiv.jpg', image.title, m)
      }
    })
    .catch(function (error) {
      console.log(error)
      conn.reply(m.chat, 'An error occurred while processing the request. Please try again later.', m)
    })
}

handler.help = ['pixiv <kata kunci>']
handler.tags = ['internet']
handler.command = /^pixiv$/i
handler.register = true

module.exports = handler