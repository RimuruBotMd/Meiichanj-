/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let fetch = require('node-fetch')
let handler = async (m, { args, usedPrefix, command }) => {

    if (!args[0]) throw '*Example*: https://github.com/KemiiDenpai/ShellBotV3'

    if (!regex.test(args[0])) throw 'link salah!'

    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`

    let response = await fetch(url, {method: 'HEAD'})
    if (!response.ok) throw 'Maaf kak, repository yang Anda cari tidak dapat ditemukan.'

    let filename = response.headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    conn.sendFile(m.chat, url, filename, null, m)

}
handler.help = ['gitclone <url>']
handler.tags = ['tools']
handler.command = /gitclone/i
handler.limit = true

module.exports = handler