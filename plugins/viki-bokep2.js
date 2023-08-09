const axios = require('axios');
const cheerio = require('cheerio');
let handler = async(m, { conn }) => {
conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
axios.get('https://www.sotwe.com/sayacewek18')
  .then((response) => {
    const $ = cheerio.load(response.data);
    const videoSrcArray = $('video > source').map(function() {
      return $(this).attr('src');
    }).get();
    const randomVideoSrc = videoSrcArray[Math.floor(Math.random() * videoSrcArray.length)];
    const title = 'bkptwit';
    const caption = '🐱 Here is The Video You Requested';
    const mimeType = '';
    conn.sendFile(m.chat, randomVideoSrc, title, caption, m, false, {mimetype: mimeType});
  })
}
handler.help = ['bokep']
handler.tags = ['nsfw']
handler.command = /^bokep2$/i
handler.owner = false
handler.premium = true
handler.group = false
handler.private = false

module.exports = handler