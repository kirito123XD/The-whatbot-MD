let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let src
let handler = async (m, { conn, usedPrefix }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (id in conn.caklontong) {
        conn.reply(m.chat, 'Todavía hay preguntas sin responder en el chat.', conn.caklontong[id][0])
        throw false
    }
    if (!src) src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
${json.soal}

tiempo *${(timeout / 1000).toFixed(2)} segundos*
escriba ${usedPrefix}para obtener mas ayuda
Bonos: ${poin} XP
`.trim()
    conn.caklontong[id] = [
        await conn.sendBut(m.chat, caption, author, 'ayuda', '.calo', m),
        json, poin,
        setTimeout(async () => {
            if (conn.caklontong[id]) conn.sendBut(m.chat, `tiempo finalizado!\nla respuesta es *${json.jawaban}*\n${json.deskripsi}`, wm, 'Cak Lontong', '.caklontong', conn.caklontong[id][0])
            delete conn.caklontong[id]
        }, timeout)
    ]
}
handler.help = ['caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i

module.exports = handler