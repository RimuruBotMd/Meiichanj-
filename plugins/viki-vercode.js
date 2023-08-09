let handler = m => m
handler.before = async function (m) {
      try {
         let users = global.db.data.users[m.sender]
         if (!m.isGroup && m.text.toLowerCase(/\d{3}-\d{3}/) && !users.registered) {
         if (m.text.toLowerCase() == users.code.toLowerCase().trim()) {
            if (m.text.toLowerCase() == !users.code.toLowerCase().trim()) return m.reply(`🚩 Code Verifikasi kamu Salah Kak.`)
            if (new Date - users.codeExpire > 180000) return m.reply(`🚩 Yahh Kode Verifikasi Kamu Udah Kaladurasa kak..`).then(() => {
               users.codeExpire = 0
               users.code = ''
               users.email = ''
               users.attempt = 0
            })
            return m.reply(`*✅ Yeay Nomor Kamu Berhasil Terverifikasi!*\n\n[ *PENGGUNAAN* ]\nKetik *.menu* Untuk Menampilkan Seluruh *Fitur* *Remii - Beta*\n\nSebelum Memakai Bot, Alangkah Baiknya Kamu Membaca Rules Kami\n\nKebijakan Privasi, Syarat Ketentuan dan Peraturan Remii - Beta\n\n🔐 Kebijakan Privasi\n1. Bot tidak akan merekam data riwayat chat user.\n2. Bot tidak akan menyebarkan nomor users.\n3. Bot tidak akan menyimpan media yang dikirimkan oleh users.\n4. Bot tidak akan menyalah gunakan data data users.\n5. Owner berhak melihat data riwayat chat users.\n6. Owner berhak melihat status users.\n7. Owner dapat melihat riwayat chat, dan media yang dikirimkan users.\n\n📃 Peraturan Penggunaan\n1. Dilarang menelpon Atau video call nomor bot dengan tanpa alasan\n2. Dilarang kirim berbagai bug, virtex, dll ke nomor bot.\n3. Diharap Keras melakukan spam dalam penggunaan bot, hukuman dapat berupa sanksi, dan +1 warn\n4. Dilarang Menculik bot secara illegal, untuk menambahkan silahkan hubungi owner, [jika anda user baru, anda dapat meminta owner untuk menambahkan bot selama 7 hari]\n5. Tidak menyalah gunakan fitur fitur bot.\n6. Dilarang keras menggunakan fitur bot 18+ Bagi Yg bukan User Premium/bawah 18+, *Remii Beta* Memiliki Fitur AutoBanned Kepada User Yang Menggunakan Fitur 18+ Dibawah Umur\n7. Bot akan keluar jika dalam grup berkaitan dengan hal 18+, tanpa terkecuali member, deskripsi, profile, dll\n8. Dilarang Mengcopy Paste Fitur Ataupun Pesan Dari *Remii Beta*, Mengikuti Peraturan Undang-undang Atas Hak Cipta\n\n🖇️ Syarat Ketentuan  \n1. Bot akan keluar dari group Jika Waktu Sewa Habis.\n2. Bot dapat mem-ban users Jika melakukan Spam\n3. Bot *tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.*\n4. Bot akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.\n5. Bot bertanggung jawab atas kesalahan fatal dalam programing maupun owner.\n6. Bot Berhak Membuat Owner Menjadi Admin\n7. Bot Berhak menambah Grup yang belum memiliki komunitas Ke grup OFFICIAL BOT WHATSAAP\n8. Bot Berhak menghapus data User yang tidak merespon Bot selama 7 hari [pembersihan database]`).then(() => {
               users.codeExpire = 0
               users.code = ''
               users.attempt = 0
               users.registered = true
            })
         }}
      } catch (e) {
         m.reply(m.chat, `SorryErroR`, m)
      }
   }
module.exports = handler
handler.private = true