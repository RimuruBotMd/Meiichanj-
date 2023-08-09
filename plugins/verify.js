let handler = async m => {

let intro = `🚩 Verifikasi nomor dengan menggunakan email, 1 email untuk memverifikasi 1 nomor WhatsApp. Silahkan ikuti step by step berikut :\n\n*–STEP 1* Gunakan perintah *.reg <email>* untuk mendapatkan kode verifikasi melalui email.\nContoh : *.reg emailmu@gmail.com*\n\n*–STEP 2* Buka email dan cek pesan masuk atau di folder spam, setelah kamu mendapat kode verifikasi silahkan kirim kode tersebut kepada bot.\nContoh : *.vercode kodemu*\n\n*Note* : Mengabaikan pesan ini sebanyak *5x* kamu akan di banned dan di blokir, untuk membuka banned dan blokir dikenai biaya sebesar Rp. 5,000`
conn.reply(m.chat, intro, m, {
      contextInfo: {
        externalAdReply: {
          title: "𝚁𝚎𝚐𝚒𝚜𝚝𝚎𝚛 𝙳𝚞𝚕𝚞 𝙺𝚊𝚔!!",
          body: "Don't Spam Or Block Permanent🦄",
          thumbnailUrl: 'https://telegra.ph/file/7051d18b69f758cb8c9a9.jpg',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
}
handler.help = ['verify']
handler.tags = ['start']

handler.command = /^(verify)$/i

handler.limit = true

module.exports = handler