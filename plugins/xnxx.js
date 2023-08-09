const axios = require('axios');

let handler = async (m, { conn, text }) => {
  if (!text) {
    throw '*Example*: .xnxx japanese';
  }
  
  let apiUrl = `https://api.lolhuman.xyz/api/xnxxsearch?apikey=ayakaviki&query=${encodeURIComponent(text)}`;
  
  try {
    let response = await axios.get(apiUrl);
    let data = response.data;
    
    if (data.result.length > 0) {
      let message = '*Here are some search results:*\n\n';
      
      for (let result of data.result) {
        let title = result.title;
        let views = result.views;
        let duration = result.duration;
        let uploader = result.uploader;
        let link = result.link;
        
        message += `◦ *Title:* ${title}\n◦ *Views:* ${views}\n◦ *Duration:* ${duration}\n◦ *Uploader:* ${uploader}\n◦ *Link:* ${link}\n\n`;
      }
      
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
      m.reply(message);
    } else {
      throw 'No results found for the given search query.';
    }
  } catch (error) {
    console.log(error);
    throw 'An error occurred while fetching the data.';
  }
};

handler.help = ['xnxx'];
handler.tags = ['internet'];
handler.premium = true
handler.command = /^xnxx/i;

module.exports = handler;
