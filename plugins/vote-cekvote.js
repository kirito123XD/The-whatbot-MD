let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.sendBut(m.chat, `Tidak ada voting digrup ini!`, '© stikerin', 'Mulai', `${usedPrefix}+vote`, m)
    let [reason, upvote, devote] = conn.vote[id]
    let caption = `
「 *𝐕𝐎𝐓𝐎𝐒* 」
*𝙼𝚘𝚝𝚒𝚟𝚘:* ${reason}
*𝙰 𝚏𝚊𝚟𝚘𝚛*
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split`@`[0]).join('\n')}
*𝙴𝚗 𝚌𝚘𝚗𝚝𝚛𝚊*
_Total: ${devote.length}_
${devote.map(u => '@' + u.split`@`[0]).join('\n')}
wm
    `.trim()
    await conn.send3But(m.chat, caption, wm, 'ᴀ ғᴀᴠᴏʀ', `${usedPrefix}afavorv`, 'ᴇɴ ᴄᴏɴᴛʀᴀ', `${usedPrefix}encontrav`, 'ᴇʟɪᴍɪɴᴀʀ ᴠᴏᴛᴀᴄɪᴏɴ', `${usedPrefix}-voto`, m)
}
handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^chequiar$/i

module.exports = handler
