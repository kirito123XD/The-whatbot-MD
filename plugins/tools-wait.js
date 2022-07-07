// https://github.com/Hyzerr
// hargai creator banh

const fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Responde a una foto/Enviar foto con el comando ${usedPrefix}wait`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  await m.reply('𝙱𝚞𝚜𝚌𝚊𝚗𝚍𝚘 𝚝𝚒𝚝𝚞𝚕𝚘𝚜 𝚍𝚎 𝚊𝚗𝚒𝚖𝚎...')
  let anime = `data:${mime};base64,${img.toString('base64')}`
  let response = await fetch('https://trace.moe/api/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ image: anime }),
  })
  if (!response.ok) throw '𝙽𝚘 𝚜𝚎 𝚎𝚗𝚌𝚘𝚗𝚝𝚛𝚊𝚛𝚘𝚗 𝚛𝚎𝚜𝚞𝚕𝚝𝚊𝚍𝚘𝚜'
  let result = await response.json()
  let { is_adult, title, title_chinese, title_romaji, episode, season, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
  let link = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`
  let nobuyaki = `
${similarity < 0.89 ? '𝚃𝚎𝚗𝚐𝚘 𝚙𝚘𝚌𝚊 𝚌𝚘𝚗𝚏𝚒𝚊𝚗𝚣𝚊 𝚎𝚗 𝚎𝚜𝚝𝚘' : ''}

❏ 𝚃𝙸𝚃𝚄𝙻𝙾 𝙹𝙰𝙿𝙾𝙽𝙴𝚂 : *${title}*
❏ 𝚃𝙸𝚃𝚄𝙻𝙾 𝙾𝚁𝚃𝙾𝙶𝚁𝙰𝙵𝙸𝙰 : *${title_romaji}*
❏ 𝚂𝙴𝙼𝙴𝙹𝙰𝙽𝚉𝙰𝚂 : *${(similarity * 100).toFixed(1)}%*
❏ 𝙴𝙿𝙸𝚂𝙾𝙳𝙸𝙾𝚂: *${episode.toString()}*
❏ 𝙿𝙰𝚁𝙰 𝙰𝚄𝙻𝚃𝙾𝚂 : *${is_adult ? 'Si' : 'No'}*
`.trim()
  conn.sendFile(m.chat, link, 'srcanime.mp4', `${nobuyaki}`, m)
}
handler.help = ['wait (caption|reply image)']
handler.tags = ['tools']
handler.command = /^(wait)$/i

module.exports = handler
