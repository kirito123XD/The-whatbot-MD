let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `𝚀𝚞𝚎 𝚊𝚗𝚒𝚖𝚎 𝚎𝚜𝚝𝚊𝚜 𝚋𝚞𝚜𝚌𝚊𝚗𝚍𝚘?`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date } = json.results[0]
let animeingfo = `✨️ *𝚃𝙸𝚃𝚄𝙻𝙾 :* ${title}
🎆️ *𝙴𝙿𝙸𝚂𝙾𝙳𝙸𝙾𝚂 :* ${episodes}
➡️ *𝙵𝙴𝙲𝙷𝙰 𝙳𝙴 𝙸𝙽𝙸𝙲𝙸𝙾 :* ${start_date}
🔚 *𝙵𝙴𝙲𝙷𝙰 𝙳𝙴 𝙵𝙸𝙽𝙰𝙻𝙸𝚉𝙰𝙲𝙸𝙾𝙽 :* ${end_date}
💬 *𝚃𝙸𝙿𝙾 𝙳𝙴 𝚂𝙷𝙾𝚆:* ${type}
💌️ *𝚁𝙰𝚃𝙸𝙽𝙶 :* ${rated}
❤️ *𝚂𝙲𝙾𝚁𝙴 :* ${score}
👥 *𝙼𝙸𝙴𝙼𝙱𝚁𝙾𝚂 :* ${members}
💚️ *𝚂𝚈𝙽𝙾𝙿𝚂𝙸𝚂 :* ${synopsis}
🌐️ *𝚄𝚁𝙻 :* ${url}`
  conn.sendFile(m.chat, image_url, '', animeingfo, m)
}
handler.help = ['anime <anime>']
handler.tags = ['anime']
handler.command = /^(anime|animeinfo)$/i
//maapin fatur :<
module.exports = handler
