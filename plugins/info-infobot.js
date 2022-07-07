/**
**/

let handler = async (m, { conn }) => {
bear = ─〔 infobot〕
║ *hola* %name!
║ ➣🔋𝚃𝚒𝚎𝚖𝚙𝚘 𝙰𝚌𝚝𝚒𝚟𝚘 : *%uptime*
║ ➣ 🎟️𝙻𝚒𝚖𝚒𝚝𝚎 : *%limit Limit*
║ ➣⚡𝙽𝚒𝚟𝚎𝚕 : *%level*
║ ➣🎖️𝚁𝚊𝚗𝚐𝚘 : *%role*
║ ➣✨𝙴𝚇𝙿 : %totalexp XP 
║
║ ➣📆𝙵𝚎𝚌𝚑𝚊 : *%week %weton, %date*
║ ➣⌚𝙷𝚘𝚛𝚊 : *%time*
║
║ ➣📊𝚁𝚎𝚐𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚜 : %rtotalreg de %totalreg
║ ➣📥𝙼𝚎𝚖𝚘𝚛𝚒𝚊 𝚄𝚜𝚊𝚍𝚊 : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
└────
conn.sendButtonImg(m.chat, fla + '', esce, wm2, 'Menu', '.menu', m) 
}
handler.help = ['info', 'infobot']
handler.tags = ['info']
handler.command = /^(info|infobot)$/i

module.exports = handler
