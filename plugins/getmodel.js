const axios = require('axios');
const fetch = require('node-fetch');
const fs = require('fs');
const FormData = require('form-data');
const uploadImage = require('../lib/uploadImage.js');

const handler = async (m, { conn, usedPrefix, command, args, text }) => {
  let serverName = (args[0] || '').toLowerCase();
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  let server = `*Server name:*\n◦ rose\n◦ frieren`;

  try {
    if (/getmodel/i.test(command)) {
      switch (serverName) {
        case 'rose':
        case 'frieren':
        if (!serverName) {
        m.reply(server)
        }
          conn.chatRead(m.chat);
          conn.sendMessage(m.chat, {
            react: {
              text: '🦄',
              key: m.key,
            }
          });

          let url = await axios.get(`https://api.itsrose.life/image/diffusion/get_all_models?server_name=${serverName}&apikey=Rs-AgesuXD`);
          let data = url.data;
          let result = data.result;

          let controlnetModels = result.controlnet_models.map(model => `◦ ${model}`);
          let models = result.models.map(model => `◦ ${model}`);
          let loraModels = result.lora_models.map(model => `◦ ${model}`);
          let embeddingsModels = result.embeddings.map(model => `◦ ${model}`);
          let sampler = result.samplers.map(model => `◦ ${model}`);

          let msgg = ''
            msgg += `*Controlnet Models:*\n${controlnetModels.join('\n')}\n\n`
            msgg += `*Models:*\n${models.join('\n')}\n\n`
            msgg += `*Lora Models:*\n${loraModels.join('\n')}\n\n`
            msgg += `*Embeddings Models:* \n${embeddingsModels.join('\n')}\n\n`
            msgg += `*Sampler:*\n${sampler.join('\n')}`
            m.reply(msgg)
          break;

        default:
          return m.reply(server);
      }
    } else {
      m.reply('*server name not available*');
    }
  } catch (e) {
    m.reply('error');
    console.log(e);
  }
};

handler.tags = ['owner'];
handler.command = /^(getmodel)$/i;
handler.help = ['getmodel'];
handler.limit = true;

module.exports = handler;