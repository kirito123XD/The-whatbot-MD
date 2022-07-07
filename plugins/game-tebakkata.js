let fetch = require('node-fetch')
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (id in conn.tebakkata) {
        conn.reply(m.chat, 'todavia hay respuesta sin responder el este chat ini', conn.tebakkata[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = `
${json.soal}

Tiempo *${(timeout / 1000).toFixed(2)} segundos*
escribi ${usedPrefix}para adivina obtener ayuda
Bonos: ${poin} XP
`.trim()
    conn.tebakkata[id] = [
        await conn.sendBut(m.chat, caption, wm, 'ayuda', '.teka', m),
        json, poin,
        setTimeout(async () => {
            if (conn.tebakkata[id]) await conn.sendBut(m.chat, `se acabo el tiempo!\nla respuesta es *${json.jawaban}*`, '© stickes', 'adivina la palabra', '.tebakkata', conn.tebakkata[id][0])
            delete conn.tebakkata[id]
        }, timeout)
    ]
}
handler.help = ['tebakkata']
handler.tags = ['game']
handler.command = /^tebakkata/i

module.exports = handler