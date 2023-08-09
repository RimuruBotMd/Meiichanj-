/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */

const fetch = require('node-fetch');
const fs = require('fs');

let handler = async (m, { conn, text }) => {
  if (!text) {
    m.reply('*Example*: .spotifydl https://open.spotify.com/track/xxxxx');
    return;
  }

  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });

  let apikey = 'ayakaviki';
  let url = `https://api.lolhuman.xyz/api/spotify?apikey=${apikey}&url=${encodeURIComponent(text)}`;

  try {
    let res = await fetch(url);
    if (!res.ok) throw await res.text();
    let json = await res.json();
    if (json.status !== 200) throw json.message;

    let result = json.result;

    let audioBuffer = await fetch(result.link).then(response => response.buffer());
    fs.writeFileSync('audio.mp3', audioBuffer);

    conn.sendFile(m.chat, 'audio.mp3', 'audio.mp3', '', m);

    fs.unlinkSync('audio.mp3');

  } catch (error) {
    m.reply(`🐱 Error: ${error}`);
  }
};

handler.command = ['spotifydl'];
handler.tags = ['downloader'];
handler.help = ['spotifydl'];
handler.group = false;
handler.register = true;

module.exports = handler;