const { toPTT } = require('../lib/converter')
const { MessageType } = require('@adiwajshing/baileys-md')

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) throw `𝚁𝚎𝚜𝚙𝚘𝚗𝚍𝚊 𝚊𝚕 𝚟𝚒𝚍𝚎𝚘 𝚘 𝚗𝚘𝚝𝚊 𝚍𝚎 𝚟𝚘𝚣 𝚚𝚞𝚎 𝚍𝚎𝚜𝚎𝚊 𝚌𝚘𝚗𝚟𝚎𝚛𝚝𝚒𝚛 𝚊 𝚖𝚙𝟹 𝚌𝚘𝚗 𝚎𝚕 𝚌𝚘𝚖𝚊𝚗𝚍𝚘  *${usedPrefix + command}*`
  let media = await q.download()
  let audio = await toPTT(media, 'mp4')
 
//conn.sendFile(m.chat, audio,  0,0,m,true, {ptt:true })
 conn.sendMessage(m.chat, {audio:audio}, {
    quoted: m,
    ptt: true
  })
}
handler.help = ['tomp3 (reply)']
handler.tags = ['tools']

handler.command = /^to(mp3|a(udio)?)$/i

module.exports = handler
