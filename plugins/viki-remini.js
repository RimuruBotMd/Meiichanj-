const axios = require('axios');
const fetch = require('node-fetch');
const fs = require('fs');
const FormData = require('form-data');
const uploadImage = require('../lib/uploadImage.js');

const handler = async (m, { conn, usedPrefix, command, text }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime) throw '🐱 Send/Reply Images with the caption *.remini*';
  conn.chatRead(m.chat)
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  })
  let media = await q.download();
  let url = await uploadImage(media);
  let response = await fetch(url);
  let buffer = await response.buffer();

  const form = new FormData();
  form.append('image', buffer, {
    filename: 'image.jpg',
    contentType: 'image/jpeg',
    knownLength: buffer.length,
  });
  
  const queryParams = {
    json: true,
    };

  const { data } = await axios
    .request({
      baseURL: 'https://api.itsrose.life',
      url: '/image/esrgan',
      method: 'POST',
      params: {
        ...queryParams,
        apikey: global.rose,
      },
      data: form,
    })
    .catch((e) => e?.response?.data);
    
    const { result } = data

  const resultBuffer = Buffer.from(data.result.base64Image, 'base64');

  return conn.sendFile(m.chat, resultBuffer, 'ppk.jpg', '', m);
};

handler.help = ['remini'];
handler.tags = ['tools'];
handler.command = /^(remini)$/i;
handler.limit = true;

module.exports = handler;