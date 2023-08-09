let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/28dbf299fd1ce4c941273.jpg', m, { packname: "sticker by", author: "Kemii" })
}

handler.customPrefix = /^(@6288980870067)$/i
handler.command = new RegExp

module.exports = handler
