
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
let duit = `╭──[ *𝐀𝐅𝐊 !* ]──✧
┆ *𝙽𝚘𝚖𝚋𝚛𝚎* : ${conn.getName(m.sender)}
┆ *𝙼𝚘𝚝𝚒𝚟𝚘* : ${text ? '' + text : ''}
╰┅────★
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/5c9cdc814bd2af7faa4ce.png' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'GITHUB',
               url: ''
             }

           },
               {
             callButton: {
               displayText: '',
               phoneNumber: ''
             }
           },           
               {
             quickReplyButton: {
               displayText: 'Salir de AFK',
               id: 'a',
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

handler.help = ['afk']
handler.tags = ['info']
handler.command = /^afk$/i

module.exports = handler

let wm = global.botwm
