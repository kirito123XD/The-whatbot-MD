const uploadImage = require('../lib/uploadImage')
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys-md')
const effects = ['jail', 'gay', 'glass', 'wasted', 'triggered']

let handler = async(m, { conn, usedPrefix, text }) => {
        let effect = text.trim().toLowerCase()
        if (!effects.includes(effect)) throw `
*𝚄𝚜𝚘:* ${usedPrefix}stickmaker <effectname>
*𝙴𝚓𝚎𝚖𝚙𝚕𝚘:* ${usedPrefix}stickmaker jail
*𝙻𝚒𝚜𝚝𝚊 𝚍𝚎 𝙴𝚏𝚎𝚌𝚝𝚘𝚜:*
${effects.map(effect => `_> ${effect}_`).join('\n')}
`.trim()
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No Image Found'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} not support`
  let img = await q.download()
  let url = await uploadImage(img)
  let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
    avatar: url
  })
try {
    let stiker = await sticker(null, apiUrl, global.packname, global.author)
    await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  } catch (e) {
    m.reply('gagal, coba gambar lain')
    await conn.sendFile(m.chat, apiUrl, 'image.png', null, m)
  }
}

handler.help = ['stickmaker (caption|reply img)']
handler.tags = ['sticker']
handler.command = /^(stickmaker|smaker)$/i
handler.limit = false
handler.group = false
handler.register = false
module.exports = handler
