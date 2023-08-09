/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */

const axios = require('axios');

let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `*Example:* ${usedPrefix}${command} Rewrite the star`;
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  try {
    let query = encodeURIComponent(text);
    let api = `https://api.lolhuman.xyz/api/spotifysearch?apikey=ayakaviki&query=${query}`;
    let { data } = await axios.get(api);

    if (data.status !== 200 || !data.result || data.result.length === 0) {
      m.reply('Sorry, we could not find the song you were looking for.');
      return;
    }

    let result = data.result[0];
    let { title, artists, external_urls } = result;
    let artist = artists;
    let songLink = external_urls.spotify;

    let caption = `┌  ◦  *Title:* ${title}
│  ◦  *Artist(s):* ${artist}
│  ◦  *Download song, Example:* .spotifydl link
└  ◦  *Listen on Spotify:* ${songLink}`;

    m.reply(caption);
  } catch (error) {
    console.log(error);
    m.reply('Sorry, we couldn\'t find the song you were looking for. Please provide a more specific title.');
  }
};

handler.help = ['spotify <song title>'];
handler.tags = ['premium'];
handler.command = /^spotify$/i;
handler.exp = 0;
handler.limit = 3;
handler.premium = false;

module.exports = handler;