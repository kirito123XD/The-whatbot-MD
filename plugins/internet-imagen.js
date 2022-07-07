let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text }) => {
  if (!text) return m.reply('qie está buscado?')
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return m.reply('Extraviado')
  conn.sendButtonImg(m.chat, url, `
*── 「 𝐈𝐌𝐀𝐆𝐄𝐍 」 ──*

𝚁𝚎𝚜𝚞𝚕𝚝𝚊𝚍𝚘𝚜 𝚍𝚎: ${text}
`.trim(), wm, '𝚂𝚒𝚐𝚞𝚒𝚎𝚗𝚝𝚎', `.gimage ${text}`, m)
}
handler.help = ['imagen <text>']
handler.tags = ['internet']
handler.command = /^(gimage|image|imagen)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
