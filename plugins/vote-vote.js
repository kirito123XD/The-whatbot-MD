let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.sendBut(m.chat, `𝙽𝚘 𝚑𝚊𝚢 𝚟𝚘𝚝𝚊𝚌𝚒𝚘𝚗𝚎𝚜 𝚎𝚗 𝚎𝚜𝚝𝚎 𝚐𝚛𝚞𝚙𝚘!`, wm, 'ᴄᴏᴍᴇɴᴢᴀʀ', `${usedPrefix}+votar`, m)
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) throw '¡𝙷𝚊𝚜 𝚟𝚘𝚝𝚊𝚍𝚘!'
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    let [reason, upvote, devote] = conn.vote[id]
    let caption = `
「 *𝐕𝐎𝐓𝐎𝐒* 」
*𝙼𝚘𝚝𝚒𝚟𝚘:* ${reason}
*𝙰 𝚏𝚊𝚟𝚘𝚛*
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split`@`[0]).join('\n')}
*𝙴𝚗 𝚌𝚘𝚗𝚝𝚛𝚊  *
_Total: ${devote.length}_
${devote.map(u => '@' + u.split`@`[0]).join('\n')}
    `.trim()
    conn.send2But(m.chat, caption, wm, '𝙰 𝚏𝚊𝚟𝚘𝚛 ', `${usedPrefix}afavorv`, '𝙴𝚗 𝚌𝚘𝚗𝚝𝚛𝚊', `${usedPrefix}encontrav`, m)
}
handler.help = ['afavorv', 'encontrav']
handler.tags = ['vote']
handler.command = /^(afavor|encontra)v$/i

module.exports = handler
