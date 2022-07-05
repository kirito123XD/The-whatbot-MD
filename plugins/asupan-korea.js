let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/korea'
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, '𝚂𝚒𝚐𝚞𝚒𝚎𝚗𝚝e' , '.korea', m)
}
handler.help = ['korea']
handler.tags = ['asupan']
handler.command = /^(korea)$/i

module.exports = handler

