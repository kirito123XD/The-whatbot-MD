let handler = async (m, { conn, text }) => {
    if (!text) throw 'ingrese el numero que quiere banea\n\nEjemplo: .ban 6282361160044'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'etiquetas algunos de ellos'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `usuario baneado exitosamente no tenga permiso de usa al bot`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.mods = true

module.exports = handler
