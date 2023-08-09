/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const axios = require('axios');

let handler = async (m, { text }) => {
  if (!text) {
    throw '*Example*: .bot Halo, how are you ?';
  }

  let apiKey = 'rJrQEQIbx7kJFkL8';
  let brainId = '175987';
  let apiUrl = `http://api.brainshop.ai/get?bid=${brainId}&key=${apiKey}&uid=${m.sender}&msg=${encodeURIComponent(text)}`;

  try {
    let response = await axios.get(apiUrl);
    let reply = response.data.cnt;
    m.reply(reply);
  } catch (e) {
    console.log(e);
    m.reply('Failed to get reply from bot. Please try again later.');
  }
};

handler.help = ['bot'];
handler.tags = ['tools'];
handler.command = /^bot$/i;

module.exports = handler;
