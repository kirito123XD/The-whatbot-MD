const fetch = require('node-fetch')
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}
  let id = m.chat
  if (id in conn.tebakkabupaten) {
    conn.reply(m.chat, 'Todavía hay preguntas sin responder en este chat', conn.tebakkabupaten[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `
 qué distrito es este?
tiempo*${(timeout / 1000).toFixed(2)} segundo*
escriba ${usedPrefix}para obtener ayuda
Bonos: ${poin} XP
    `.trim()
  conn.tebakkabupaten[id] = [
    await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), caption, '', 'ayuda', '.tebu', m)
    ,
    json, poin,
    setTimeout(async () => {
      if (conn.tebakkabupaten[id]) await conn.sendBut(m.chat, `se agoto el tiempo!\nla respuesta es *${json.title}*`, '', 'adivina la regencia', '.tebakkabupaten', conn.tebakkabupaten[id][0])
      delete conn.tebakkabupaten[id]
    }, timeout)
  ]
}
handler.help = ['tebakkabupaten']
handler.tags = ['game']
handler.command = /^tebakkabupaten/i

module.exports = handler
