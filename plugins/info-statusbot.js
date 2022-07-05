/** 
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
    let wm = global.wm
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let duit = `*╭───── 「 𝐄𝐒𝐓𝐀𝐃𝐎 」 ──────*
│➦ 𝚃𝚒𝚎𝚖𝚙𝚘 𝚊𝚌𝚝𝚒𝚟𝚘 : ${uptime}
│➦ 𝙼𝚘𝚍𝚘 : ${global.opts['self'] ? 'privado' : 'publico'}
│➦ ${Object.keys(global.db.data.users).length} 𝚄𝚜𝚞𝚊𝚛𝚒𝚘𝚜
│➦ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 𝙲𝚑𝚊𝚝𝚜 𝙱𝚊𝚗𝚎𝚊𝚍𝚘𝚜 
│➦ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} 𝚄𝚜𝚞𝚊𝚛𝚒𝚘𝚜 𝙱𝚊𝚗𝚎𝚊𝚍𝚘𝚜 
╰────────`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/c07340c63e83549dd172f.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'GITHUB',
               url: 'https://github.com/Rebelde21/The-whatbot-MD'
             }

           },
               {
             quickReplyButton: {
               displayText: 'owner',
               id: '.owner',
             }
           },           
               {
             quickReplyButton: {
               displayText: 'speed',
               id: '.ping',
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

handler.help = ['estado']
handler.tags = ['info']
handler.command = /^status|estado$/i

module.exports = handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
