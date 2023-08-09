let fetch = require('node-fetch')
let handler = async (m, { text, command, conn }) => {

  if (!text) throw 'Masukan teks untuk diubah menjadi gambar'
  conn.reply(m.chat, 'Tunggu sebentar..', m)
  let url = `https://api.itsrose.site/image/stable/diffusion?prompt=${text}&negative_prompt=realistic%2C%203d%2C%20smooth%20skin%2C%20cg%2C%20nice%20eyes&ratio=1%3A1&cfg=7.5&hiresFix=true&apikey=197d9e23646230b6b01d37d3`
  let response = await fetch(url)
  let result = await response.buffer()
  conn.sendFile(m.chat, result, 'aneh.jpg', `${text}`, m)

}
handler.command = handler.help = ['aiimg','aiimage','stabledif']
handler.tags = ['internet']
handler.register = true
handler.limit = true

module.exports = handler