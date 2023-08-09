const fetch = require("node-fetch");
const fs = require("fs");
const FormData = require("form-data");

let handler = async (m, { conn }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (/audio|voice|ogg/.test(mime)) {
    try {
      conn.chatRead(m.chat);
      conn.sendMessage(m.chat, {
        react: {
          text: "🕒",
          key: m.key,
        },
      });
      let mediaData = await q.download();
      let audioName = "audio" + Date.now() + ".mp3";
      fs.writeFileSync(audioName, mediaData);
      let form = new FormData();
      form.append("file", fs.createReadStream(audioName));
      let res = await fetch("https://file.io/?expires=1d", {
        method: "POST",
        body: form,
        headers: {
          "X-API-KEY": "AJA_SENDIRI",
        },
      });
      let json = await res.json();
      if (!json.success) throw json;
      let url = json.link;
      fs.unlinkSync(audioName);
      conn.reply(m.chat, url, m);
    } catch (e) {
      console.log(e);
      conn.reply(m.chat, "Gagal mengunggah file", m);
    }
  } else {
    conn.reply(m.chat, "Balas audio/voice note dengan caption .musicurl", m);
  }
};

handler.command = /^musicurl$/i;
handler.help = ["musicurl"];
handler.tags = ["tools"];

module.exports = handler;