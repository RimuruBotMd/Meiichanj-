let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = require('@adiwajshing/baileys')
let moment = require('moment-timezone')
let fetch = require('node-fetch')
let fs = require('fs')

let qris = 'https://telegra.ph/file/2822a1830887ca535ac1b.jpg'
let handler = async (m, { conn, args, usedPrefix, command }) => {
const messa = await prepareWAMessageMedia({ image: await fetch('https://telegra.ph/file/2822a1830887ca535ac1b.jpg') }, { upload: conn.waUploadToServer })
const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage, 
"productId": "6188654807917484",
"title": `Donasi kepada ShellTher :3`,
"description": `Scan untuk Donasi`,
"currencyCode": "IDR",
"bodyText": wm,
"footerText": wm,
"priceAmount5000": "10000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount5000": "10000000",
"retailerId": wm,
"url": "http://wa.me/6288980870067"
},
"businessOwnerJid": "6288980870067@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: m })    

conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^(donasi)$/i

handler.limit = true

module.exports = handler