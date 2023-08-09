/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let handler = async (m, { conn, text, command }) => {
  let report = text || "";
  let ownerNumber = "6288980870067";

  if (report === "") {
    conn.reply(m.chat, `*Example*: .report plugins what anime erorr, please fix`, m);
    return;
  }

  let message = `◦ From: ${m.sender}\n◦ Report teks: ${report}`;
  conn.sendMessage(ownerNumber + "@s.whatsapp.net", message, "conversation");
  conn.reply(m.chat, "🐱 Thanks for the report! Bugs will be fixed soon.", m);
};
handler.help = ["report <teks>", "reportbug <teks>"];
handler.tags = ["owner"];
handler.command = /^(report|reportbug)$/i;
handler.register = true;
handler.limit = true;

module.exports = handler;