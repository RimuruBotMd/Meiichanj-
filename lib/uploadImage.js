/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const fetch = require('node-fetch');
const FormData = require('form-data');
const { fromBuffer } = require('file-type');

/**
* Upload media to Telegra.ph
* @param {Buffer} buffer Media buffer
* @param {String} [filename] File name
* @param {String} [mediaType] Media type (photo/video)
*/
module.exports = async (buffer, filename = 'media', mediaType = 'photo') => {
  const { ext } = await fromBuffer(buffer);
  let form = new FormData();
  form.append('file', buffer, { filename: filename + '.' + ext, contentType: `image/${ext}` });
  form.append('type', mediaType);
  let res = await fetch('https://telegra.ph/upload', {
    method: 'POST',
    body: form
  });
  let media = await res.json();
  if (media.error) throw media.error;
  return 'https://telegra.ph' + media[0].src;
};
