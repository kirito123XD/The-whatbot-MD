let handler = async (m, { conn }) => {
let rest = 'https://api.zacros.my.id/randomimg/darkjokes'
    conn.sendButtonImg(m.chat, rest, 'oscuro? 🤨', wm2, '𝚂𝚒𝚐𝚞𝚒𝚎𝚗𝚝𝚎', '.darkjokes', m)
}
handler.help = ['darkjokes']
handler.tags = ['internet', 'fun']
handler.command = /^(dragjokes|darkjokes)$/i

module.exports = handler