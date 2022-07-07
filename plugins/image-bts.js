let handler = async (m, { conn }) => {
let api-hyzer = `https://api.lolhuman.xyz/api/random/bts?apikey=${lolkey}`
    conn.sendButtonImg(m.chat, api-hyzer, 'bts', wm2, '𝚂𝚒𝚐𝚞𝚒𝚎𝚗𝚝𝚎', '.bts', m)
}
handler.help = ['bts']
handler.tags = ['asupan', 'image']
handler.command = /^(bts)$/i

module.exports = handler
