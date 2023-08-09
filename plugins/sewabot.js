let handler = async m => {

let intro = `*Sewa Botz ShellTher : 3 Public Bot*

*𝖦𝗋𝗈𝗎𝗉 𝖠𝗌𝗌𝗂𝗌𝗍𝖺𝗇𝗍:*
┌  ◦ 𝖠𝖼𝖼𝖾𝗌𝗌 𝖠𝗇𝗍𝗂𝗅𝗂𝗇𝗄
│  ◦ 𝖠𝖼𝖼𝖾𝗌𝗌 𝖦𝖺𝗆𝖾 𝖱𝗉𝗀
│  ◦ 𝖦𝖾𝗍 𝖺 𝖳𝖾𝗑𝗍 𝖶𝖾𝗅𝖼𝗈𝗆𝖾 
│  ◦ 𝖠𝗇𝖽 𝖬𝖺𝗇𝗒𝗆𝗈𝗋𝖾
└  ◦ 𝖨𝖣𝖱 5.𝟢𝟢𝟢 / 𝖦𝗋𝗈𝗎𝗉 permanent

 *Moderator User:*

┌  ◦  Access Broadcast
│  ◦  Acces Cheat Rpg
│  ◦  Acces Ban & Unban Wa
│  ◦  Get Unlimited Limit
│  ◦  And Manymore
└  ◦  IDR 7.000 / Number

*𝖯𝗋𝖾𝗆𝗂𝗎𝗆 𝖴𝗌𝖾𝗋:*
┌  ◦ 𝖠𝖼𝖼𝖾𝗌𝗌 𝖬𝖾𝗇𝗎 𝖯𝗋𝖾𝗆𝗂𝗎𝗆
│  ◦ 𝖦𝖾𝗍 𝖴𝗇𝗅𝗂𝗆𝗂𝗍𝖾𝖽 𝖫𝗂𝗆𝗂𝗍
│  ◦ 𝖦𝖾𝗍 𝟣𝟢𝟢𝗄 𝖬𝗈𝗇𝖾𝗒 𝖱𝗉𝗀 / 𝖣𝖺𝗒
│  ◦ 𝖠𝗇𝖽 𝖬𝖺𝗇𝗒𝗆𝗈𝗋𝖾
└  ◦ 𝖨𝖣𝖱 4.𝟢𝟢𝟢

• Untuk Info lebih lengkap klik link
• Website: https://kemii.my.id`
conn.reply(m.chat, intro, m, {
      contextInfo: {
        externalAdReply: {
          title: "List Sewa ShellTher : 3",
          body: "Kalo Minat Langsung Klik Gambar Di Atas><",
          thumbnailUrl: 'https://telegra.ph/file/e5a7e443689619e2c48c0.jpg',
          sourceUrl: `https://wa.me/6288980870067?text=Sewabot+Dong`,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
}
handler.help = ['sewabot']
handler.tags = ['main']

handler.command = /^(sewabot|belibot|price)$/i

handler.mods = false

module.exports = handler