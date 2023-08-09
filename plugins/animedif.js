const axios = require('axios');

const handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw `*Example:* .${command} luffy, (one piece)`
  const url = `https://api.itsrose.life/image/stable/diffusion?prompt=${text}&negative_prompt=(worst%20quality%2C%20low%20quality%2C%20extra%20digits%3A1.4)%2C%20artist%20name%2C%20nsfw%2C%20monochrome%2C%20fused%20face%2C%20poorly%20drawn%20face%2C%20cloned%20face%2C%20false%20body%2C%20false%20face%2C%20bad%20hands%2C%20poorly%20drawn%20hands%2C%20extra%20fingers%2C%20fused%20eyes%2C%20poorly%20drawn%20eyes%2C%20liquid%20eyes%2C%20false%20eyes%2C%20scary%2C%20ugly%2C%20out%20of%20frame%2C%20head%20out%20of%20frame%2C%203D%2C%20bad%20anatomy%2C%20(((nsfw))).&style=Creative&ratio=9:16&cfg=7.5&model_id=abyssOrangeMix&json=true&apikey=${global.rose}`;
  
  conn.sendMessage(m.chat, {
    react: {
      text: '🦄',
      key: m.key,
    }
  }); 
  
  const res = await axios.get(url);
  const data = res.data;
  const { status, message, result } = data;
  if (!status) {
    m.reply(message);
    return;
  }

  const base64Image = result.base64Image;
  const buffer = Buffer.from(base64Image, 'base64');
  conn.sendFile(m.chat, buffer, 'pepek.jpg', `*prompt:* ${text}`, m);
};

handler.help = ['diffusion'];
handler.tags = ['tools', 'openai'];
handler.command = /^(diffusion|animediff|wibudiff)$/i;
handler.premium = true

module.exports = handler;