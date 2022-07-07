let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/malaysia'
    conn.sendButtonImg(m.chat, api-hyzer, 'aqui tiene', wm2, '𝚂𝚒𝚐𝚞𝚒𝚎𝚗𝚝𝚎', '.malaysia', m)
}
handler.help = ['malaysia']
handler.tags = ['asupan']
handler.command = /^(malaysia)$/i

module.exports = handler
