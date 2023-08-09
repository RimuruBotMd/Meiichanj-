/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const fs = require('fs');
let packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
let version = packageJson.version;

let handler = async (m, { conn }) => {
  conn.reply(m.chat, `ShellTher Version: *${version}*`, m, {
    contextInfo: {
      externalAdReply: {
        title: `${global.namebot}`,
        body: "",
        thumbnailUrl: "https://telegra.ph/file/55f17b8efc500e6516be0.jpg",
        sourceUrl: "https://kemii.my.id",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  });
};

handler.command = ['version'];
handler.help = ['version'];
handler.tags = ['info'];

module.exports = handler;
