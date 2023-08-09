/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */

const axios = require('axios');
const os = require('os');

let handler = async (m) => {
  try {
    const response = await axios.get('http://ip-api.com/json/');
    const serverInfo = response.data;
    
    	conn.chatRead(m.chat)
	    conn.sendMessage(m.chat, {
        text: ''「▰▰▱▱▱▱▱▱▱▱」Loading...',
              '「▰▰▰▱▱▱▱▱▱▱」Loading...',
                 '「▰▰▰▰▱▱▱▱▱▱」Loading...',
                 '「▰▰▰▰▰▱▱▱▱▱」Loading...',
                '「▰▰▰▰▰▰▱▱▱▱」Loading...',
               '「▰▰▰▰▰▰▰▱▱▱」Loading...',
              '「▰▰▰▰▰▰▰▰▱▱」Loading...',
              '「▰▰▰▰▰▰▰▰▰▱」Loading...',
                '「▰▰▰▰▰▰▰▰▰▰」Selesai''
    });
    
    for (let i of ar) {
        await delay(100);
        await 
           conn.relayMessage(m.chat, {
            protocolMessage: {
                key: key,
                type: 14,
                editedMessage: {
                    extendedTextMessage: {
                        text: i
                    }
                }
            }
        })
    }
  }
}

    let serverMessage = `•  S E R V E R\n\n`;

    const osInfo = os.platform();

    const totalRAM = Math.floor(os.totalmem() / (1024 * 1024));
    const freeRAM = Math.floor(os.freemem() / (1024 * 1024));

    const uptime = os.uptime();
    const uptimeFormatted = formatUptime(uptime);

    const processor = os.cpus()[0].model;

    serverMessage += `┌  ◦  OS : ${osInfo}\n`;
    serverMessage += `│  ◦  Ram : ${freeRAM} MB / ${totalRAM} MB\n`;
    serverMessage += `│  ◦  Country : ${serverInfo.country}\n`;
    serverMessage += `│  ◦  CountryCode : ${serverInfo.countryCode}\n`;
    serverMessage += `│  ◦  Region : ${serverInfo.region}\n`;
    serverMessage += `│  ◦  RegionName : ${serverInfo.regionName}\n`;
    serverMessage += `│  ◦  City : ${serverInfo.city}\n`;
    serverMessage += `│  ◦  Zip : ${serverInfo.zip}\n`;
    serverMessage += `│  ◦  Lat : ${serverInfo.lat}\n`;
    serverMessage += `│  ◦  Lon : ${serverInfo.lon}\n`;
    serverMessage += `│  ◦  Timezone : ${serverInfo.timezone}\n`;
    serverMessage += `│  ◦  Isp : ${serverInfo.isp}\n`;
    serverMessage += `│  ◦  Org : ${serverInfo.org}\n`;
    serverMessage += `│  ◦  As : ${serverInfo.as}\n`;
    serverMessage += `│  ◦  Query : HIDDEN\n`;
    serverMessage += `│  ◦  Uptime : ${uptimeFormatted}\n`;
    serverMessage += `└  ◦  Processor : ${processor}`;

    await m.reply(serverMessage);
  } catch (e) {
    console.log(e);
  }
};

function formatUptime(uptime) {
  let seconds = Math.floor(uptime % 60);
  let minutes = Math.floor((uptime / 60) % 60);
  let hours = Math.floor((uptime / (60 * 60)) % 24);
  let days = Math.floor(uptime / (60 * 60 * 24));

  let formattedUptime = '';
  if (days > 0) formattedUptime += `${days} days `;
  if (hours > 0) formattedUptime += `${hours} hours `;
  if (minutes > 0) formattedUptime += `${minutes} minutes `;
  if (seconds > 0) formattedUptime += `${seconds} seconds`;

  return formattedUptime;
}

handler.command = ['server'];
handler.tags = ['info'];
handler.help = ['server'];

module.exports = handler;