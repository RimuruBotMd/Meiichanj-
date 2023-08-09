const axios = require('axios');

let handler = async (m, { conn, text }) => {
  if (!text) {
    throw '*Example*: .xnxxdl https://www.xnxx.com/xxx';
  }

  let apiUrl = `https://api.itsrose.life/dewasa/xnxx/detail?url=${encodeURIComponent(text)}&apikey=${global.rose}`;

  try {
    let response = await axios.get(apiUrl);
    let data = response.data.result;

    if (data) {
      let title = data.title;
      let duration = data.duration;
      let quality = data.quality;
      let views = data.views;
      let rating = data.rating;
      let linknya = data.download.high;
      let link = data.download;

      let message = `*Title:* ${title}\n`;
      message += `*Duration:* ${duration}\n`;
      message += `*Quality:* ${quality}\n`;
      message += `*Views:* ${views}\n`;
      message += `*Rating:* ${rating}\n`;
      message += `*Link:* ${link.high}\n`; // Use link.high instead of link

      conn.chatRead(m.chat);
      conn.sendMessage(m.chat, {
        react: {
          text: '🕒',
          key: m.key,
        }
      });
      conn.sendFile(m.chat, linknya, 'apa.mp4', message, m);
    } else {
      throw 'No results found.';
    }
  } catch (error) {
    console.log(error);
    throw 'An error occurred while fetching the data.';
  }
};

handler.help = ['xnxxdl'];
handler.tags = ['internet', 'premium'];
handler.premium = true;
handler.command = /^(xnxxdl)$/i;

module.exports = handler;