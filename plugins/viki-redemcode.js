/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let handler = async (m, { conn, args }) => {
  if (args.length !== 1) {
    throw '*Example*: .redemcode 100000';
  }

  let totalPrize = parseInt(args[0]);
  if (isNaN(totalPrize) || totalPrize <= 0) {
    throw '*Example*: .redemcode 100000';
  }

  let redeemCodes = [];
  let prizePerPerson = Math.floor(totalPrize / 5);
  let remainingPrize = totalPrize;

  for (let i = 0; i < 5; i++) {
    let redeemCode = Math.floor(Math.random() * 90000) + 10000;
    let expiryTime = Date.now() + (5 * 60 * 1000); // 5 minutes
    let prizeAmount = Math.min(prizePerPerson, remainingPrize);

    redeemCodes.push({
      code: redeemCode,
      expiryTime: expiryTime,
      prize: prizeAmount,
      redeemedBy: []
    });

    remainingPrize -= prizeAmount;
  }

  global.redeemCodes = redeemCodes;

  conn.reply(m.chat, `🐱 Your redeem code is ${redeemCodes[0].code}, please redeem before the 5 minute expiration.\n\nTotal prize distributed: ${totalPrize} balance, divided equally among 5 people:\n- ${redeemCodes[0].prize} balance\n- ${redeemCodes[1].prize} balance\n- ${redeemCodes[2].prize} balance\n- ${redeemCodes[3].prize} balance\n- ${redeemCodes[4].prize} balance`, m);
};

handler.help = ['redemcode <jumlah hadiah>'];
handler.tags = ['game'];
handler.command = /^redemcode$/i;
handler.register = true;
handler.owner = true

module.exports = handler;