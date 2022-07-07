let fetch = require('node-fetch')
let handler = async (m, { conn, command, args }) => {
  if (args[0] === 'Nekopoi.care') {
      conn.reply(m.chat, '*𝚊𝚛𝚛𝚎𝚙𝚎𝚗𝚝𝚒𝚖𝚒𝚎𝚗𝚝𝚘 𝚐𝚞𝚊𝚞*', m)
      reject
  }
  if (args[0] === 'Nhentai.net') {
      conn.reply(m.chat, '*𝚊𝚛𝚛𝚎𝚙𝚎𝚗𝚝𝚒𝚖𝚒𝚎𝚗𝚝𝚘 𝚐𝚞𝚊𝚞*', m)
      reject
  }
  let full = /f$/i.test(command)
  if (!args[0]) return conn.reply(m.chat, '𝚂𝚒𝚗 𝚄𝚁𝙻', m)
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let ss = await (await fetch('https://hadi-api.herokuapp.com/api/ssweb?url=' + encodeURIComponent(url) + '&device=desktop&full=on')).buffer()
  conn.sendFile(m.chat, ss, 'screenshot.png', url, m)
}
handler.help = ['sslaptop', 'sspc'].map(v => v + ' <url>')
handler.tags = ['internet']
handler.command = /^ss(laptop)?pc?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler