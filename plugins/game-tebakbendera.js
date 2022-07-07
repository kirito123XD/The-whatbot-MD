const fetch = require('node-fetch')
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
  let id = m.chat
  if (id in conn.tebakbendera) {
    conn.reply(m.chat, 'todavia hay pregunta sin responde el este chat', conn.tebakbendera[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `
  que bandera es esta?
tiempo *${(timeout / 1000).toFixed(2)} segundo*
escriba ${usedPrefix}para obtener ayuda
Bonos: ${poin} XP
    `.trim()
  conn.tebakbendera[id] = [
    await conn.sendButtonImg(m.chat, json.img, caption, wm3, 'ayuda', '.tebe', m)
    ,
    json, poin,
    setTimeout(async () => {
      if (conn.tebakbendera[id]) await conn.sendBut(m.chat, `se acabo el tiempo!\nla respuesta es*${json.name}*`, '', 'adivina la bandera', '.tebakbendera', conn.tebakbendera[id][0])
      delete conn.tebakbendera[id]
    }, timeout)
  ]
}
handler.help = ['tebakbendera']
handler.tags = ['game']
handler.command = /^tebakbendera/i

module.exports = handler
