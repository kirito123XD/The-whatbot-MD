
const fetch = require('node-fetch')
let timeout = 120000
let poin = 2500
let handler = async (m, { conn, usedPrefix }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (id in conn.asahotak) {
        conn.reply(m.chat, 'todavia hay pregunta si responde el este chat', conn.asahotak[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
${json.soal}
Tiempo *${(timeout / 1000).toFixed(2)} segudos*
escriba${usedPrefix}para obtener mas ayuda
Bonos: ${poin} XP
    `.trim()
    conn.asahotak[id] = [
        await conn.sendBut(m.chat, caption, wm, 'ayuda', '.ao', m),
        json, poin,
        setTimeout(async () => {
            if (conn.asahotak[id]) await conn.sendBut(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, wm, 'mas', '.asahotak', conn.asahotak[id][0])
            delete conn.asahotak[id]
        }, timeout)
    ]
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asahotak/i

module.exports = handler
