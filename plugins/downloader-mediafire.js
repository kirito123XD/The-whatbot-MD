const { mediafireDl } = require('../lib/mediafire.js')
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
if (!text) return m.reply(`Kirim perintah ${usedPrefix + command} *link mediafire*`)
if (!args[0].includes('mediafire.com')) return m.reply(error.linkmf)
let mdjon = args.join(' ')
res = await mediafireDl(mdjon)
result = `「 *𝐌𝐄𝐃𝐀𝐅𝐈𝐑𝐄* 」
*¡𝙳𝚊𝚝𝚘𝚜 𝚘𝚋𝚝𝚎𝚗𝚒𝚍𝚘𝚜 𝚌𝚘𝚗 𝚎𝚡𝚒𝚝𝚘!*
🆔 𝙽𝚘𝚖𝚋𝚛𝚎 : ${res[0].nama}
📊 𝚃𝚊𝚖𝚊ñ𝚘 : ${res[0].size}
💬 Link : ${res[0].link}
_𝙴𝚜𝚙𝚎𝚛𝚎 𝚎𝚕 𝚙𝚛𝚘𝚌𝚎𝚜𝚘 𝚍𝚎 𝚌𝚊𝚛𝚐𝚊 𝚍𝚎 𝚖𝚎𝚍𝚒𝚘𝚜_`
m.reply(result)
//await sleep(100)
conn.sendFile(m.chat, res[0].link, res[0].nama, null, m, false, {asDocument:true, mimetype:res[0].mime})
}
handler.command = ['mediafire']

module.exports = handler
