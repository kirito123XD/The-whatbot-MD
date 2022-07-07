let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let src
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
  let id = m.chat
  if (id in conn.tebakgambar) {
    conn.reply(m.chat, 'todavia hay respuesta sin responder el este chat', conn.tebakgambar[id][0])
    throw false
  }
  if (!src) src = await (await fetch(global.API('https://raw.githubusercontent.com', '/BochilTeam/database/master/games/tebakgambar.json'))).json()
  let json = src[Math.floor(Math.random() * src.length)]
  if (!json) throw json
  let caption = `
tiempo*${(timeout / 1000).toFixed(2)} segundo*
escriba ${usedPrefix}pista por pista
Bonos: ${poin} XP
    `.trim()
  conn.tebakgambar[id] = [
    await conn.sendButtonImg(m.chat, json.img, caption, wm, 'ayuda', '.hint', m, false),
    json, poin,
    setTimeout(() => {
      if (conn.tebakgambar[id]) conn.reply(m.chat, `se acabo rl tiempo\nla respuesta es *${json.jawaban}*`, conn.tebakgambar[id][0])
      delete conn.tebakgambar[id]
    }, timeout)
  ]
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar/i

module.exports = handler
