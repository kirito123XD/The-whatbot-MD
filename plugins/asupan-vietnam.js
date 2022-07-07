let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/vietnam'
    conn.sendButtonImg(m.chat, api-hyzer, 'aqui tiene', wm2, '𝚂𝚒𝚐𝚞𝚒𝚎𝚗𝚝𝚎', '.vietnam', m)
}
handler.help = ['vietnam']
handler.tags = ['asupan']
handler.command = /^(vietnam)$/i

module.exports = handler
