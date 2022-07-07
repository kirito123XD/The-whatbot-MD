const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu = `╭───❑ 「 𝐁𝐀𝐋𝐀𝐍𝐂𝐄 」 ❑────
├─ 📇 *𝙽𝙾𝙼𝙱𝚁𝙴*: ${user.name}
├─ 🆔 *𝙽𝚄𝙼𝙴𝚁𝙾* : ${require('awesome-phonenumber')(`+${m.sender.split('@')[0]}`).getNumber('international')}
├─ 🎨 *𝙴𝙳𝙰𝙳* : ${user.registered ? '' + user.age : ''}
├─ 🎫 *𝙻𝙸𝙼𝙸𝚃𝙴*: ${user.limit}
├─ 💹 *𝙳𝙸𝙽𝙴𝚁𝙾*: ${user.money}
├─ 📍 *𝚁𝙰𝙽𝙶𝙾*: ${user.role}
├─ 💳 *B𝙱𝙰𝙽𝙲𝙾* : ${user.atm}
├─ 🎟 ️ *𝙻𝙸𝙼𝙸𝚃 𝙳𝙴 𝙹𝚄𝙴𝙶𝙾* : ${user.glimit}
├─ 📊 *𝙽𝙸𝚅𝙴𝙻*: ${user.level}
╰─❑ ✨ *𝙴𝚇𝙿*: ${user.exp}
`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/bank.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '💠 ɢɪᴛʜᴜʙ',
               url: 'https://github.com/elrebelde21/pruebabot'
             }

           },
               {
             quickReplyButton: {
               displayText: '🔙 ᴍᴇɴᴜ',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['my', 'my @user']
handler.tags = ['xp']
handler.command = /^(my)$/i

module.exports = handler
