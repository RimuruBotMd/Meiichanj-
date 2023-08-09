/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */



let axios = require('axios')

let handler = async (m, {
	conn
}) => {
	let user = global.db.data.users[m.sender]
	let name = conn.getName(m.sender)
	let date = new Date().toLocaleDateString('en-US', {timeZone: 'Asia/Makassar'})
	let time = new Date().toLocaleTimeString('en-US', {timeZone: 'Asia/Makassar', hour: 'numeric', minute: 'numeric', hour12: true})
	let version = require('../package.json').version
	let author = require('../package.json').author.name
	let greeting = ''

	if (new Date().getHours() >= 0 && new Date().getHours() < 4) {
		greeting = '👋 Good night'
	} else if (new Date().getHours() >= 4 && new Date().getHours() < 12) {
		greeting = '👋 Good morning'
	} else if (new Date().getHours() >= 12 && new Date().getHours() < 18) {
		greeting = '👋 Good afternoon'
	} else if (new Date().getHours() >= 18 && new Date().getHours() < 24) {
		greeting = '👋 Good evening'
	}
	let mainmenu = `ʜᴀɪ sᴀʏᴀ ᴀᴅᴀʟᴀʜ ᴀsɪsᴛᴇɴ ᴀɪ ʏᴀɴɢ ʙᴇʀᴏᴘᴇʀᴀsɪ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴊᴀᴠᴀsᴄʀɪᴘᴛ ᴅᴀɴ ʙᴀɪʟᴇʏs. 
	
    ╭  ◦ ᴄʀᴇᴀᴛᴏʀ: ꜱᴀᴢᴜᴍɪ ᴋᴇᴍɪɪ 
    │  ◦ ꜰᴀᴄᴇʙᴏᴏᴋ: ᴋᴇᴍɪɪ ᴅᴇɴᴘᴀɪ
    ╰  ◦ ᴘʀᴇғɪx: .

    ╭  ◦ ғᴏʀᴍᴀᴛ ᴅᴀғᴛᴀʀ: *.ᴠᴇʀɪғʏ*
    │  ◦ sᴇᴍᴜᴀ ғɪᴛᴜʀ: *.ᴀʟʟᴍᴇɴᴜ*
    ╰  ◦ ʟɪsᴛ ᴘʟᴀɴ: *.ᴘʀɪᴄᴇ*
    
ʜᴀʀᴀᴘ ᴜɴᴛᴜᴋ ʙᴇʀɢᴀʙᴜɴɢ ᴄʜᴀᴛʙᴏᴛ ᴀɢᴀʀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ɪɴғᴏ ᴅᴀɴ ʙᴏɴᴜs sᴇᴛɪᴀᴘ ʜᴀʀɪɴʏᴀ *.ɢᴄʙᴏᴛ*`

	let thumbnailUrl = "https://telegra.ph/file/27bd00a66589c02699522.jpg"
     
	conn.reply(m.chat, mainmenu, m, {
		contextInfo: {
			externalAdReply: {
				title: `ʀᴇᴍɪɪ - ꜱᴀᴢᴜᴍɪ ᴋᴇᴍɪɪ`,
				body: "ʜɪ, ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ʀᴇᴍɪɪ ʙᴇᴛᴀ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ",
				thumbnailUrl: thumbnailUrl,
				sourceUrl: `https://chat.whatsapp.com/EHvO9j6JMHb9roHNTvtbdy`,
				mediaType: 1,
				renderLargerThumbnail: true
			}
		}
	})
}

handler.command = /^menu$/i
handler.help = ['menu']
handler.tags = ['main']
handler.limit = true
handler.register = false

module.exports = handler