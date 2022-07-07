const uploadImage = require('../lib/uploadImage')
const { MessageType } = require('@adiwajshing/baileys-md')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command} <${atas ? atas : 'teks atas'}>|<${bawah ? bawah : 'teks bawah'}>`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*𝙼𝚒𝚖𝚒𝚌𝚊 ${mime} 𝚗𝚘 𝚜𝚘𝚙𝚘𝚛𝚝𝚊𝚍𝚘!*_`
    let img = await q.download()
    let url = await uploadImage(img)
    meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
try {
    let stiker = await sticker(null, meme, global.packname, global.author)
    await conn.sendFile(m.chat, stiker, {
      quoted: m
    })
  } catch (e) {
    m.reply('𝙽𝚘 𝚜𝚎 𝚙𝚞𝚍𝚘 𝚌𝚛𝚎𝚊𝚛 𝚞𝚗𝚊 𝚎𝚝𝚒𝚚𝚞𝚎𝚝𝚊, 𝚒𝚗𝚝𝚎𝚗𝚝𝚊𝚗𝚍𝚘 𝚎𝚗𝚟𝚒𝚊𝚛 𝚞𝚗𝚊 𝚒𝚖𝚊𝚐𝚎𝚗')
    await conn.sendFile(m.chat, meme, 'image.png', 'JADIKAN STIKER SECARA MANUAL DENGAN MENGETIK .S', m)
  }
}
handler.help = ['smim <teks atas>|<teks bawah>']
handler.tags = ['sticker']
handler.command = /^(smim)$/i

handler.limit = false

module.exports = handler
