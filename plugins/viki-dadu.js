/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const da = [
  'https://cdn.jsdelivr.net/gh/SazumiVicky/dadu@main/1.webp',
  'https://cdn.jsdelivr.net/gh/SazumiVicky/dadu@main/2.webp',
  'https://cdn.jsdelivr.net/gh/SazumiVicky/dadu@main/3.webp',
  'https://cdn.jsdelivr.net/gh/SazumiVicky/dadu@main/4.webp',
  'https://cdn.jsdelivr.net/gh/SazumiVicky/dadu@main/5.webp',
  'https://cdn.jsdelivr.net/gh/SazumiVicky/dadu@main/6.webp'
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, pickRandom(da), 'viki.webp', '', m)
}
handler.help = ['dadu']
handler.tags = ['sticker']
handler.command = ['dadu'] 
handler.register = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}